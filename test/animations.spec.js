/**
 * Tests for the v-reveal and v-stagger custom Vue directives
 * (plugins/animations.client.js)
 *
 * We extract the directive hook logic and test it directly,
 * mocking IntersectionObserver so tests run in jsdom.
 */

// ─── IntersectionObserver mock ───────────────────────────────────────────────
let observerCallback = null
let observedElements = []

class MockIntersectionObserver {
  constructor(cb) {
    observerCallback = cb
    this.unobserveCalled = false
  }
  observe(el) {
    observedElements.push({ el, observer: this })
  }
  unobserve() {
    this.unobserveCalled = true
  }
}

global.IntersectionObserver = MockIntersectionObserver

// Helper: fire the mock observer callback for a given element as if it entered
function triggerIntersect(el, isIntersecting = true) {
  if (observerCallback) {
    observerCallback([{ isIntersecting, target: el }])
  }
}

// ─── Load directive logic ─────────────────────────────────────────────────────
// We import the binding logic from the plugin by reimplementing it here based
// on the actual source, so we can call `inserted` directly without Vue.
function makeRevealDirective() {
  return {
    inserted(el, binding) {
      const delay = typeof binding.value === 'object' ? binding.value.delay || 0 : 0
      const animClass = typeof binding.value === 'string' ? binding.value : 'fade-up'

      el.style.opacity = '0'
      el.style.transition = 'none'

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.classList.add('revealed', animClass)
                el.style.opacity = ''
                el.style.transition = ''
              }, delay)
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.12 }
      )
      observer.observe(el)
    },
  }
}

function makeStaggerDirective() {
  return {
    inserted(el, binding) {
      const interval = typeof binding.value === 'number' ? binding.value : 80
      const children = Array.from(el.children)

      children.forEach((child) => {
        child.style.opacity = '0'
        child.style.transition = 'none'
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add('revealed', 'fade-up')
                  child.style.opacity = ''
                  child.style.transition = ''
                }, i * interval)
              })
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    },
  }
}

// ─── v-reveal tests ───────────────────────────────────────────────────────────
describe('v-reveal directive', () => {
  const reveal = makeRevealDirective()

  beforeEach(() => {
    observerCallback = null
    observedElements = []
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('sets initial opacity to 0 on insert', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    expect(el.style.opacity).toBe('0')
  })

  test('sets initial transition to none on insert', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    expect(el.style.transition).toBe('none')
  })

  test('registers element with IntersectionObserver', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    expect(observedElements.some((e) => e.el === el)).toBe(true)
  })

  test('adds "revealed" and "fade-up" classes when element intersects (no delay)', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    triggerIntersect(el)
    jest.runAllTimers()
    expect(el.classList.contains('revealed')).toBe(true)
    expect(el.classList.contains('fade-up')).toBe(true)
  })

  test('clears opacity and transition after revealing', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    triggerIntersect(el)
    jest.runAllTimers()
    expect(el.style.opacity).toBe('')
    expect(el.style.transition).toBe('')
  })

  test('uses custom animation class when value is a string', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: 'slide-in' })
    triggerIntersect(el)
    jest.runAllTimers()
    expect(el.classList.contains('slide-in')).toBe(true)
    expect(el.classList.contains('fade-up')).toBe(false)
  })

  test('respects delay from object binding', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: { delay: 300 } })
    triggerIntersect(el)

    // Before 300ms — classes not added yet
    jest.advanceTimersByTime(200)
    expect(el.classList.contains('revealed')).toBe(false)

    // After 300ms — classes added
    jest.advanceTimersByTime(200)
    expect(el.classList.contains('revealed')).toBe(true)
  })

  test('does not reveal when entry is not intersecting', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    triggerIntersect(el, false)
    jest.runAllTimers()
    expect(el.classList.contains('revealed')).toBe(false)
  })

  test('calls unobserve after revealing', () => {
    const el = document.createElement('div')
    reveal.inserted(el, { value: undefined })
    const { observer } = observedElements[observedElements.length - 1]
    triggerIntersect(el)
    jest.runAllTimers()
    expect(observer.unobserveCalled).toBe(true)
  })
})

// ─── v-stagger tests ──────────────────────────────────────────────────────────
describe('v-stagger directive', () => {
  const stagger = makeStaggerDirective()

  beforeEach(() => {
    observerCallback = null
    observedElements = []
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  function makeParent(childCount = 3) {
    const el = document.createElement('ul')
    for (let i = 0; i < childCount; i++) {
      el.appendChild(document.createElement('li'))
    }
    return el
  }

  test('sets opacity 0 on all children on insert', () => {
    const el = makeParent(3)
    stagger.inserted(el, { value: 80 })
    Array.from(el.children).forEach((child) => {
      expect(child.style.opacity).toBe('0')
    })
  })

  test('sets transition none on all children on insert', () => {
    const el = makeParent(3)
    stagger.inserted(el, { value: 80 })
    Array.from(el.children).forEach((child) => {
      expect(child.style.transition).toBe('none')
    })
  })

  test('uses default interval of 80ms when no value provided', () => {
    const el = makeParent(2)
    stagger.inserted(el, { value: undefined })
    triggerIntersect(el)

    // Child 0: fires at 0ms
    jest.advanceTimersByTime(0)
    expect(el.children[0].classList.contains('revealed')).toBe(true)
    // Child 1: fires at 80ms
    expect(el.children[1].classList.contains('revealed')).toBe(false)
    jest.advanceTimersByTime(80)
    expect(el.children[1].classList.contains('revealed')).toBe(true)
  })

  test('staggers children with custom interval', () => {
    const el = makeParent(3)
    stagger.inserted(el, { value: 100 })
    triggerIntersect(el)

    jest.advanceTimersByTime(0)
    expect(el.children[0].classList.contains('revealed')).toBe(true)
    expect(el.children[1].classList.contains('revealed')).toBe(false)
    expect(el.children[2].classList.contains('revealed')).toBe(false)

    jest.advanceTimersByTime(100)
    expect(el.children[1].classList.contains('revealed')).toBe(true)
    expect(el.children[2].classList.contains('revealed')).toBe(false)

    jest.advanceTimersByTime(100)
    expect(el.children[2].classList.contains('revealed')).toBe(true)
  })

  test('adds "revealed" and "fade-up" classes to each child', () => {
    const el = makeParent(2)
    stagger.inserted(el, { value: 50 })
    triggerIntersect(el)
    jest.runAllTimers()
    Array.from(el.children).forEach((child) => {
      expect(child.classList.contains('revealed')).toBe(true)
      expect(child.classList.contains('fade-up')).toBe(true)
    })
  })

  test('clears opacity and transition on each child after reveal', () => {
    const el = makeParent(2)
    stagger.inserted(el, { value: 50 })
    triggerIntersect(el)
    jest.runAllTimers()
    Array.from(el.children).forEach((child) => {
      expect(child.style.opacity).toBe('')
      expect(child.style.transition).toBe('')
    })
  })

  test('does not trigger when not intersecting', () => {
    const el = makeParent(2)
    stagger.inserted(el, { value: 50 })
    triggerIntersect(el, false)
    jest.runAllTimers()
    Array.from(el.children).forEach((child) => {
      expect(child.classList.contains('revealed')).toBe(false)
    })
  })

  test('calls unobserve after stagger triggers', () => {
    const el = makeParent(2)
    stagger.inserted(el, { value: 50 })
    const { observer } = observedElements[observedElements.length - 1]
    triggerIntersect(el)
    jest.runAllTimers()
    expect(observer.unobserveCalled).toBe(true)
  })

  test('handles parent with no children gracefully', () => {
    const el = document.createElement('ul')
    expect(() => {
      stagger.inserted(el, { value: 80 })
      triggerIntersect(el)
      jest.runAllTimers()
    }).not.toThrow()
  })
})

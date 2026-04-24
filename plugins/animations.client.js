import Vue from 'vue'

// v-reveal directive: scroll-triggered entrance animation
// Usage: v-reveal, v-reveal="'delay-200'", v-reveal="{ delay: 300, class: 'fade-up' }"
Vue.directive('reveal', {
  inserted(el, binding) {
    const delay =
      typeof binding.value === 'object' ? binding.value.delay || 0 : 0
    const animClass =
      typeof binding.value === 'string' ? binding.value : 'fade-up'

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
})

// v-stagger directive: staggers children on scroll reveal
// Usage: v-stagger, v-stagger="100" (ms between each child)
Vue.directive('stagger', {
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
})

import {
  services,
  caseStudies,
  processSteps,
  packages,
  faqs,
  whoWeHelp,
  systemCards,
} from '@/data/siteContent'

describe('siteContent — services', () => {
  test('exports 6 services', () => {
    expect(services).toHaveLength(6)
  })

  test('every service has required string fields', () => {
    services.forEach((s) => {
      expect(typeof s.icon).toBe('string')
      expect(s.icon.length).toBeGreaterThan(0)
      expect(typeof s.title).toBe('string')
      expect(s.title.length).toBeGreaterThan(0)
      expect(typeof s.description).toBe('string')
      expect(s.description.length).toBeGreaterThan(0)
      expect(typeof s.bestFor).toBe('string')
      expect(s.bestFor.length).toBeGreaterThan(0)
    })
  })

  test('service titles are unique', () => {
    const titles = services.map((s) => s.title)
    expect(new Set(titles).size).toBe(titles.length)
  })
})

describe('siteContent — caseStudies', () => {
  test('exports 4 case studies', () => {
    expect(caseStudies).toHaveLength(4)
  })

  test('every case study has required fields', () => {
    caseStudies.forEach((c) => {
      expect(typeof c.brand).toBe('string')
      expect(c.brand.length).toBeGreaterThan(0)
      expect(typeof c.industry).toBe('string')
      expect(typeof c.focus).toBe('string')
      expect(typeof c.summary).toBe('string')
      expect(typeof c.tag).toBe('string')
      expect(typeof c.tagColor).toBe('string')
      expect(typeof c.accentClass).toBe('string')
    })
  })

  test('optional quote field is a string when present', () => {
    caseStudies.forEach((c) => {
      if (c.quote !== undefined) {
        expect(typeof c.quote).toBe('string')
        expect(c.quote.length).toBeGreaterThan(0)
      }
    })
  })
})

describe('siteContent — processSteps', () => {
  test('exports 4 process steps', () => {
    expect(processSteps).toHaveLength(4)
  })

  test('step numbers are sequential 01–04', () => {
    const numbers = processSteps.map((s) => s.number)
    expect(numbers).toEqual(['01', '02', '03', '04'])
  })

  test('every step has a title and description', () => {
    processSteps.forEach((s) => {
      expect(typeof s.title).toBe('string')
      expect(s.title.length).toBeGreaterThan(0)
      expect(typeof s.description).toBe('string')
      expect(s.description.length).toBeGreaterThan(0)
    })
  })
})

describe('siteContent — packages', () => {
  test('exports 3 packages', () => {
    expect(packages).toHaveLength(3)
  })

  test('exactly one package is featured', () => {
    const featured = packages.filter((p) => p.featured)
    expect(featured).toHaveLength(1)
  })

  test('every package has a name, description, cta, and includes list', () => {
    packages.forEach((p) => {
      expect(typeof p.name).toBe('string')
      expect(p.name.length).toBeGreaterThan(0)
      expect(typeof p.description).toBe('string')
      expect(typeof p.cta).toBe('string')
      expect(Array.isArray(p.includes)).toBe(true)
      expect(p.includes.length).toBeGreaterThan(0)
    })
  })

  test('featured package has a badge', () => {
    const featured = packages.find((p) => p.featured)
    expect(typeof featured.badge).toBe('string')
    expect(featured.badge.length).toBeGreaterThan(0)
  })
})

describe('siteContent — faqs', () => {
  test('exports 6 FAQs', () => {
    expect(faqs).toHaveLength(6)
  })

  test('every FAQ has a non-empty question and answer', () => {
    faqs.forEach((f) => {
      expect(typeof f.question).toBe('string')
      expect(f.question.length).toBeGreaterThan(0)
      expect(typeof f.answer).toBe('string')
      expect(f.answer.length).toBeGreaterThan(0)
    })
  })

  test('FAQ questions are unique', () => {
    const questions = faqs.map((f) => f.question)
    expect(new Set(questions).size).toBe(questions.length)
  })
})

describe('siteContent — whoWeHelp', () => {
  test('exports 4 audience segments', () => {
    expect(whoWeHelp).toHaveLength(4)
  })

  test('every segment has title, description, and icon', () => {
    whoWeHelp.forEach((w) => {
      expect(typeof w.title).toBe('string')
      expect(w.title.length).toBeGreaterThan(0)
      expect(typeof w.description).toBe('string')
      expect(w.description.length).toBeGreaterThan(0)
      expect(typeof w.icon).toBe('string')
      expect(w.icon.length).toBeGreaterThan(0)
    })
  })
})

describe('siteContent — systemCards', () => {
  test('exports exactly 3 system cards', () => {
    expect(systemCards).toHaveLength(3)
  })

  test('card titles are Attract, Convert, Follow Through', () => {
    const titles = systemCards.map((c) => c.title)
    expect(titles).toEqual(['Attract', 'Convert', 'Follow Through'])
  })

  test('every card has bullets array with at least one item', () => {
    systemCards.forEach((c) => {
      expect(Array.isArray(c.bullets)).toBe(true)
      expect(c.bullets.length).toBeGreaterThan(0)
    })
  })

  test('every card has icon and color strings', () => {
    systemCards.forEach((c) => {
      expect(typeof c.icon).toBe('string')
      expect(c.icon.length).toBeGreaterThan(0)
      expect(typeof c.color).toBe('string')
      expect(c.color.length).toBeGreaterThan(0)
    })
  })
})

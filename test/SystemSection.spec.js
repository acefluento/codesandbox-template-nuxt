import { mount } from '@vue/test-utils'
import SystemSection from '@/components/SystemSection.vue'

const directives = { reveal: {}, stagger: {} }

describe('SystemSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SystemSection, { directives })
  })

  // --- cardBorderClass ---
  describe('cardBorderClass', () => {
    test('index 0 returns blue border classes', () => {
      expect(wrapper.vm.cardBorderClass(0)).toBe('border-brand-blue/20 hover:border-brand-blue/40')
    })

    test('index 1 returns red border classes', () => {
      expect(wrapper.vm.cardBorderClass(1)).toBe('border-brand-red/20 hover:border-brand-red/40')
    })

    test('index 2 returns emerald border classes', () => {
      expect(wrapper.vm.cardBorderClass(2)).toBe('border-brand-emerald/20 hover:border-brand-emerald/40')
    })
  })

  // --- iconBgClass ---
  describe('iconBgClass', () => {
    test('index 0 returns blue background', () => {
      expect(wrapper.vm.iconBgClass(0)).toBe('bg-brand-blue/15')
    })

    test('index 1 returns red background', () => {
      expect(wrapper.vm.iconBgClass(1)).toBe('bg-brand-red/15')
    })

    test('index 2 returns emerald background', () => {
      expect(wrapper.vm.iconBgClass(2)).toBe('bg-brand-emerald/15')
    })
  })

  // --- iconColorClass ---
  describe('iconColorClass', () => {
    test('index 0 returns blue text', () => {
      expect(wrapper.vm.iconColorClass(0)).toBe('text-brand-blue')
    })

    test('index 1 returns red text', () => {
      expect(wrapper.vm.iconColorClass(1)).toBe('text-brand-red')
    })

    test('index 2 returns emerald text', () => {
      expect(wrapper.vm.iconColorClass(2)).toBe('text-brand-emerald')
    })
  })

  // --- dotClass ---
  describe('dotClass', () => {
    test('index 0 returns blue dot', () => {
      expect(wrapper.vm.dotClass(0)).toBe('bg-brand-blue/60')
    })

    test('index 1 returns red dot', () => {
      expect(wrapper.vm.dotClass(1)).toBe('bg-brand-red/60')
    })

    test('index 2 returns emerald dot', () => {
      expect(wrapper.vm.dotClass(2)).toBe('bg-brand-emerald/60')
    })
  })

  // --- Rendering ---
  test('renders 3 system cards', () => {
    // Each card is a div with the border class applied
    const cards = wrapper.findAll('.bg-brand-navy.border.rounded-2xl')
    expect(cards.length).toBe(3)
  })

  test('card titles match Attract / Convert / Follow Through', () => {
    const headings = wrapper.findAll('h3')
    expect(headings.at(0).text()).toBe('Attract')
    expect(headings.at(1).text()).toBe('Convert')
    expect(headings.at(2).text()).toBe('Follow Through')
  })

  test('each card shows its step number', () => {
    const steps = wrapper.findAll('span.text-xs')
    expect(steps.at(0).text()).toBe('Step 1')
    expect(steps.at(1).text()).toBe('Step 2')
    expect(steps.at(2).text()).toBe('Step 3')
  })
})

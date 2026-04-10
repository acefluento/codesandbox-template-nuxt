import { mount } from '@vue/test-utils'
import InlineCta from '@/components/InlineCta.vue'

describe('InlineCta', () => {
  test('renders default message when no prop provided', () => {
    const wrapper = mount(InlineCta)
    expect(wrapper.find('p').text()).toBe(
      'Ready to build a system that actually moves your business forward?'
    )
  })

  test('renders custom message prop', () => {
    const wrapper = mount(InlineCta, {
      propsData: { message: 'Custom CTA message here.' },
    })
    expect(wrapper.find('p').text()).toBe('Custom CTA message here.')
  })

  test('uses bg-brand-navy-2 background by default (dark=false)', () => {
    const wrapper = mount(InlineCta)
    expect(wrapper.find('div').classes()).toContain('bg-brand-navy-2')
    expect(wrapper.find('div').classes()).not.toContain('bg-brand-navy')
  })

  test('uses bg-brand-navy background when dark=true', () => {
    const wrapper = mount(InlineCta, {
      propsData: { dark: true },
    })
    expect(wrapper.find('div').classes()).toContain('bg-brand-navy')
    expect(wrapper.find('div').classes()).not.toContain('bg-brand-navy-2')
  })

  test('CTA link points to #contact', () => {
    const wrapper = mount(InlineCta)
    expect(wrapper.find('a').attributes('href')).toBe('#contact')
  })

  test('CTA link text is correct', () => {
    const wrapper = mount(InlineCta)
    expect(wrapper.find('a').text()).toContain('Book Free Strategy Call')
  })

  test('dark prop defaults to false', () => {
    const wrapper = mount(InlineCta)
    expect(wrapper.vm.dark).toBe(false)
  })
})

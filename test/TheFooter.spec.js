import { mount } from '@vue/test-utils'
import TheFooter from '@/components/TheFooter.vue'

describe('TheFooter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheFooter)
  })

  test('displays the current year in the copyright notice', () => {
    const currentYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(String(currentYear))
  })

  test('year data property equals the current year', () => {
    expect(wrapper.vm.year).toBe(new Date().getFullYear())
  })

  test('renders all 6 navigation links', () => {
    // Navigation column links
    const navLinks = wrapper.vm.navLinks
    expect(navLinks.length).toBe(6)
  })

  test('nav links include required destinations', () => {
    const hrefs = wrapper.vm.navLinks.map((l) => l.href)
    expect(hrefs).toContain('#services')
    expect(hrefs).toContain('#work')
    expect(hrefs).toContain('#faqs')
    expect(hrefs).toContain('#contact')
  })

  test('renders phone link with correct href', () => {
    const phoneLink = wrapper.find('a[href="tel:2168083109"]')
    expect(phoneLink.exists()).toBe(true)
    expect(phoneLink.text()).toContain('216-808-3109')
  })

  test('renders email link with correct href', () => {
    const emailLink = wrapper.find('a[href="mailto:Acefluento@gmail.com"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.text()).toContain('Acefluento@gmail.com')
  })

  test('renders 3 social links', () => {
    expect(wrapper.vm.socials.length).toBe(3)
  })

  test('social links open in a new tab with rel=noopener', () => {
    const socialAnchors = wrapper.findAll('a[target="_blank"]')
    expect(socialAnchors.length).toBe(3)
    socialAnchors.wrappers.forEach((a) => {
      expect(a.attributes('rel')).toBe('noopener noreferrer')
    })
  })

  test('renders brand name "Acefluento"', () => {
    expect(wrapper.text()).toContain('Acefluento')
  })

  test('renders Privacy Policy and Terms of Service links', () => {
    expect(wrapper.text()).toContain('Privacy Policy')
    expect(wrapper.text()).toContain('Terms of Service')
  })
})

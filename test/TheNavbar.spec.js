import { mount } from '@vue/test-utils'
import TheNavbar from '@/components/TheNavbar.vue'

describe('TheNavbar', () => {
  function factory() {
    return mount(TheNavbar, { attachTo: document.body })
  }

  afterEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  test('mounts successfully', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
    wrapper.destroy()
  })

  test('starts with scrolled=false and mobileOpen=false', () => {
    const wrapper = factory()
    expect(wrapper.vm.scrolled).toBe(false)
    expect(wrapper.vm.mobileOpen).toBe(false)
    wrapper.destroy()
  })

  test('nav is transparent when not scrolled', () => {
    const wrapper = factory()
    expect(wrapper.find('nav').classes()).toContain('bg-transparent')
    wrapper.destroy()
  })

  test('nav gets background class when scrolled', async () => {
    const wrapper = factory()
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    wrapper.vm.onScroll()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.scrolled).toBe(true)
    expect(wrapper.find('nav').classes()).toContain('bg-brand-navy/95')
    wrapper.destroy()
  })

  test('onScroll sets scrolled=false when scrollY <= 20', () => {
    const wrapper = factory()
    Object.defineProperty(window, 'scrollY', { value: 10, writable: true })
    wrapper.vm.onScroll()
    expect(wrapper.vm.scrolled).toBe(false)
    wrapper.destroy()
  })

  test('onScroll sets scrolled=true when scrollY > 20', () => {
    const wrapper = factory()
    Object.defineProperty(window, 'scrollY', { value: 21, writable: true })
    wrapper.vm.onScroll()
    expect(wrapper.vm.scrolled).toBe(true)
    wrapper.destroy()
  })

  test('mobile menu toggle button opens the mobile menu', async () => {
    const wrapper = factory()
    expect(wrapper.vm.mobileOpen).toBe(false)
    await wrapper.find('button[aria-label="Toggle menu"]').trigger('click')
    expect(wrapper.vm.mobileOpen).toBe(true)
    wrapper.destroy()
  })

  test('mobile menu toggle button closes the mobile menu when already open', async () => {
    const wrapper = factory()
    wrapper.vm.mobileOpen = true
    await wrapper.vm.$nextTick()
    await wrapper.find('button[aria-label="Toggle menu"]').trigger('click')
    expect(wrapper.vm.mobileOpen).toBe(false)
    wrapper.destroy()
  })

  test('mobile menu is hidden by default', () => {
    const wrapper = factory()
    // The mobile nav block uses v-if="mobileOpen"
    const mobileLinks = wrapper.findAll('.md\\:hidden a')
    expect(mobileLinks.length).toBe(0)
    wrapper.destroy()
  })

  test('mobile menu renders nav links when open', async () => {
    const wrapper = factory()
    wrapper.vm.mobileOpen = true
    await wrapper.vm.$nextTick()
    // 4 nav links + 1 CTA link = 5 anchors in mobile menu
    const mobileMenu = wrapper.find('div.md\\:hidden')
    expect(mobileMenu.exists()).toBe(true)
    expect(mobileMenu.findAll('a').length).toBeGreaterThanOrEqual(4)
    wrapper.destroy()
  })

  test('clicking a mobile nav link closes the menu', async () => {
    const wrapper = factory()
    wrapper.vm.mobileOpen = true
    await wrapper.vm.$nextTick()
    const mobileLinks = wrapper.find('div.md\\:hidden').findAll('a')
    await mobileLinks.at(0).trigger('click')
    expect(wrapper.vm.mobileOpen).toBe(false)
    wrapper.destroy()
  })

  test('renders all 4 nav links in desktop nav', () => {
    const wrapper = factory()
    // The nav links div has gap-8; the CTA div has gap-3 — target only the nav links div
    const navLinksDiv = wrapper.find('.hidden.md\\:flex.gap-8')
    expect(navLinksDiv.findAll('a').length).toBe(4)
    wrapper.destroy()
  })

  test('removes scroll listener on destroy', () => {
    const removeListener = jest.spyOn(window, 'removeEventListener')
    const wrapper = factory()
    wrapper.destroy()
    expect(removeListener).toHaveBeenCalledWith('scroll', wrapper.vm.onScroll)
    removeListener.mockRestore()
  })
})

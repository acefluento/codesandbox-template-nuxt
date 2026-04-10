import { mount } from '@vue/test-utils'
import FAQSection from '@/components/FAQSection.vue'

// Stub custom directives registered globally in the plugin
const directives = { reveal: {}, stagger: {} }

describe('FAQSection', () => {
  function factory() {
    return mount(FAQSection, { directives })
  }

  test('renders all FAQ items', () => {
    const wrapper = factory()
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(5)
  })

  test('first item is open by default (openIndex starts at 0)', () => {
    const wrapper = factory()
    expect(wrapper.vm.openIndex).toBe(0)
    // answer panel for item 0 is visible
    expect(wrapper.find('p.text-white\\/55').exists()).toBe(true)
  })

  test('clicking an open item closes it (sets openIndex to null)', async () => {
    const wrapper = factory()
    await wrapper.findAll('button').at(0).trigger('click')
    expect(wrapper.vm.openIndex).toBeNull()
  })

  test('clicking a closed item opens it', async () => {
    const wrapper = factory()
    // close first, then open second
    await wrapper.findAll('button').at(0).trigger('click') // openIndex → null
    await wrapper.findAll('button').at(1).trigger('click') // openIndex → 1
    expect(wrapper.vm.openIndex).toBe(1)
  })

  test('only one item is open at a time', async () => {
    const wrapper = factory()
    await wrapper.findAll('button').at(2).trigger('click')
    expect(wrapper.vm.openIndex).toBe(2)
    await wrapper.findAll('button').at(3).trigger('click')
    expect(wrapper.vm.openIndex).toBe(3)
  })

  test('toggle method sets openIndex to null when same index clicked', () => {
    const wrapper = factory()
    wrapper.vm.toggle(0)
    expect(wrapper.vm.openIndex).toBeNull()
    wrapper.vm.toggle(0)
    expect(wrapper.vm.openIndex).toBe(0)
  })

  test('answer text is visible only for open item', async () => {
    const wrapper = factory()
    // Close item 0
    await wrapper.findAll('button').at(0).trigger('click')
    // Open item 4 (last FAQ: "What happens on the strategy call?")
    await wrapper.findAll('button').at(4).trigger('click')
    const panels = wrapper.findAll('p.text-white\\/55')
    expect(panels.length).toBe(1)
    expect(panels.at(0).text()).toContain('No pressure. Just clarity.')
  })

  test('chevron rotates for open item', async () => {
    const wrapper = factory()
    // item 0 is open by default — its SVG should have rotate-180
    const svgs = wrapper.findAll('button svg')
    expect(svgs.at(0).classes()).toContain('rotate-180')
    // item 1 is closed — no rotate-180
    expect(svgs.at(1).classes()).not.toContain('rotate-180')
  })
})

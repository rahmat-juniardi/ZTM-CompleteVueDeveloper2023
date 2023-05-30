import About from '@/views/About.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

describe('About.vue', () => {
  test('render inner Text', () => {
    const wrapper = shallowMount(About)

    expect(wrapper.text()).toContain('about')
  })
})

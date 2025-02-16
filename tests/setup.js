import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback
    this.options = options
  }

  observe(target) {
    this.callback([{ target, isIntersecting: true }])
  }

  unobserve() { }

  disconnect() { }
}

global.IntersectionObserver = IntersectionObserver;

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})
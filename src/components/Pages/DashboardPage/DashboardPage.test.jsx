import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DashboardPage from './DashboardPage'

class ResizeObserver {
	observe() { }
	unobserve() { }
	disconnect() { }
}

window.ResizeObserver = ResizeObserver

window.matchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () { },
		removeListener: function () { },
	}
}

window.getComputedStyle = function () {
	return {
		getPropertyValue: function () { return ''; }
	}
}

window.scrollTo = vi.fn()

describe('DashboardPage Component', () => {
	it('should render DashboardPage component', () => {
		const view = render(<DashboardPage />)

		expect(view).toMatchSnapshot()
	})
})
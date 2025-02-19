import { render } from '@testing-library/react'

import TableReport from './TableReport'

window.matchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () { },
		removeListener: function () { }
	}
}

window.getComputedStyle = function () {
	return {
		getPropertyValue: function () { return ''; }
	}
}

window.scrollTo = vi.fn()

test('should render TableReport component', () => {
	const view = render(<TableReport />)

	expect(view).toMatchSnapshot()
})
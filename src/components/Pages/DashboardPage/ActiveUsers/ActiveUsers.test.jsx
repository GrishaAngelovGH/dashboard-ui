import { render } from '@testing-library/react'

import ActiveUsers from './ActiveUsers'

window.matchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () { },
		removeListener: function () { }
	}
}

test('should render ActiveUsers component', () => {
	const view = render(<ActiveUsers />)

	expect(view).toMatchSnapshot()
})
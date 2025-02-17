import { render } from '@testing-library/react'

import Layout from './Layout'

const header = (<span>header</span>)
const body = (<span>body</span>)

test('should render Layout component', () => {
	const view = render(<Layout header={header} body={body} />)

	expect(view).toMatchSnapshot()
})

test('should render Header component', () => {
	const view = render(<Layout.Header content={header} />)

	expect(view).toMatchSnapshot()
})

test('should render Body component', () => {
	const view = render(<Layout.Header content={body} />)

	expect(view).toMatchSnapshot()
})
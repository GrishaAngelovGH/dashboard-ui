import { render } from '@testing-library/react'

import Layout from './Layout'

const header = (<span>header</span>)
const body = (<span>body</span>)

test('should render component', () => {
    const container = render(<Layout header={header} body={body} />)

    expect(container).toMatchSnapshot()
})

test('should render Header', () => {
    const container = render(<Layout.Header content={header} />)

    expect(container).toMatchSnapshot()
})

test('should render Body', () => {
    const container = render(<Layout.Header content={body} />)

    expect(container).toMatchSnapshot()
})
import { render } from '@testing-library/react'

import PageSection from './PageSection'

test('should render PageSection component', () => {
    const view = render(
        <PageSection style={{ background: '#0b3d7f', height: 520 }}>
            <div>content</div>
        </PageSection>
    )

    expect(view).toMatchSnapshot()
})
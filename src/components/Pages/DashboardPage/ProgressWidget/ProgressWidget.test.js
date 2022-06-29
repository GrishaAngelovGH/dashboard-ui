import { render } from '@testing-library/react'

import ProgressWidget from './ProgressWidget'

test('should render component', () => {
    const container = render(
        <ProgressWidget
            title={'Total Orders'}
            subtitle={'Last year expenses'}
            value={'$3M'}
            progress={65}
            label={'YoY Growth'}
        />
    )

    expect(container).toMatchSnapshot()
})
import { render, screen } from '@testing-library/react'

import SummaryLabel from './SummaryLabel'

test('should render SummaryLabel component', () => {
    render(
        <SummaryLabel
            value={'7+'}
            label={'supported platforms'}
            inverted={false}
        />
    )

    expect(screen.getByTestId('summary-label')).toHaveClass('d-flex flex-column wow fadeInUp m-2')
})

test('should render inverted SummaryLabel component', () => {
    render(
        <SummaryLabel
            value={'7+'}
            label={'supported platforms'}
            inverted={true}
        />
    )

    expect(screen.getByTestId('summary-label')).toHaveClass('d-flex flex-column flex-column-reverse wow fadeInUp m-2')
})
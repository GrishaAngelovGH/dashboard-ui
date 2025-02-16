import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import SummaryLabel from './SummaryLabel';

describe('SummaryLabel Component', () => {
	it('should render SummaryLabel component', () => {
		render(
			<SummaryLabel
				value={'7+'}
				label={'supported platforms'}
				inverted={false}
			/>
		);

		expect(screen.getByTestId('summary-label')).toHaveClass('d-flex flex-column m-2');
	});

	it('should render inverted SummaryLabel component', () => {
		render(
			<SummaryLabel
				value={'7+'}
				label={'supported platforms'}
				inverted={true}
			/>
		);

		expect(screen.getByTestId('summary-label')).toHaveClass('d-flex flex-column flex-column-reverse m-2');
	});
});

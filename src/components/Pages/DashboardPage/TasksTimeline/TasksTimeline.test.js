import { render } from '@testing-library/react'

import TasksTimeline from './TasksTimeline'

test('should render component', () => {
    const container = render(<TasksTimeline />)

    expect(container).toMatchSnapshot()
})
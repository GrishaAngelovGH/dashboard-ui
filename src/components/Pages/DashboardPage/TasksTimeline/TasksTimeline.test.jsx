import { render } from '@testing-library/react'

import TasksTimeline from './TasksTimeline'

test('should render TasksTimeline component', () => {
    const view = render(<TasksTimeline />)

    expect(view).toMatchSnapshot()
})
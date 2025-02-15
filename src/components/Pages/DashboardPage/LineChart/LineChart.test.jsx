import { render } from '@testing-library/react'

import LineChart from './LineChart'

class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

window.ResizeObserver = ResizeObserver

test('should render LineChart component', () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

    const datasets = [
        { label: 'Income', data: [784, -215, -638, 457, -324, 762, 804] },
        { label: 'Product Orders', data: [544, -879, 612, 442, -871, -252, 116] }
    ]

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                ...datasets[0],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                ...datasets[1],
                borderColor: 'rgb(50, 205, 50)',
                backgroundColor: 'rgba(50, 205, 50, 0.5)',
            }
        ]
    }

    const view = render(<LineChart labels={labels} datasets={datasets} />)

    expect(view).toMatchSnapshot()
})
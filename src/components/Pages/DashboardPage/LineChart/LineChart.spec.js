import LineChart from './LineChart'
import { Line } from 'react-chartjs-2'

describe('(Component) LineChart', () => {
    it('should render component', () => {
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

        const wrapper = shallow(<LineChart labels={labels} datasets={datasets} />)

        expect(wrapper.equals(
            <Line options={options} data={data} />
        )).to.equal(true)
    })
})
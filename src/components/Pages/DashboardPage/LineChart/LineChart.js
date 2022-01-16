import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChart = ({ labels, datasets }) => {
    const [incomeDataset, productOrdersDataset] = datasets

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
                ...incomeDataset,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                ...productOrdersDataset,

                borderColor: 'rgb(50, 205, 50)',
                backgroundColor: 'rgba(50, 205, 50, 0.5)',
            }
        ]
    }

    return <Line options={options} data={data} />
}

export default LineChart
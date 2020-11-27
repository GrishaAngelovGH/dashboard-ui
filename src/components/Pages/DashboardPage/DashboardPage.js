import Menu from './Menu'
import ProgressWidget from './ProgressWidget'

const progressWidgets = [
    { title: 'Total Orders', subtitle: 'Last year expenses', value: '1896', progress: 65, label: 'YoY Growth' },
    { title: 'Products Sold', subtitle: 'Revenue streams', value: '$3M', progress: 85, label: 'Sales' },
    { title: 'Followers', subtitle: 'People interested', value: '45,9%', progress: 46, label: 'Twitter Progress' }
]

const DashboardPage = () => (
    <div className='row'>
        <div className='col-md-12'>
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <Menu />
                </div>
            </div>
            <div className='row container mx-md-auto'>
                {
                    progressWidgets.map(v => (
                        <div key={v.title} className='col-md-4 offset-md-3 offset-lg-0 mt-3'>
                            <ProgressWidget
                                title={v.title}
                                subtitle={v.subtitle}
                                value={v.value}
                                progress={v.progress}
                                label={v.label}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

export default DashboardPage
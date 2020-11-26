import Layout from 'components/Layout'
import Menu from './Menu'
import {
    DashboardOverviewSection,
    DataOverviewSection,
    DashboardComponentsOverview
} from './PageSections'

import HomePage, { Body } from './HomePage'

describe('(Component) HomePage', () => {
    it('should render component', () => {
        const wrapper = shallow(<HomePage />)

        expect(wrapper.equals(
            <Layout header={<Menu />} body={<Body />} />
        )).to.equal(true)
    })

    it('should render Body', () => {
        const wrapper = shallow(<Body />)

        const types = [
            'azure', 'csv', 'db2', 'dbase', 'excel', 'firebird', 'google', 'informix',
            'json', 'mongo', 'msaccess', 'mssql', 'mysql', 'odata', 'odbc', 'oracle',
            'postgre', 'sqlite', 'sybase', 'teradata', 'vistadb', 'xml'
        ]

        const components = [
            [
                { image: 'chart', title: 'Chart', description: 'Add various types of graphs for data analysis' },
                { image: 'table', title: 'Table', description: 'Create complex custom tables with totals' },
                { image: 'gauge', title: 'Gauge', description: 'Measure your goals versus what you already reached' },
            ],
            [
                { image: 'pivot', title: 'Pivot', description: 'Quickly summarize large amounts of data in pivot tables' },
                { image: 'indicator', title: 'Indicator', description: 'View summary statistics for Sum, Min, and Max values' },
                { image: 'map', title: 'Map', description: 'Setup geographical coordinates for your analytics' }
            ]
        ]

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <DashboardOverviewSection />
                    <DataOverviewSection types={types} />
                    <DashboardComponentsOverview components={components} />
                </div>
            </div>
        ))
    })
})
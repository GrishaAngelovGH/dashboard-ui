import Layout from 'components/Layout'
import Menu from './Menu'

import {
    DashboardOverviewSection,
    DataOverviewSection,
    DashboardComponentsOverview
} from './PageSections'

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

export const Body = () => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <DashboardOverviewSection />
            <DataOverviewSection types={types} />
            <DashboardComponentsOverview components={components} />
        </div>
    </div>
)

const HomePage = () => (
    <Layout header={<Menu />} body={<Body />} />
)

export default HomePage
import Layout from 'components/Layout'
import Menu from './Menu'

import {
    DashboardOverviewSection,
    DataOverviewSection
} from './PageSections'

const types = [
    'azure', 'csv', 'db2', 'dbase', 'excel', 'firebird', 'google', 'informix',
    'json', 'mongo', 'msaccess', 'mssql', 'mysql', 'odata', 'odbc', 'oracle',
    'postgre', 'sqlite', 'sybase', 'teradata', 'vistadb', 'xml'
]

export const Body = () => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <DashboardOverviewSection />
            <DataOverviewSection types={types} />
        </div>
    </div>
)

const HomePage = () => (
    <Layout header={<Menu />} body={<Body />} />
)

export default HomePage
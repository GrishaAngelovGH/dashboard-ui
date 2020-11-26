import Layout from 'components/Layout'
import Menu from './Menu'
import {
    DashboardOverviewSection,
    DataOverviewSection
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

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <DashboardOverviewSection />
                    <DataOverviewSection types={types} />
                </div>
            </div>
        ))
    })
})
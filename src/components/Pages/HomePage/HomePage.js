import Layout from 'components/Layout'
import Menu from './Menu'
import { DashboardOverviewSection } from './PageSections'

export const Body = () => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            <DashboardOverviewSection />
        </div>
    </div>
)

const HomePage = () => (
    <Layout header={<Menu />} body={<Body />} />
)

export default HomePage
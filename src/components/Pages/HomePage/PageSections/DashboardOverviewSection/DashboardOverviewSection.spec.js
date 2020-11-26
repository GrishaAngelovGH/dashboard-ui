import LinkButton from 'components/LinkButton'
import PageSection from 'components/Pages/PageSection'

import { dashboardsOverview } from 'images'
import DashboardOverviewSection from './DashboardOverviewSection'

describe('(Component) DashboardOverviewSection', () => {
    it('should render componenet', () => {
        const wrapper = shallow(<DashboardOverviewSection />)

        expect(wrapper.equals(
            <PageSection color='#0b3d7f' height={520}>
                <div className='row no-gutters'>
                    <div className='col-md-12 mt-2'>
                        <div className='row no-gutters justify-content-center mb-2 text-white'>
                            <div className='col-md-8 text-center'>
                                <h2>Dashboards</h2>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2 text-white text-center'>
                            <div className='col-md-8 col-11'>
                                This is a powerful, flexible and easily customizable business
                                intelligence tool for data analysis. Dashboards is the best
                                solution for displaying metrics in an understandable and readable form.
                                You may embed our dashboards into your application.
                    </div>
                        </div>

                        <div className='row no-gutters justify-content-center'>
                            <div className='col-md-5 col-8'>
                                <LinkButton href='#/'>Install Dashboards</LinkButton>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mt-2'>
                            <div className='col-md-4 col-lg-3'>
                                <img src={dashboardsOverview} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection>
        )).to.equal(true)
    });
});
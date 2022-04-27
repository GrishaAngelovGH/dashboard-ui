import PageSection from 'components/Pages/PageSection'

const DashboardOverviewSection = () => (
    <PageSection style={{ background: '#0b3d7f', height: 250, alignItems: 'center' }}>
        <div className='row no-gutters'>
            <div className='col-md-12 mt-2'>
                <div className='row no-gutters justify-content-center m-3'>
                    <div className='col-md-8 text-center'>
                        <h2 className='text-white'>Dashboards</h2>
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
            </div>
        </div>
    </PageSection>
)

export default DashboardOverviewSection
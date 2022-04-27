import PageSection from 'components/Pages/PageSection'

import DashboardComponent from './DashboardComponent'
import DashboardComponentsOverview from './DashboardComponentsOverview'

describe('(Component) DashboardComponentsOverview', () => {
    it('should render component', () => {
        const components = [
            [
                { image: 'chart', title: 'Chart', description: 'Add various types of graphs for data analysis' },
            ],
            [
                { image: 'pivot', title: 'Pivot', description: 'Quickly summarize large amounts of data in pivot tables' },
            ]
        ]

        const wrapper = shallow(<DashboardComponentsOverview components={components} />)

        expect(wrapper.equals(
            <PageSection style={{ background: '#ebedef', height: 'auto' }}>
                <div className='row no-gutters'>
                    <div className='col-md-12 mt-2'>
                        <div className='row no-gutters justify-content-center m-3'>
                            <div className='col-md-8 text-center'>
                                <h2>Components for Dashboards</h2>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-4 text-center'>
                            <div className='col-md-8 col-11'>
                                Using Dashboards, you can easily create informative and understandable panels
                                using a wide range of components. All you need is to drag and drop the data
                                to the appropriate fields and adjust them using a wide variety of properties.
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center'>
                            <div className='col-md-6 col-lg-10 pl-4'>
                                <div className='row no-gutters mb-4'>
                                    <div className='col-md-12 col-lg-4 pb-2'>
                                        <DashboardComponent
                                            image={components[0][0].image}
                                            title={components[0][0].title}
                                            description={components[0][0].description}
                                        />
                                    </div>
                                </div>
                                <div className='row no-gutters mb-4'>
                                    <div className='col-md-12 col-lg-4 pb-2'>
                                        <DashboardComponent
                                            image={components[1][0].image}
                                            title={components[1][0].title}
                                            description={components[1][0].description}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection >
        )).to.equal(true)
    })
})
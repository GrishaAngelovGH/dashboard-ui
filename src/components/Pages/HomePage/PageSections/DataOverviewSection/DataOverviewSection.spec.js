import LinkButton from 'components/LinkButton'
import PageSection from 'components/Pages/PageSection'

import { dataTypes } from 'images'
import DataOverviewSection from './DataOverviewSection'

describe('(Component) DataOverviewSection', () => {
    it('should render componente', () => {
        const wrapper = shallow(<DataOverviewSection types={['azure', 'csv']} />)

        expect(wrapper.equals(
            <PageSection color='#2a7ab9' height={520}>
                <div className='row no-gutters'>
                    <div className='col-md-12 mt-2'>
                        <div className='row no-gutters justify-content-center mb-2 text-white'>
                            <div className='col-md-8 text-center'>
                                <h2>Work with data</h2>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2 text-white text-center'>
                            <div className='col-md-8 col-11'>
                                The dashboards components supports more than 15 types
                                of data servers - MS SQL, Oracle, PostgreSQL, Firebird, and others.
                                Our products support all standard types of ADO.NET objects,
                                the OData protocol, the ability to load data from XML, JSON,
                                Excel and CSV files, work with multi-level business objects.
                           </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2'>
                            <div className='col-md-7 col-12 d-none d-md-block type-images'>
                                <img
                                    width={50}
                                    height={50}
                                    src={dataTypes['azure']}
                                    data-wow-duration='5s'
                                    data-wow-delay='0.5s'
                                    className='wow fadeInUp m-2'
                                />
                                <img
                                    width={50}
                                    height={50}
                                    src={dataTypes['csv']}
                                    data-wow-duration='5s'
                                    data-wow-delay='0.5s'
                                    className='wow fadeInUp m-2'
                                />
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2 text-white text-center'>
                            <div className='col-md-8 col-11'>
                                Preliminary data preparation and conversion are available.
                                You may use virtual data sources, and you may embed data directly
                                into the template in the form of resources.
                                Do not think about how to prepare data for the report - Dashboards will do it for you!
                           </div>
                        </div>

                        <div className='row no-gutters justify-content-center'>
                            <div className='col-md-5 col-8'>
                                <LinkButton href='#/'>Learn more about working with data</LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection>
        )).to.equal(true)
    })
})
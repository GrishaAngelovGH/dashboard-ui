import LinkButton from 'components/LinkButton'
import PageSection from 'components/Pages/PageSection'

import SummaryLabel from './SummaryLabel'
import SummaryOverviewSection from './SummaryOverviewSection'

describe('(Component) SummaryOverviewSection', () => {
    it('should render component', () => {
        const summary = [
            { value: '7+', label: 'supported platforms', inverted: false },
            { value: '17+', label: 'customizable elements', inverted: true }
        ]

        const wrapper = shallow(<SummaryOverviewSection summary={summary} />)

        expect(wrapper.equals(
            <PageSection color='#435465' height={'auto'}>
                <div className='row no-gutters'>
                    <div className='col-md-12 mt-2'>
                        <div className='row no-gutters justify-content-center m-3'>
                            <div className='col-md-8 text-center'>
                                <h2 className='text-white'>Creation and viewing</h2>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2 text-white text-center'>
                            <div className='col-md-8 col-11'>
                                Use our components on any platform – in Win applications,
                                Web projects or JavaScript solutions. We support work with all major
                                technologies – WinForms, WPF, ASP.NET, MVC, .NET Core, JavaScript,
                                PHP, etc.
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-2'>
                            <div className='col-md-10 col-lg-8 mt-4 mb-4 d-none d-md-block'>
                                <div className='row no-gutters'>
                                    <div className='col-md-2'>
                                        <SummaryLabel
                                            value={summary[0].value}
                                            label={summary[0].label}
                                            inverted={summary[0].inverted}
                                        />
                                    </div>
                                    <div className='col-md-2'>
                                        <SummaryLabel
                                            value={summary[1].value}
                                            label={summary[1].label}
                                            inverted={summary[1].inverted}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row no-gutters justify-content-center mb-5'>
                            <div className='col-10 col-md-7 col-lg-5'>
                                <LinkButton href='/dashboard'>Explore our features in the Online Demo</LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection>
        )).to.equal(true)
    })
})
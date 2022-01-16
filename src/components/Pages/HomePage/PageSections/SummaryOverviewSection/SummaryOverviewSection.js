import { Component } from 'react'
import PropTypes from 'prop-types'

import LinkButton from 'components/LinkButton'
import PageSection from 'components/Pages/PageSection'
import SummaryLabel from './SummaryLabel'

import { WOW } from 'wowjs'

class SummaryOverviewSection extends Component {
    componentDidMount() {
        new WOW({
            live: false
        }).init()
    }

    render() {
        const { summary } = this.props

        return (
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
                                    {
                                        summary.map(v => (
                                            <div className='col-md-2' key={v.value}>
                                                <SummaryLabel
                                                    value={v.value}
                                                    label={v.label}
                                                    inverted={v.inverted}
                                                />
                                            </div>
                                        ))
                                    }
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
        )
    }
}

SummaryOverviewSection.propTypes = {
    summary: PropTypes.array.isRequired
}

export default SummaryOverviewSection
import { Fade } from 'react-awesome-reveal'

import LinkButton from 'components/LinkButton'
import PageSection from 'components/Pages/PageSection'
import SummaryLabel from './SummaryLabel'

const SummaryOverviewSection = ({ summary }) => (
	<Fade duration={3000}>
		<PageSection style={{ background: '#435465', height: 'auto' }}>
			<div className='row g-0'>
				<div className='col-md-12 mt-2'>
					<div className='row g-0 justify-content-center m-3'>
						<div className='col-md-8 text-center'>
							<h2 className='text-white'>Creation and viewing</h2>
						</div>
					</div>

					<div className='row g-0 justify-content-center mb-2 text-white text-center'>
						<div className='col-md-8 col-11'>
							Use our components on any platform – in Win applications,
							Web projects or JavaScript solutions. We support work with all major
							technologies – WinForms, WPF, ASP.NET, MVC, .NET Core, JavaScript,
							PHP, etc.
						</div>
					</div>

					<div className='row g-0 justify-content-center mb-2'>
						<div className='col-md-10 col-lg-8 mt-4 mb-4 d-none d-md-block'>
							<div className='row g-0'>
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

					<div className='row g-0 justify-content-center mb-5'>
						<div className='col-10 col-md-7 col-lg-5'>
							<LinkButton href='/dashboard'>Explore our features in the Online Demo</LinkButton>
						</div>
					</div>
				</div>
			</div>
		</PageSection>
	</Fade>
)

export default SummaryOverviewSection
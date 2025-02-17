import PageSection from 'components/Pages/PageSection'
import DashboardComponent from './DashboardComponent'

const DashboardComponentsOverview = ({ components }) => (
	<PageSection style={{ background: '#ebedef', height: 'auto' }}>
		<div className='row g-0'>
			<div className='col-md-12 mt-2'>
				<div className='row g-0 justify-content-center m-3'>
					<div className='col-md-8 text-center'>
						<h2>Components for Dashboards</h2>
					</div>
				</div>

				<div className='row g-0 justify-content-center mb-4 text-center'>
					<div className='col-md-8 col-11'>
						Using Dashboards, you can easily create informative and understandable panels
						using a wide range of components. All you need is to drag and drop the data
						to the appropriate fields and adjust them using a wide variety of properties.
					</div>
				</div>

				<div className='row g-0 justify-content-center'>
					<div className='col-md-6 col-lg-10 pl-4'>
						{
							components.map((v, i) => (
								<div key={i} className='row g-0 mb-4'>
									{
										v.map(item => (
											<div className='col-md-12 col-lg-4 pb-2' key={item.title}>
												<DashboardComponent
													image={item.image}
													title={item.title}
													description={item.description}
												/>
											</div>
										))
									}
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	</PageSection >
)

export default DashboardComponentsOverview
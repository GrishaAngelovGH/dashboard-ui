import { Fade } from 'react-awesome-reveal'
import PageSection from 'components/Pages/PageSection'

import { dataTypes } from 'images'
import './DataOverviewSection.scss'

const DataOverviewSection = ({ types }) => (
	<Fade duration={3000}>
		<PageSection style={{ background: '#2a7ab9', height: 520 }}>
			<div className='row no-gutters'>
				<div className='col-md-12 mt-2'>
					<div className='row no-gutters justify-content-center m-3'>
						<div className='col-md-8 text-center'>
							<h2 className='text-white'>Work with data</h2>
						</div>
					</div>

					<div className='row no-gutters justify-content-center mb-5 text-white text-center'>
						<div className='col-md-8 col-11'>
							The dashboards components supports more than 15 types
							of data servers - MS SQL, Oracle, PostgreSQL, Firebird, and others.
							Our products support all standard types of ADO.NET objects,
							the OData protocol, the ability to load data from XML, JSON,
							Excel and CSV files, work with multi-level business objects.
						</div>
					</div>

					<div className='row no-gutters justify-content-center mb-5'>
						<div className='col-md-7 col-12 d-none d-md-block type-images'>
							{
								types.map(v => (
									<img
										key={v}
										width={50}
										height={50}
										src={dataTypes[v]}
										className='m-2'
									/>
								))
							}
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
				</div>
			</div>
		</PageSection>
	</Fade>
)

export default DataOverviewSection
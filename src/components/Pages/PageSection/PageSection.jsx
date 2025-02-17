const PageSection = ({ style, children }) => (
	<div className='row g-0' style={style}>
		<div className='col-md-12'>
			{children}
		</div>
	</div>
)

export default PageSection
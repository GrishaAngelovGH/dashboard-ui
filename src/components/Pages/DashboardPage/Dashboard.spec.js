import Menu from './Menu'
import ProgressWidget from './ProgressWidget'
import DashboardPage from './DashboardPage'

describe('(Component) DashboardPage', () => {
    it('should render component', () => {
        const wrapper = shallow(<DashboardPage />)

        expect(wrapper.equals(
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row no-gutters'>
                        <div className='col-md-12'>
                            <Menu />
                        </div>
                    </div>
                    <div className='row container mx-md-auto'>
                        <div className='col-md-4 offset-md-3 offset-lg-0 mt-3'>
                            <ProgressWidget
                                title={'Total Orders'}
                                subtitle={'Last year expenses'}
                                value={'1896'}
                                progress={65}
                                label={'YoY Growth'}
                            />
                        </div>
                        <div className='col-md-4 offset-md-3 offset-lg-0 mt-3'>
                            <ProgressWidget
                                title={'Products Sold'}
                                subtitle={'Revenue streams'}
                                value={'$3M'}
                                progress={85}
                                label={'Sales'}
                            />
                        </div>
                        <div className='col-md-4 offset-md-3 offset-lg-0 mt-3'>
                            <ProgressWidget
                                title={'Followers'}
                                subtitle={'People interested'}
                                value={'45,9%'}
                                progress={46}
                                label={'Twitter Progress'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )).to.equal(true)
    })
})
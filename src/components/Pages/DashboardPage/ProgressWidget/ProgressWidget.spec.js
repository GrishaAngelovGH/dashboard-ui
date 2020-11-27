import ProgressWidget from './ProgressWidget'
import ProgressBar from 'react-bootstrap/ProgressBar'

describe('(Component) ProgressWidget', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <ProgressWidget
                title={'Total Orders'}
                subtitle={'Last year expenses'}
                value={'$3M'}
                progress={65}
                label={'YoY Growth'}
            />
        )

        expect(wrapper.equals(
            <div className='bg-white rounded progress-widget p-2'>
                <div className='row'>
                    <div className='col-6 col-md-6'>
                        <h5>Total Orders</h5>
                        <p className='content-color'>Last year expenses</p>
                    </div>
                    <div className='col-6 col-md-6 d-flex justify-content-end'>
                        <div className='content-value'>$3M</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ProgressBar animated now={65} />
                    </div>
                </div>

                <div className='d-flex justify-content-between content-color'>
                    <div>YoY Growth</div>
                    <div>100%</div>
                </div>
            </div>
        )).to.equal(true)
    })
})
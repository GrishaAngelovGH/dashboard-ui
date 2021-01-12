import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage, DashboardPage } from 'components/Pages'
import App from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <Router>
        <Switch>
          <Route exact path='/' children={<HomePage />} />
          <Route path='/dashboard' children={<DashboardPage />} />
        </Switch>
      </Router>
    )).to.equal(true)
  })
})
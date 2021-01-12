import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage, DashboardPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' children={<HomePage />} />
        <Route path='/dashboard' children={<DashboardPage />} />
      </Switch>
    </Router>
  )
}

export default App

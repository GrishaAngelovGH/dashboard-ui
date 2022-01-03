import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage, DashboardPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App

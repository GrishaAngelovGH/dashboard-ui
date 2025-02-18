import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage, DashboardPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App

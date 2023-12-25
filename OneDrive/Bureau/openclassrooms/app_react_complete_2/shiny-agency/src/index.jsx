import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
          <Route path="/survey/client" element={<ClientForm />} />
          <Route path="/survey/freelance" element={<FreelanceForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)





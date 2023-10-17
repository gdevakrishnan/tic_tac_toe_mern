import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Outlet />
      </Router>
    </Fragment>
  )
}

export default App
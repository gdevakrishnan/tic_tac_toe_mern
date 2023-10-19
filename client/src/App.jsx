import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Register from './components/register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import PageNotFound from './components/PageNotFound';
import Help from './components/Help';
import Footer from './components/Footer';
import Message from './components/Message';
import userContext from './context/userContext';

function App() {
  const [msg, setMsg] = useState("");
  const contexts = {msg, setMsg};

  return (
    <Fragment>
      <userContext.Provider value={contexts}>
        <Router>
          <Navbar />
          {
            (msg) ? <Message /> : null
          }
          <Routes>
            <Route index path='/' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Logout' element={<Logout />} />
            <Route index path='/help' element={<Help />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Outlet />
          <Footer />
        </Router>
      </userContext.Provider>
    </Fragment>
  )
}

export default App
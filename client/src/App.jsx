import React, { Fragment, useContext, useEffect, useState } from 'react'
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
import { userVerify } from './services/serviceWorker';


function App() {
  const [msg, setMsg] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const contexts = { 
    msg, 
    setMsg, 
    userDetails, 
    setUserDetails 
  };

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      userVerify({ token })
        .then((response) => {
          if (response.message === "verified successfully") {
            setUserDetails(response.data);
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      setUserDetails(null);
    }
  }), [];

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
            <Route path='/register' element={(!userDetails) ? <Register /> : <PageNotFound />} />
            <Route path='/Login' element={(!userDetails) ? <Login /> : <PageNotFound />} />
            <Route path='/Logout' element={(userDetails) ? <Logout /> : <PageNotFound />} />
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
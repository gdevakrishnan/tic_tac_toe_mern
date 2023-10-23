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
import Players from './components/Players';
import PlayGround from './components/PlayGround';
import Leaderboard from './components/Leaderboard';


function App() {
  const [msg, setMsg] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [play, setPlay] = useState(null);
  const initialState = { fplayer: "", splayer: "", result: "" };
  const [matchDetails, setMatchDetails] = useState(initialState);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      userVerify({ token })
        .then((response) => {
          if (response.message === "verified successfully") {
            // console.log(response.data);
            setUserDetails(response.data);
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      setUserDetails(null);
    }
  }), [userDetails];

  const contexts = {
    msg,
    setMsg,
    userDetails,
    setUserDetails,
    setPlay,
    initialState,
    matchDetails,
    setMatchDetails,
  };

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
            <Route path='/play' element={(userDetails) ? <Players /> : <PageNotFound />} />
            <Route path='/leaderboard' element={(userDetails) ? <Leaderboard /> : <PageNotFound />} />
            <Route path='/play/playground' element={(play) ? <PlayGround /> : <PageNotFound />} />
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
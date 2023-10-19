import React, { Fragment, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../context/userContext';

function Logout() {
  const { setMsg } = useContext(userContext);
  const nav = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault;
    localStorage.clear();
    setMsg("Logout Successfully");
    nav('/login');
  }

  return (
    <Fragment>
      <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Logout</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Are you sure wants to logout?</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </button>
            <Link to={'/'} className="text-sm font-semibold text-gray-900">
              Go back home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Logout
import React, { Fragment, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../services/serviceWorker';
import userContext from '../context/userContext';
import validator from 'validator';
import tic_tac_toe from '../assets/tic_tac_toe.png'

function Login() {
  const initialState = { uname: "", gmail: "", pwd: "" };
  const [userDetails, setUserDetails] = useState(initialState);
  const { setMsg } = useContext(userContext);
  const nav = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.uname || !userDetails.gmail || !userDetails.pwd) {
      setMsg("Enter all the fields");
      return;
    }

    if (!(validator.isEmail(userDetails.gmail))) { 
      setMsg('Invalid Email');
      return;
    }

    getUserDetails(userDetails)
      .then((response) => {
        if (response.message === "User Login Successfully") {
          setMsg(response.message);
          setUserDetails(initialState);
          localStorage.setItem("token", response.token);
          nav('/');
        }
        setMsg(response.message); 
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={tic_tac_toe}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="uname" className="block text-sm font-medium leading-6 text-gray-900">
                User name
              </label>
              <div className="mt-2">
                <input
                  id="uname"
                  name="uname"
                  type="text"
                  autoComplete="uname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={userDetails.uname}
                  onChange={(e) => handleEdit(e)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="gmail" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="gmail"
                  name="gmail"
                  type="email"
                  autoComplete="gmail"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={userDetails.gmail}
                  onChange={(e) => handleEdit(e)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="pwd" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="pwd"
                  name="pwd"
                  type="password"
                  autoComplete="pwd"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={userDetails.pwd}
                  onChange={(e) => handleEdit(e)}
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                value={'Login'}
                onClick={(e) => handleSubmit(e)}
              /
              >
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext'

function Dashboard() {
  const { userDetails } = useContext(userContext);

  return (
    <Fragment>
      <section className="bg-gray-900 text-white h-screen">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Tic Tac Toe
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              A simple yet timeless game of strategy, Xs and Os dance in a quest for victory on a 3x3 grid
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to={(userDetails) ? '/play' : '/login'}
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to={'/help'}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Dashboard
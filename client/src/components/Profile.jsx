import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext'

function Profile() {
    const { userDetails } = useContext(userContext)
    return (
        <Fragment>
            <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-auto">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Profile
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={'uname'} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    User name
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {userDetails.uname}
                                </th>
                            </tr>

                            <tr key={'gmail'} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Email
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {userDetails.gmail}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-center">
                    <div className="mt-2 flex items-center justify-center gap-x-6">
                        <Link
                            to={'/'}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <Link to={'/help'} className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Profile
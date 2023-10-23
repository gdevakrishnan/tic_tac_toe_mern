import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const { userDetails } = useContext(userContext);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-screen">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <li className='list-none'>
                      <Link
                        key={'dashboard'}
                        to={'/'}
                        className={classNames(
                          true ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        Dashboard
                      </Link>
                    </li>

                    {
                      (!userDetails) ? (
                        <Fragment>
                          <li className='list-none'>
                            <Link
                              key={'Register'}
                              to={'/register'}
                              className={classNames(
                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              Register
                            </Link>
                          </li>

                          <li className='list-none'>
                            <Link
                              key={'login'}
                              to={'/login'}
                              className={classNames(
                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              Login
                            </Link>
                          </li>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <li className='list-none'>
                            <Link
                              key={'play'}
                              to={'/play'}
                              className={classNames(
                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              play
                            </Link>
                          </li>

                          <li className='list-none'>
                            <Link
                              key={'leaderboard'}
                              to={'/leaderboard'}
                              className={classNames(
                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              Leaderboard
                            </Link>
                          </li>

                          <li className='list-none'>
                            <Link
                              key={'logout'}
                              to={'/logout'}
                              className={classNames(
                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                            >
                              Logout
                            </Link>
                          </li>
                        </Fragment>
                      )
                    }
                    <li className='list-none'>
                      <Link
                        key={'help'}
                        to={'/help'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        help
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <li className='list-none'>
                <Link
                  key={'dashboard'}
                  to={'/'}
                  className={classNames(
                    true ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  Dashboard
                </Link>
              </li>

              {
                (!userDetails) ? (
                  <Fragment>
                    <li className='list-none'>
                      <Link
                        key={'Register'}
                        to={'/register'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        Register
                      </Link>
                    </li>

                    <li className='list-none'>
                      <Link
                        key={'login'}
                        to={'/login'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        Login
                      </Link>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li className="list-none">
                      <Link
                        key={'play'}
                        to={'/play'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        play
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link
                        key={'leaderboard'}
                        to={'/leaderboard'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        leaderboard
                      </Link>
                    </li>

                    <li className="list-none">
                      <Link
                        key={'profile'}
                        to={'/profile'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        profile
                      </Link>
                    </li>

                    <li className='list-none'>
                      <Link
                        key={'logout'}
                        to={'/logout'}
                        className={classNames(
                          false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        Logout
                      </Link>
                    </li>
                  </Fragment>
                )
              }
              <li className="list-none">
                <Link
                  key={'help'}
                  to={'/help'}
                  className={classNames(
                    false ? 'bg-gray-900 text-white block w-11/12' : 'block w-11/12 text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  help
                </Link>
              </li>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;
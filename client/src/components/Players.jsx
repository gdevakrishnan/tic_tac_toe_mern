import React, { Fragment, useContext, useState } from 'react'
import userContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Players() {
    const { setMsg, setPlay } = useContext(userContext);
    const initialState = { fplayer: "", splayer: "", result: "" };
    const [matchDetails, setMatchDetails] = useState(initialState);
    const nav = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        setMatchDetails({ ...matchDetails, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!matchDetails.fplayer || !matchDetails.splayer) {
            setMsg("Enter all the fields");
        } else {
            setPlay("Allow");
            setMatchDetails(initialState);
            nav('/play/playground');
        }
    }

    return (
        <Fragment>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-24">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Players Details
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="uname" className="block text-sm font-medium leading-6 text-gray-900">
                                Player 1
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fplayer"
                                    name="fplayer"
                                    type="text"
                                    autoComplete="fplayer"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => handleEdit(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="uname" className="block text-sm font-medium leading-6 text-gray-900">
                                Player 2
                            </label>
                            <div className="mt-2">
                                <input
                                    id="splayer"
                                    name="splayer"
                                    type="text"
                                    autoComplete="splayer"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => handleEdit(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={(e) => handleSubmit(e)}
                                value={'Start Game'}
                            /
                            >
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Players
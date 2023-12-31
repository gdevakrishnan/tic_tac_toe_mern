import React, { Fragment, useContext, useState } from 'react'
import userContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import tic_tac_toe from '../assets/tic_tac_toe.png'

function Players() {
    const { setMsg, setPlay, initialState, matchDetails, setMatchDetails } = useContext(userContext);
    const nav = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        setMatchDetails({ ...matchDetails, [e.target.id]: e.target.value });
    }

    const handleClear = (e) => {
        e.preventDefault();
        setMatchDetails(initialState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!matchDetails.fplayer.trim() || !matchDetails.splayer.trim()) {
            setMsg("Enter all the fields");
        } else {
            setPlay("Allow");
            nav('/play/playground');
        }
    }

    return (
        <Fragment>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-24">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-24 w-auto"
                        src={tic_tac_toe}
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
                                    value={matchDetails.fplayer}
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
                                    value={matchDetails.splayer}
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => handleEdit(e)}
                                />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={(e) => handleSubmit(e)}
                                value={'Start Game'}
                            /
                            >

                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e) => handleClear(e)} value={'Start Game'}>
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Players
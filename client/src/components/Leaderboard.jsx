import React, { useContext, useEffect, useState } from 'react'
import { getLeaderBoard } from '../services/serviceWorker'
import userContext from '../context/userContext'
import NoRecords from './NoRecords';

function Leaderboard() {
    const { userDetails } = useContext(userContext);
    const { _id } = userDetails;
    const [leaderBoardDetails, setLeaderBoardDetails] = useState(null);

    useEffect(() => {
        getLeaderBoard({ _id })
            .then((response) => setLeaderBoardDetails(response))
            .catch((e) => console.log(e.message));
    }), [];

    return (
        (leaderBoardDetails && leaderBoardDetails.length >= 1) ? (
            <section className='min-h-screen flex justify-center pt-28 pb-20'>
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-auto">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Player 1
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Player 2
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Outcome
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leaderBoardDetails.map((aData) => {
                                    return (
                                        <tr key={aData._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {aData.fplayer}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {aData.splayer}
                                            </th>
                                            <th scope="row" className={(aData.result === "Draw")? "px-6 py-4 text-red-500 whitespace-nowrap font-bold" : "px-6 py-4 text-green-400 whitespace-nowrap font-bold"}>
                                                {aData.result}
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        ) : <NoRecords />
    )
}

export default Leaderboard
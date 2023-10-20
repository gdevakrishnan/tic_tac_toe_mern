import React, { Fragment, useEffect, useState } from 'react'

function PlayGround() {
  const [player, setPlayer] = useState('X');
  const [box, setBox] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
  const [match, setMatch] = useState(true);
  const [msg, setMsg] = useState('');


  useEffect(() => {
    if (match && box[0] !== '' && box[1] !== '' && box[2] !== '' && box[0] === box[1] && box[1] === box[2]) {
      setMsg(`${box[0]} - player wins`)
      setMatch(false);
    }

    else if (match && box[3] !== '' && box[4] !== '' && box[5] !== '' && box[3] === box[4] && box[4] === box[5]) {
      setMsg(`${box[3]} - player wins`)
      setMatch(false);
    }

    else if (match && box[6] !== '' && box[7] !== '' && box[8] !== '' && box[6] === box[7] && box[7] === box[8]) {
      setMsg(`${box[6]} - player wins`)
      setMatch(false);
    }

    else if (match && box[0] !== '' && box[3] !== '' && box[6] !== '' && box[0] === box[3] && box[3] === box[6]) {
      setMsg(`${box[0]} - player wins`)
      setMatch(false);
    }

    else if (match && box[1] !== '' && box[4] !== '' && box[7] !== '' && box[1] === box[4] && box[4] === box[7]) {
      setMsg(`${box[1]} - player wins`)
      setMatch(false);
    }

    else if (match && box[2] !== '' && box[5] !== '' && box[8] !== '' && box[2] === box[5] && box[5] === box[8]) {
      setMsg(`${box[2]} - player wins`)
      setMatch(false);
    }

    else if (match && box[0] !== '' && box[4] !== '' && box[8] !== '' && box[0] === box[4] && box[4] === box[8]) {
      setMsg(`${box[0]} - player wins`)
      setMatch(false);
    }

    else if (match && box[2] !== '' && box[4] !== '' && box[6] !== '' && box[2] === box[4] && box[4] === box[6]) {
      setMsg(`${box[2]} - player wins`)
      setMatch(false);
    }

    else if (match && box[0] !== '' && box[1] !== '' && box[2] !== '' && box[3] !== '' && box[4] !== '' && box[5] !== '' && box[6] !== '' && box[7] !== '' && box[8] !== '') {
      setMsg('The Match is Draw');
      setMatch(false);
    }

  }), [player]

  const myFunction = (turn) => {
    if (!(match)) {
      return;
    }

    if (box[turn] !== '') {
      return;
    }

    setBox({ ...box, [turn]: player }), player === 'X' ? setPlayer('0') : setPlayer('X');
  }

  const reMatch = () => {
    setPlayer('X');
    setBox({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
    setMatch(true);
    setMsg('');
  }

  return (
    <Fragment>
      <section className='w-full min-h-screen flex justify-center items-center flex-col pt-20'>
        <div className="header flex justify-between w-5/6 md:w-4/6 lg:w-6/12 xl:w-2/6  px-14">
          <button className='text-white text-xl mb-8 bg-red-600 rounded-sm px-4 py-1 capitalize hover:bg-red-800 shadow-lg' onClick={() => reMatch()}>rematch</button>
          <h1 className='text-white text-xl mb-8 bg-green-600 rounded-sm px-4 py-1 capitalize cursor-pointer shadow-lg'>player: {player}</h1>
        </div>
        <div className='bg-gray-700 w-5/6 md:w-7/12 lg:w-4/12 h-auto flex flex-col gap-2 justify-center px-4 py-4 rounded-md shadow-2xl'>
          <div className='w-full flex gap-3'>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(0) }}>{box[0]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(1) }}>{box[1]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(2) }}>{box[2]}</button>
          </div>
          <div className='w-full flex gap-3'>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(3) }}>{box[3]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(4) }}>{box[4]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(5) }}>{box[5]}</button>
          </div>
          <div className='w-full flex gap-3'>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(6) }}>{box[6]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(7) }}>{box[7]}</button>
            <button className='bg-gray-900 w-4/12 h-28 rounded-sm hover:bg-gray-500 text-yellow-500 text-4xl' onClick={() => { myFunction(8) }}>{box[8]}</button>
          </div>
        </div>
        {msg ? <h1 className='bg-yellow-800 text-white text-lg px-4 py-1 rounded-sm mt-12 capitalize shadow-xl'>{msg}</h1> : null}
      </section>
    </Fragment>
  )
}

export default PlayGround;
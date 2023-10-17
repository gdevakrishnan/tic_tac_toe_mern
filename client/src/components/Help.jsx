import React, { Fragment } from 'react';

function Help() {
    return (
        <Fragment>
            <div className="container mx-auto p-4 pt-24">
                <h1 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5">Tic Tac Toe</h1>
                <p className="sm:text-md md:text-md lg:text-xl xl:text-xl xl:px-40 indent-8 text-justify">
                    Tic Tac Toe is a two-player game played on a 3x3 grid. Players take turns marking a square with their symbol (usually "X" for one player and "O" for the other). The goal is to be the first to get three of their symbols in a row, either horizontally, vertically, or diagonally. The game ends in a draw if the grid is filled with no winner. It's a game of strategy and quick thinking, often played for fun and to pass the time.
                </p>
            </div>
        </Fragment>
    )
}

export default Help
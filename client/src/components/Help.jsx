import React, { Fragment } from 'react';

function Help() {
    return (
        <Fragment>
            <div className="container mx-auto p-4 pt-24 h-screen">
                <h1 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5">Tic Tac Toe</h1>
                <p className="sm:text-md md:text-md lg:text-xl xl:text-xl xl:px-40 indent-8 text-justify">
                    Tic Tac Toe, often simply called "Xs and Os," is a two-player game where players take turns marking a 3x3 grid with their respective symbols (X or O). The objective is to be the first to form a line of three of their symbols either horizontally, vertically, or diagonally. It's a simple and popular game, often played on paper or as a board game. The player who succeeds in forming a line of three of their symbols wins the game. If the grid is filled, and no player has won, the game is a draw.
                </p>
            </div>
        </Fragment>
    )
}

export default Help
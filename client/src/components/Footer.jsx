import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
            <div class="bg-gray-950">
                <div class="max-w-2xl mx-auto text-white py-10">
                    <div class="text-center">
                        <h3 class="text-3xl mb-3">Tic-Tac-Toe</h3>
                        <p>A simple yet timeless game of strategy</p>
                    </div>
                    <div class="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Tic Tac Toe, Sigma Software Solutions </p>
                        <div class="order-1 md:order-2">
                            <span class="px-2">About us</span>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
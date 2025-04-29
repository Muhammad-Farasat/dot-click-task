import React from 'react'

function AuthSideBanner() {
    return (
        <>
            <div className="w-1/2 bg-gradient-to-b from-[#046ddc] to-[#032181] text-white flex flex-col justify-center items-start p-18 max-sm:hidden max-md:hidden">

                <h1 className="text-4xl font-bold mb-4">GoFinance</h1>

                <p className="text-lg mb-6">The most popular peer to peer lending at SEA</p>

                <button className="bg-[#046ddc] text-[#fff] px-6 py-2 rounded-full text-[12px] hover:bg-blue-100 transition">
                    Read More
                </button>

            </div>
        </>
    )
}

export default AuthSideBanner
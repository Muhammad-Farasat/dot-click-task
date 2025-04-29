import React from 'react'
import AuthSideBanner from '../components/AuthSideBanner';
import AuthForm from '../components/AuthForm';



function Signup() {
    return (
        <>
            <div className="min-h-screen flex">

                {/* Left Side */}

                <AuthSideBanner />

                {/* Right Side */}
                <div className="w-1/2 flex flex-col justify-center items-center p-10 max-sm:w-full max-sm:px-4 max-md:w-full max-md:px-4 ">

                    <div className="w-full max-w-sm">

                        <h2 className="text-2xl font-bold mb-2">Register Your Account</h2>

                        <p className="text-gray-600 mb-6">Fill the form down below</p>

                        <AuthForm />

                        {/* Login Link */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
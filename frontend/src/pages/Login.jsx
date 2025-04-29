import React from 'react'
import AuthForm from '../components/AuthForm'
import AuthSideBanner from '../components/AuthSideBanner'

function Login() {
    return (
        <>
            <div className="min-h-screen flex ">

                {/* Left Side */}

                <AuthSideBanner />

                {/* Right Side */}
                <div className="w-1/2 flex flex-col justify-center items-center p-10 max-sm:w-full max-sm:px-4 max-md:w-full max-md:px-4 ">

                    <div className="w-full max-w-sm">

                        <h2 className="text-2xl font-bold mb-2">Hello Again..!</h2>

                        <p className="text-gray-600 mb-6 ">Welcome Back</p>

                        <AuthForm />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
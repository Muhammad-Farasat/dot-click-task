import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useLocation, Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin'; // adjust path if needed
import useSignup from '../hooks/useSignup'; // adjust path if needed

function AuthForm() {
    const location = useLocation();
    const locationPathName = location.pathname;

    const { login, loading: loginLoading } = useLogin();
    const { signup, loading: signupLoading } = useSignup();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (locationPathName === '/signup') {
           
            const data = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            };

            await signup({ data });
        } else {
            const data = {
                email: formData.email,
                password: formData.password
            };

            await login({ data });
        }
    };

    return (
        <>
            <form className="space-y-4 max-sm:mt-12 " onSubmit={handleSubmit}>
              
                {locationPathName === '/signup' &&
                    <div className="w-full px-4 py-3 border border-[#eaeaea] flex items-center gap-x-4 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <IoPerson className='text-2xl text-[#a6a6a6]' />
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            className='w-full outline-none'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                }

                <div className="w-full px-4 py-3 border border-[#eaeaea] flex items-center gap-x-4 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <AiOutlineMail className='text-2xl text-[#a6a6a6]' />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className='w-full outline-none'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full px-4 py-3 border border-[#eaeaea] flex items-center gap-x-4 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <IoMdLock className='text-2xl text-[#a6a6a6]' />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className='w-full outline-none'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {locationPathName === '/signup' &&
                    <div className="w-full px-4 py-3 border border-[#eaeaea] flex items-center gap-x-4 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <IoMdLock className='text-2xl text-[#a6a6a6]' />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder=" Confirm Password"
                            className='w-full outline-none'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                }

                <button
                    type="submit"
                    className="w-full bg-[#046ddc] text-white py-2 rounded-full hover:bg-blue-700 transition"
                    disabled={loginLoading || signupLoading}
                >
                    {locationPathName === '/signup'
                        ? (signupLoading ? 'Signing Up...' : 'Sign Up')
                        : (loginLoading ? 'Logging In...' : 'Login')}
                </button>

                <div className="py-3 border-t border-[#E0E3E6] text-center">
                    {locationPathName === '/login' ? (
                        <p className="max-sm:text-sm text-[#4A4A4A]">
                            Don’t have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-[#046ddc] hover:text-blue-700 font-[Nunito-Medium] transition-colors"
                            >
                                Create Account
                            </Link>
                        </p>
                    ) : (
                        <p className="max-sm:text-sm text-[#4A4A4A]">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-[#046ddc] hover:text-blue-700 font-[Nunito-Medium] transition-colors"
                            >
                                Login
                            </Link>
                        </p>
                    )}
                </div>
            </form>
        </>
    );
}

export default AuthForm;

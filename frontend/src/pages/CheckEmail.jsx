import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { AiOutlineMail } from "react-icons/ai";

const CheckEmail = () => {

    const navigate = useNavigate();
    const email = localStorage.getItem("user-email");

    useEffect(() => {
        if (!email) navigate("/signup");
    }, [email, navigate]);

    // const { success, resendVerificationEmail, loading } = useResendEmail()

    const handleResendEmail = () => {
        resendVerificationEmail(email)

        if (success) {
            toast.success("Email has been resent")
        }
    }


    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-[#eaeaea] p-4">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center border border-[#E0E3E6]">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center text-5xl text-[#046ddc] ">

                        <AiOutlineMail />

                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-[Nunito-ExtraBold] text-[#2A3B4D] mb-4">
                        Email Verification Required
                    </h2>

                    {/* Message */}
                    <div className="space-y-3 text-[#4A4A4A]">
                        <p>
                            We’ve sent a verification link to{" "}
                            <strong className="text-[#046ddc]">{email}</strong>.
                        </p>
                        <p>
                            Please check your inbox and click the link to verify your account.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CheckEmail
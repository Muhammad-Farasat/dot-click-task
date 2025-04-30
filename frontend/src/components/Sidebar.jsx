import React from 'react';
import { FaFlask, FaCalendarAlt, FaPills, FaEnvelope, FaCreditCard, FaCog, FaTable, FaRegQuestionCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

function Sidebar({ isOpen, setIsOpen }) {
   
    const links = [
        { name: 'User Table', icon: <FaTable />, path: '/dashboard' },
        { name: 'Lab Test', icon: <FaFlask />, path: '/dashboard/lab-test' },
        { name: 'Appointment', icon: <FaCalendarAlt />, path: '/dashboard/appointment' },
        { name: 'Medicine Order', icon: <FaPills />, path: '/dashboard/medicine-order' },
        { name: 'Message', icon: <FaEnvelope />, path: '/dashboard/message' },
        { name: 'Payment', icon: <FaCreditCard />, path: '/dashboard/payment' },
        { name: 'Settings', icon: <FaCog />, path: '/dashboard/settings' },
    ];

    return (
        <>
            <div className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:static lg:block
            `}>
                <div className="flex flex-col justify-between h-full">
                    <div>

                        <nav className="flex flex-col space-y-2 px-4 mt-6">
                            <h1 className="text-3xl font-bold text-blue-600 max-sm:hidden max-md:hidden max-lg:hidden ">Sales.</h1>
                            {links.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 py-2 px-3 rounded-md ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.name}</span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 space-y-4">
                        <div className="text-gray-500 flex items-center gap-x-3">
                            <FaRegQuestionCircle />
                            Help
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

export default Sidebar;

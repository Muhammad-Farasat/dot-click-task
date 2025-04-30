import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import useAdmin from '../hooks/useAdmin';
import LogoutBtn from './LogoutBtn';

function Topbar({ setIsOpen }) {
    const [open, setOpen] = useState(false);
    
    const [search, setSearch] = useState('');
    const { data } = useAdmin();
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 gap-4 max-sm:flex-row max-md:flex-row max-lg:flex-row  ">
            {/* Left: Logo + Hamburger */}
            <div className="flex items-center gap-4 lg:w-auto justify-between">
                {/* <div className="flex items-center   "> */}
                    <button onClick={() => setIsOpen(prev => !prev)} className="text-4xl text-gray-600 lg:hidden">
                        <HiOutlineMenu />
                    </button>
                {/* </div> */}
            </div>

            {/* Center: Search Bar */}
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={handleSearch}
                className="w-full lg:w-1/3 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {/* Right: Admin Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <div
                    className="flex items-center space-x-2 cursor-pointer text-lg "
                    onClick={() => setOpen(prev => !prev)}
                >
                    <span className="text-gray-500 font-medium">{data}</span>
                    <FaChevronDown className="text-gray-500 text-sm" />
                </div>

                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden z-10">
                        <LogoutBtn />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Topbar;

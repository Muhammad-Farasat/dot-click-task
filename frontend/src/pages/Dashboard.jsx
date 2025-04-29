import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="flex h-screen overflow-hidden">
        
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        
            <div className="flex-1 flex flex-col">
        
                <Topbar setIsOpen={setIsOpen} />
        
                <main className="p-4 overflow-y-auto">
                    <Outlet />
                </main>
        
            </div>
        </div>
    );
}

export default Dashboard;

import React from 'react'
import useLogout from '../hooks/useLogout';

function LogoutBtn() {
    
    const { logout, loading } = useLogout();
    
    
    return (
        <>
            <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                onClick={logout}
                disabled={loading}
            >
                {loading ? 'Logging out...' : 'Logout'}
            </button>
        </>
    )
}

export default LogoutBtn
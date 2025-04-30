import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/usersSlice';
import toast from 'react-hot-toast';

function UsersTable() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        toast.success('User deleted successfully');
    };

    const handleEdit = (userId) => {
        navigate(`/dashboard/edit-user/${userId}`);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">User Management</h1>
                <p className="text-gray-600 mt-2">Manage your system users and their permissions</p>
            </div>

            {/* For desktop */}
            <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-4">
                                            <button onClick={() => handleEdit(user._id)} className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1 transition-colors">
                                                <FaEdit className="text-sm" /> Edit
                                            </button>
                                            <button onClick={() => handleDelete(user._id)} className="text-rose-600 hover:text-rose-900 flex items-center gap-1 transition-colors">
                                                <FaTrash className="text-sm" /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* For mobile */}
            <div className="md:hidden space-y-4">
                {users.map(user => (
                    <div key={user._id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">{user.username}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                                {user.role}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{user.email}</p>
                        <div className="flex justify-end gap-4">
                            <button onClick={() => handleEdit(user._id)} className="text-indigo-600 text-sm flex items-center gap-1">
                                <FaEdit className="text-sm" /> Edit
                            </button>
                            <button onClick={() => handleDelete(user._id)} className="text-red-600 text-sm flex items-center gap-1">
                                <FaTrash className="text-sm" /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersTable;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editUser } from '../redux/usersSlice';

function EditUser() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.users.find(u => u._id === id));

    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser(formData));
        navigate('/dashboard/users');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <input name="username" value={formData.username} onChange={handleChange} className="w-full mb-3 p-2 border" />
            <input name="email" value={formData.email} onChange={handleChange} className="w-full mb-3 p-2 border" />
            <select name="role" value={formData.role} onChange={handleChange} className="w-full mb-3 p-2 border">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </form>
    );
}

export default EditUser;

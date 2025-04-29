import { createSlice } from '@reduxjs/toolkit';

// 🧠 Step 1: load from localStorage if exists
const getInitialUsers = () => {
  const storedUsers = localStorage.getItem("redux-users");
  if (storedUsers) return JSON.parse(storedUsers);

  // first time → save dummy data
  const defaultUsers = [
    { _id: '1', username: 'John Doe', email: 'john@example.com', role: 'user' },
    { _id: '2', username: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
    { _id: '3', username: 'Ali Raza', email: 'ali@admin.com', role: 'user' },
    { _id: '4', username: 'Saad Akbar', email: 'saad@example.com', role: 'user' },
    { _id: '5', username: 'Ali Hashir', email: 'hashir@example.com', role: 'user' },
    { _id: '6', username: 'Moiz Khan', email: 'moiz@admin.com', role: 'admin' },
  ];
  localStorage.setItem("redux-users", JSON.stringify(defaultUsers));
  return defaultUsers;
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("redux-users", JSON.stringify(data));
};

const usersSlice = createSlice({
  name: 'users',
  initialState: getInitialUsers(),
  reducers: {
    deleteUser: (state, action) => {
      const updated = state.filter(user => user._id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
    editUser: (state, action) => {
      const updated = state.map(user =>
        user._id === action.payload._id ? action.payload : user
      );
      saveToLocalStorage(updated);
      return updated;
    },
    addUser: (state, action) => {
      const updated = [...state, action.payload];
      saveToLocalStorage(updated);
      return updated;
    }
  }
});

export const { deleteUser, editUser, addUser } = usersSlice.actions;
export default usersSlice.reducer;

import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Cookies from 'js-cookie'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CheckEmail from './pages/CheckEmail'
import VerifyEmail from './pages/VerifyEmail'
import UsersTable from './components/UserTable'
import EditUser from './pages/EditUser'


function App() {

  const authUser = Cookies.get('authorization')

  return (
    <>
      <Routes>

        <Route 
          path="/dashboard" 
          element={authUser ? <Dashboard /> : <Navigate to="/login" />}>

          <Route index element={<UsersTable />} />
          <Route path="users" element={<UsersTable />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Route>

        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to={'/'} />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to={'/'} />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>

      <Toaster />
    </>
  )
}

export default App

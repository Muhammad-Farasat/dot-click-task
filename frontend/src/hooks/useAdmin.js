import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useAdmin() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const backend_url = import.meta.env.VITE_BACKEND_URL

    const displayAdmin = async() => {
        try {
            setLoading(true)
            
            const response = await axios.get(`${backend_url}/admin-detail`, {withCredentials: true})
            
            if (response.status === 200) {
                setData(response.data.user.username)            
            }

        } catch (error) {
         console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        displayAdmin()        
    },[])


  return { data, loading }
}

export default useAdmin
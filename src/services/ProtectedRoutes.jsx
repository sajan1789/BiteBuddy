import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("loggedin");
  return (
    <div>
        {
            auth ? <Outlet /> : <Navigate to={"/login"} />
        }
    </div>
  )
}

export default ProtectedRoutes
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({isloggedIn}){
    return isloggedIn ? <Outlet/>: <Navigate to="/login" />;
}
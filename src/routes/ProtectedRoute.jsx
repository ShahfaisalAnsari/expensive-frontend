import useAuth from '@/hooks/useAuth'
import NotFound from '@/pages/notFound';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({allowedRoles}) => {
    const {isAuth, role} = useAuth();
    if(!isAuth){
        return <Navigate to="/" replace/>
    }
    return allowedRoles.includes(role) ? <Outlet /> :<NotFound/>
}

export default ProtectedRoute;
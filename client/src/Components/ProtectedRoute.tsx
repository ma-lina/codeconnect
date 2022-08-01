import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { user } = useContext(AuthContext);
    let location = useLocation();
   
    if (!user) {
        return (<Navigate to="/login" state={{ from: location }} replace />)
    } else {
        return children;
    }
}

export default ProtectedRoute; 
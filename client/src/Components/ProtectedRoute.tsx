import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isUserLoggedIn } = useContext(AuthContext);

    let location = useLocation();
   
    if (!isUserLoggedIn()) {
        return (<Navigate to="/login" state={{ from: location }} replace />)
    } else {
        return children;
    }
}

export default ProtectedRoute; 
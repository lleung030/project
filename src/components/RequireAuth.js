import React from 'react';
import {useAuth} from './contexts/AuthContext';
import {Navigate} from 'react-router-dom';

const RequireAuth = () => {
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to="/login"/>;
    }
  return  
}

export default RequireAuth

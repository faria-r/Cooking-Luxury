import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <progress className="progress text-center bg-rose-600 w-56"></progress>
    }
   if(user && user.uid){
    return children
   }
   return <Navigate to='/login'state={{from:location}}replace></Navigate>
};

export default PrivateRoutes;
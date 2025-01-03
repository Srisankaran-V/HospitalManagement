import { useContext } from 'react';

import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"
import PropTypes from 'prop-types'

const ProtectedRoute = ({element}) => {
    
    const {newToken} = useContext(AuthContext);
    console.log('newToken:', newToken);
    console.log('localStorage:', localStorage.getItem('token'));
    const token = newToken || localStorage.getItem('token');
    return token ? element : <Navigate to="/login" replace />;  
}

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
}

export default ProtectedRoute;



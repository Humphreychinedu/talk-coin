import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Paths' 

const PasswordForgetLink = () => {
    return(
        <div>
            <p>Forgot Password? <Link to={ROUTES.PASSWORD_FORGET}>Reset Password</Link></p> 
        </div>
    )
}

export default PasswordForgetLink;
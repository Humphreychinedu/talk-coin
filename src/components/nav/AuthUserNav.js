import React from 'react';
import { Link } from 'react-router-dom';
import  * as ROUTES  from '../../constants/Paths'
import '../../scss/Navigation.scss';
import SignOut from '../usermanagement/SignOut';

const AuthUserNav = () => {
    return (
    <div> 
        <ul> 
            <li><Link to={ROUTES.LANDING}> Landing </Link> </li>
            <li><Link to={ROUTES.HOME}> Home </Link> </li>
            <li><Link to={ROUTES.ACCOUNT}> Account </Link> </li>
            <li><Link to={ROUTES.ADMIN}> Admin </Link> </li>
            <li><SignOut/></li>
        </ul>
    </div>
    );
}

export default AuthUserNav;
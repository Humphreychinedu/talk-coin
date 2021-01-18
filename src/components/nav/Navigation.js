import React from 'react';
// import { Link } from 'react-router-dom';
// import  * as ROUTES  from '../../constants/Paths';
import '../../scss/Navigation.scss';
// import SignOut from '../SignOut';
import AuthUserNav from './AuthUserNav';
import NonAuthUserNav from './NonAuthUserNav';
import { AuthUserContext } from '../../session';

const Navigation = () => {
    return (
    <div className='Nav'> 
        <AuthUserContext.Consumer>
        { authUser => authUser ? <AuthUserNav /> : <NonAuthUserNav /> }
        {/* <ul> 
            <li><Link to={ROUTES.LANDING}> Landing </Link> </li>
            <li><Link to={ROUTES.SIGN_UP}> Sign Up </Link> </li>
            <li><Link to={ROUTES.SIGN_IN}> Sign In </Link> </li>
            <li><Link to={ROUTES.HOME}> Home </Link> </li>
            <li><Link to={ROUTES.ACCOUNT}> Account </Link> </li>
            <li><Link to={ROUTES.ADMIN}> Admin </Link> </li>
            <li><SignOut/></li>
        </ul> */}
        </AuthUserContext.Consumer>
    </div>
    
    );
}

export default Navigation;
import React from 'react';
import ChangePassword from '../components/usermanagement/ChangePassword';
import PasswordResetForm from '../components/usermanagement/PasswordReset'
import {withAuthorization, AuthUserContext} from '../session/index';


const AccountPage = () => {
    return(
    <AuthUserContext.Consumer>
        { authUser => (
            <div><h1>Account: {authUser.email} </h1>
                <PasswordResetForm/>
                <ChangePassword/>
            </div>
        )
        }
    </AuthUserContext.Consumer>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
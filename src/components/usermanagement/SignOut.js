import React from 'react';
import { withFirebase } from '../firebasemodule';


const SignOut = ({firebase}) => {
    return(<div>
        <button type='button' onClick={firebase.signOut}>Sign Out</button>
    </div>);
}

export default withFirebase(SignOut);
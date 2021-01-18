import React from 'react';
import SignUpForm from '../components/usermanagement/SignUp';

const SignUpPage = () => {
    return(
        <div>
            <h1>SignUpPage</h1>
            {/* <FirebaseContext.Consumer>
              {firebase => <SignUp firebase={firebase}/> }  
            </FirebaseContext.Consumer> */}
            <SignUpForm />
            
        </div>
        );
}

export default SignUpPage;
import React, { Component } from 'react';
import  { withFirebase } from '../firebasemodule';

const INITIAL_STATE = {
    email:'',
    error: null
};

class PasswordReset extends Component {

    constructor(props) {
        super(props)

        this.state = {...INITIAL_STATE}
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email } = this.state;
        this.props.firebase.resetPassword(email)
        .then( () =>  {
            this.setState({...INITIAL_STATE});
        }).catch( error => {
            this.setState({error})
        });      
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});  
    }

    render () {

        const {email, error} = this.state;
        const isInvalid = email === '';
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='email'>Email Address:</label>
                <input name='email' onChange={this.handleChange} value={this.state.email} 
                type='text' placeholder='Email Address'/>   
                <br/>
                <button disabled={isInvalid} type='submit'>Reset Password</button>

                { error && <p>{error.message}</p>}
            </form>
         </div>);
    }
    
}

const PasswordResetForm = withFirebase(PasswordReset);
export default PasswordResetForm;
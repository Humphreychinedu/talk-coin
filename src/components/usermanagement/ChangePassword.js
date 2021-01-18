import React, { Component } from 'react';
import {withFirebase} from '../firebasemodule';


const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
}

class ChangePassword  extends Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }


    handleSubmit = event => {
        event.preventDefault();

        const { passwordOne } = this.state;
        this.props.firebase.updatePassword(passwordOne)
        .then(() => {
            this.setState({...INITIAL_STATE});
        })
        .catch(error => {
            this.setState({error});
        })
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }


    render () {
        const {passwordOne, passwordTwo, error} = this.state;
        const isInvalid = passwordOne !== passwordTwo || passwordOne === ''
                            || passwordTwo === '';
        return(
        <div>
           <form onSubmit={this.handleSubmit}>
                <label htmlFor='passwordOne'>New Password:</label>
                <input 
                name= 'passwordOne'
                value= {passwordOne}
                onChange={this.handleChange} 
                type='password'
                placeholder='New Password'/>
                <br/>
                <label htmlFor='passwordTwo'>Confirm New Password:</label>
                <input 
                name= 'passwordTwo'
                value= {passwordTwo}
                onChange={this.handleChange} 
                type='password'
                placeholder='Confirm New Password'/>
                <br/>
                <button disabled={isInvalid} type='submit'> Reset Password</button>
                { error && <p>{error.message}</p>}
            </form> 
        </div>)
    }

}

export default  withFirebase(ChangePassword);
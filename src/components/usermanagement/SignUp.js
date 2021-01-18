import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/Paths';
import {  withFirebase } from '../firebasemodule';
import { compose } from 'recompose';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    handleSubmit = event => {
        event.preventDefault();
        const {username, email, passwordOne} = this.state;
        this.props.firebase
        .createUser(email, passwordOne)
        .then(authUser => {
            return this.props.firebase
            .user(authUser.user.uid)
            .set({username, email});
        })
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({error});
        });
        
    }

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value});
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo ||
                        passwordOne === '' || 
                        email === '' ||
                        username === '';

         return(
         <div>
             <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input 
                name= 'username'
                value= {username}
                onChange={this.handleChange} 
                type='text'
                placeholder='Full Name'/>
                <br/>
                <label htmlFor='email'>Email Address:</label>
                <input 
                name= 'email'
                value= {email}
                onChange={this.handleChange} 
                type='text'
                placeholder='Email Address'/>
                <br/>
                <label htmlFor='passwordOne'>Password:</label>
                <input 
                name= 'passwordOne'
                value= {passwordOne}
                onChange={this.handleChange} 
                type='password'
                placeholder='Password'/>
                <br/>
                <label htmlFor='passwordTwo'>Confirm Password:</label>
                <input 
                name= 'passwordTwo'
                value= {passwordTwo}
                onChange={this.handleChange} 
                type='password'
                placeholder='Confirm Password'/>
                <br/>
                <button disabled={isInvalid} type='submit'> Sign Up</button>
                {error && <p>{error.message}</p>}
             </form>
        </div>);
    }

}

const SignUpForm = compose(
    withRouter,
    withFirebase
    )(SignUp);

// const SignUpForm = withRouter(withFirebase(SignUp));


export default SignUpForm;
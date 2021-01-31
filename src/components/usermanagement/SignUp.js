import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/Paths";
import { FaUserAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { withFirebase } from "../firebasemodule";
import { compose } from "recompose";
import "../../scss/Signup.scss";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .createUser(email, passwordOne)
      .then((authUser) => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.SIGN_IN);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="sign-up">
        <div className="signup-info">
          <span>
            <MdAccountCircle />
          </span>
          <h2>Create Account</h2>
        </div>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <span>
                <FaUserAlt />
              </span>
              <input
                name="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                placeholder="Username:"
              />
            </div>
            <br />
            <div className="form-group">
              <span>
                <HiMail />
              </span>
              <input
                name="email"
                value={email}
                onChange={this.handleChange}
                type="text"
                placeholder="Email Address:"
              />
            </div>
            <br />
            <div className="form-group">
              <span>
                <RiLockPasswordFill />
              </span>
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.handleChange}
                type="password"
                placeholder="Password:"
              />
            </div>
            <br />
            <div className="form-group">
              <span>
                <RiLockPasswordFill />
              </span>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.handleChange}
                type="password"
                placeholder="Confirm Password:"
              />
            </div>
            <br />
            <button disabled={isInvalid} type="submit">
              {" "}
              Submit
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUp);

// const SignUpForm = withRouter(withFirebase(SignUp));

export default SignUpForm;

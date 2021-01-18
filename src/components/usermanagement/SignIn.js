import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../firebasemodule";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/Paths";
import { FaExclamation } from "react-icons/fa";
import "../../scss/SignIn.scss";
import SignUpLink from "./SignUpLink";
import PasswordForgetLink from "./PasswordForgetLink";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .login(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="base-container">
        <div className="content">
          <div className="section">
            <div className="welcome">
              <h1>Welcome</h1>
              <p> Sign in or create an account and start trading bitcoin</p>
              <div className="btn">
                <button>
                  <span>
                    <FaExclamation />
                  </span>
                  Need help?
                </button>
              </div>
            </div>
            <div className="information">
              <div className="image">{/* <img src={Lock} alt="" /> */}</div>
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      placeholder="Email Address"
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <div className="footer">
                    <button disabled={isInvalid} type="submit">
                      Sign In
                    </button>
                  </div>
                  {error && <p>{error.message}</p>}
                </form>
              </div>
              <SignUpLink /> <PasswordForgetLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignIn);

export default SignInForm;

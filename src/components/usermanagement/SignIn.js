import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../firebasemodule";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/Paths";
import { FaExclamation } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import "../../scss/SignIn.scss";
import SignUpLink from "./SignUpLink";
import PasswordForgetLink from "./PasswordForgetLink";
import BITCOINSVG from "../../assets/image/bitcoin.png";

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
        this.props.history.push(ROUTES.DASHBOARD);
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
          <div className="head-image">
            <div className="site-logo">
              <img src={BITCOINSVG} alt="" />
            </div>
            <div className="site-name">
              <h3>Talk Coin</h3>
            </div>
          </div>
          <div className="sign-in-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <span>
                  <HiMail />
                </span>
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
                <span>
                  <RiLockPasswordFill />
                </span>
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
          <div className="options">
            <SignUpLink /> <PasswordForgetLink />
          </div>
          <div className="bg-image"></div>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignIn);

export default SignInForm;

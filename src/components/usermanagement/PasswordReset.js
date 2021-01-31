import React, { Component } from "react";
import { withFirebase } from "../firebasemodule";
import { HiMail } from "react-icons/hi";
import "../../scss/PasswordReset.scss";

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    this.props.firebase
      .resetPassword(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <div className="reset-form">
        <h3>Reset Password</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <span>
              <HiMail />
            </span>
            <input
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <br />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const PasswordResetForm = withFirebase(PasswordReset);
export default PasswordResetForm;

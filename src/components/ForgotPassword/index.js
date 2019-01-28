import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase'
import { RegisterLink } from '../Register';
import { LogInLink } from '../LogIn'
import * as ROUTES from '../../constants/routes';

const ForgotPasswordPage = () => (
  <div>
    <h1>Forgot Password</h1>
    <ForgotPasswordForm />
    <LogInLink />
    <RegisterLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: 'null',
};

class ForgotPasswordFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
    .doPasswordReset(email)
    .then(() => {
      this.setState({ ...INITIAL_STATE});
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name = "email"
          value = {this.state.email}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Email Address"
        />
      <button
        disabled = {isInvalid}
        type = "submit">
        Reset my Password
      </button>

      {error &&<p>{error.message}</p>}
      </form>
    );
  }
}
const ForgotPasswordLink = () => (
  <p>
    <Link to={ROUTES.FORGOT_PASSWORD}>Did you forget your password?</Link>
  </p>
);

export default ForgotPasswordPage;

const ForgotPasswordForm = withFirebase(ForgotPasswordFormBase);

export { ForgotPasswordForm, ForgotPasswordLink }

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { RegisterLink } from '../Register';
import {ForgotPasswordLink } from '../ForgotPassword'
import { withFirebase } from '../Firebase/index'
import * as ROUTES from '../../constants/routes';

const LogInPage = () => (
  <div>
    <h1>Log in, my Dear</h1>
    <LogInForm />
    <ForgotPasswordLink />
    <RegisterLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LogInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
      // Create a user in your Firebase realtime database
      return this.props.firebase
        .user(authUser.user.uid)
        .set({ username, email,});
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
      <button disabled={isInvalid} type="Submit">
          Log In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const LogInForm = compose(
  withRouter,
  withFirebase,
)(LogInFormBase);

const LogInLink = () => (
  <p>
    <Link to={ROUTES.LOG_IN}>I know my password, let me log in!</Link>
  </p>
);

export default LogInPage;

export { LogInForm, LogInLink };

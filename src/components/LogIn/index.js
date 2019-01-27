import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase/index'
import * as ROUTES from '../../constants/routes';

const LogInPage = () => (
  <div>
    <h1>Log in, my Dear</h1>
    <LogInForm />
    <SignUpLink />
      <div>
        <Link to={ROUTES.FORGOT_PASSWORD}>Did you forget your password?</Link>
      </div>
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
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
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

export default LogInPage;

export { LogInForm };

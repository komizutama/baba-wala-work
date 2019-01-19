import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <div>
      <p>Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></p>
    </div>
    <div>
      <Link to={ROUTES.PASSWORD_FORGET}>Did you forget your password?</Link>
    </div>
  </div>
);

export default SignUpPage;

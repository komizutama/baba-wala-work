import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <div>
      <Link to={ROUTES.SIGN_UP}>Create an account</Link>
    </div>
    <div>
      <Link to={ROUTES.PASSWORD_FORGET}>Did you forget your password?</Link>
    </div>
  </div>
);

export default SignInPage;

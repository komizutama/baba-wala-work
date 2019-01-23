import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const LogInPage = () => (
  <div>
    <h1>Log In Baba Walla</h1>
    <div className="login">
    </div>
    <div>
      <Link to={ROUTES.PASSWORD_FORGET}>Did you forget your password?</Link>
    </div>
    <div>
      <Link to={ROUTES.SIGN_UP}>Create an account</Link>
    </div>
  </div>
);

export default LogInPage;

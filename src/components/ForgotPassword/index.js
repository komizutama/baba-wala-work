import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const ForgotPasswordPage = () => (
  <div>
    <h1>Forgot Password</h1>
      <div>
        <p>I remember my Password! Let me <Link to={ROUTES.SIGN_IN}>Log In</Link>!</p>
      </div>
      <div>
        <Link to={ROUTES.REGISTER}>Create an account</Link>
      </div>
  </div>

);

export default ForgotPasswordPage;

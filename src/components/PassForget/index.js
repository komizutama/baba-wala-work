import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const PassForgetPage = () => (
  <div>
    <h1>Password Forget</h1>
      <div>
        <p>I remember my Password! Let me <Link to={ROUTES.LOG_IN}>Log In</Link>!</p>
      </div>
      <div>
        <Link to={ROUTES.SIGN_UP}>Create an account</Link>
      </div>
  </div>

);

export default PassForgetPage;

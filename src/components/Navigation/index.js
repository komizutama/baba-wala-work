import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.DONATE}>Donate</Link>
      </li>
      <li>
        <Link to={ROUTES.JOBS}>All</Link>
      </li>
      <li>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
      </li>
      <li>
        <Link to={ROUTES.LOCATIONS}>Locations</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

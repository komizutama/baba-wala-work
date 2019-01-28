import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);


const NavigationAuth = () => (
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
        <Link to={ROUTES.JOBS}>Jobs</Link>
      </li>
      <li>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
      </li>
      <li>
        <Link to={ROUTES.LOCATIONS}>Locations</Link>
      </li>
    </ul>
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
      <li>
        <Link to={ROUTES.LOG_IN}>Log In</Link>
      </li>
      <li>
        <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
      </li>
      <li>
        <Link to={ROUTES.REGISTER}>Register</Link>
      </li>
      <li>
        <Link to={ROUTES.DONATE}>Donate</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

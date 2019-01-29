import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import ChangePasswordForm from "../ChangePassword"

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ChangePasswordForm />
      </div>
    )}
  </AuthUserContext.Consumer>
)

// auth user
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);

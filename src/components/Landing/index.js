import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const LandingPage = () => (
  <div>
    <Link to={ROUTES.HOME}><h1>Landing</h1></Link>
  </div>
);

export default LandingPage;

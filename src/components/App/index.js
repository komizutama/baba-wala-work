import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from '../About';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import CenterRequestPage from '../CenterRequest';
import DonationPage from '../Donate';
import HomePage from '../Home';
import JobListPage from '../JobList';
import JobPostPage from '../JobPost';
import JobPostEditPage from '../JobPostEdit'
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import ForgotPasswordPage from '../ForgotPassword';
import RegisterPage from '../Register';
import LogInPage from '../LogIn';
import ProjectsPage from '../Projects';
import LocationsPage from '../Locations';

import * as ROUTES from '../../constants/routes';
// eslint-disable-next-line
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
      <Route path={ROUTES.LOG_IN} component={LogInPage} />
      <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
      <Route path={ROUTES.DONATE} component={DonationPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.JOBS} component={JobListPage} />
      <Route path={ROUTES.JOB_POSTING} component={JobPostPage} />
      <Route path={ROUTES.JOB_POSTING_EDIT} component={JobPostEditPage} />
      <Route path={ROUTES.LOCATIONS} component={LocationsPage} />
      <Route path={ROUTES.PROJECTS} component={ProjectsPage} />
      <Route path={ROUTES.CENTER_REQUEST} component={CenterRequestPage} />
    </div>
  </Router>
);

export default withAuthentication(App);

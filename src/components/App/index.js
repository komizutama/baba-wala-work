import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

import aboutPage from '../About';
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
import { withFirebase } from '../Firebase/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render () {
    return(
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.REGISTER} component={RegisterPage} />
          <Route exact path={ROUTES.SIGN_IN} component={LogInPage} />
          <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
          <Route exact path={ROUTES.DONATE} component={DonationPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ABOUT} component={aboutPage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route exact path={ROUTES.JOBS} component={JobListPage} />
          <Route exact path={ROUTES.JOB_POSTING} component={JobPostPage} />
          <Route exact path={ROUTES.JOB_POSTING_EDIT} component={JobPostEditPage} />
          <Route exact path={ROUTES.LOCATIONS} component={LocationsPage} />
          <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />
          <Route exact path={ROUTES.CENTER_REQUEST} component={CenterRequestPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

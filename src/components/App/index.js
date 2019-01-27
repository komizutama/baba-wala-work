import React, { Component } from 'react';
import {  BrowserRouter as Router, Route }from 'react-router-dom';

import aboutPage from '../About';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import CenterRequestPage from '../CenterRequest';
import DonationPage from '../Donate';
import HomePage from '../Home';
import JobListPage from '../JobList';
import JobPostingPage from '../JobPosting';
import JobPostingEditPage from '../JobPostingEdit'
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import ForgotPasswordPage from '../ForgotPassword';
import RegisterPage from '../Register';
import LogInPage from '../Register';
import ProjectsPage from '../Projects';
import LocationsPage from '../Locations';

import * as ROUTES from '../../constants/routes';
// eslint-disable-next-line
import { withFirebase } from '../Firebase';

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
          <Route path={ROUTES.REGISTER} component={RegisterPage} />
          <Route path={ROUTES.SIGN_IN} component={LogInPage} />
          <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
          <Route path={ROUTES.DONATE} component={DonationPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ABOUT} component={aboutPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.JOBS} component={JobListPage} />
          <Route path={ROUTES.JOB_POSTING} component={JobPostingPage} />
          <Route path={ROUTES.JOB_POSTING_EDIT} component={JobPostingEditPage} />
          <Route path={ROUTES.LOCATIONS} component={LocationsPage} />
          <Route path={ROUTES.PROJECTS} component={ProjectsPage} />
          <Route path={ROUTES.CENTER_REQUEST} component={CenterRequestPage} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';

import InfoCardsRow from './InfoCardsRow';
import SignUpFormContainer from './SignUpFormContainer';
import LandingPageHeader from './LandingPageHeader';
import * as api from '../common/apiCalls';
import * as utils from '../common/apiUtils';

import '../stylesheets/LandingPage.css';

class LandingPageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      showSignInForm: false,
      applicant: {}
    }
    this.toggleSignInForm = this.toggleSignInForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleSignInForm(){
    this.setState({showSignInForm: !this.state.showSignInForm})
  }

  handleLogin(email){
    console.log("createSession", email);
    const payload = {email: email}
    utils.post('/login', payload).then(applicant => {
       console.log("applicant: ", applicant);
       this.setState({
          applicant: {
            ...applicant,
            firstName: applicant.first_name,
            lastName: applicant.last_name,
          },
          showSignInForm: false,
          signedIn: true,
       })
    });
  }

  render(){
    const signInOption = !this.state.signedIn ?
        (<div className="text-center already-applied-link pt-1">
          Already Applied
          {' '}
          <span className="highlight link" onClick={this.toggleSignInForm}>
            Sign-In
          </span>
        </div>) : null;

    return(
      <div className="landing-page-container"> 
        <LandingPageHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 mt-4">

              <SignUpFormContainer 
                showSignInForm={this.state.showSignInForm}
                handleLogin={this.handleLogin}
                applicant={this.state.applicant}
                signedIn={this.state.signedIn}
              />
              {signInOption}
            </div>
          </div>
        </div>
        <InfoCardsRow />
      </div>
    );
  }
}

export default LandingPageContainer;
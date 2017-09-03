import React from 'react';

import InfoCardsRow from './InfoCardsRow';
import SignUpFormContainer from './SignUpFormContainer';
import LandingPageHeader from './LandingPageHeader';

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
  }

  toggleSignInForm(){
    this.setState({showSignInForm: !this.state.showSignInForm})
  }

  render(){
    return(
      <div className="landing-page-container"> 
        <LandingPageHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 mt-4">

              <SignUpFormContainer 
                showSignInForm={this.state.showSignInForm}
              />
              <div className="text-center already-applied-link pt-1">
                Already Applied? 
                {' '}
                <span className="highlight link" onClick={this.toggleSignInForm}>
                  Sign-In
                </span>
              </div>
            </div>
          </div>
        </div>
        <InfoCardsRow />
      </div>
    );
  }
}

export default LandingPageContainer;
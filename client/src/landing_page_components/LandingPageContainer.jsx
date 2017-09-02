import React from 'react';

import InfoCardsRow from './InfoCardsRow';
import SignUpFormContainer from './SignUpFormContainer';
import LandingPageHeader from './LandingPageHeader';

import '../stylesheets/LandingPage.css';

class LandingPageContainer extends React.Component {
  

  render(){
    return(
      <div className="landing-page-container"> 
        <LandingPageHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 mt-4">
             <SignUpFormContainer />
            </div>
          </div>
        </div>
        <InfoCardsRow />
      </div>
    );
  }
}

export default LandingPageContainer;
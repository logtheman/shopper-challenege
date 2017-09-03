import React, { Component } from 'react';

import LandingPageContainer from './landing_page_components/LandingPageContainer'
import * as api from './common/apiCalls';
import * as utils from './common/apiUtils';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicant: {},
    }
    this.handleLogin = this.handleLogin.bind(this);
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

  render() {
    console.log("applicant in APP", this.state.applicant);
    return (
      <div>
        <LandingPageContainer 
        handleLogin={this.handleLogin}
        applicant={this.state.applicant}
        />
      </div>
    );
  }
}

export default App;

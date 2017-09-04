import React from 'react';


import InfoCardsRow from './InfoCardsRow';
import SignUpFormContainer from './SignUpFormContainer';
import LandingPageHeader from './LandingPageHeader';
import * as api from '../common/apiCalls';
import * as apiUtils from '../common/apiUtils';
import * as formState from '../common/FormStateTypes';

import '../stylesheets/LandingPage.css';

class LandingPageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formState: formState.SHOW_BASIC_INFO, 
      signedIn: false,
      errors: "",
      notices: "",
      applicant: {},
    }
    this.showSignInForm = this.showSignInForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.updateStateApplicant = this.updateStateApplicant.bind(this);
    this.updateFormState = this.updateFormState.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.updateNotices = this.updateNotices.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

  updateErrors(error){
    this.setState({errors: error});
  }

  updateNotices(notice){
    this.setState({notices: notice});
  }

  updateStateApplicant(applicant){
    this.setState({applicant: applicant});
  }

  updateFormState(newState){
    this.setState({formState: newState});
  }

  showSignInForm(){
    this.setState({formState: formState.SHOW_SIGN_IN})
  }

  toggleSignIn(){
    this.setState({signedIn: !this.state.signedIn})
  }

  handleSignOut(){
    this.setState({
      showSignInForm: false,
      signedIn: false,
      applicant: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipcode: "",
      },
      notices: "Logout succesfully"
    })
    api.deleteSession();
  }

  handleLogin(email){
    const payload = {email: email};
    apiUtils.post('/login', payload).then(applicant => {
      if(applicant.message){
        this.setState({notices: applicant.message});
      }else{        
        console.log("applicant: ", applicant);
        this.setState({
          applicant: {
            ...applicant,
            firstName: applicant.first_name,
            lastName: applicant.last_name,
            zipcode: applicant.zip_code,
            id: applicant.id
          },
          formState: formState.SHOW_BASIC_INFO,
          notices: "Login Successful",
          signedIn: true,
        })
       }
    });
  }

  render(){
    const signInOption = !this.state.signedIn ?
        (<div className="text-center already-applied-link pt-1">
          Already Applied?
          {' '}
          <span className="highlight link" onClick={this.showSignInForm}>
            Sign-In
          </span>
        </div>) : 
        (<div className="text-center already-applied-link pt-1">
            <span className="highlight link" onClick={this.handleSignOut}>
              Sign-Out
            </span>
          </div>);

    return(
      <div className="landing-page-container"> 
        <LandingPageHeader />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 mt-4">

              <SignUpFormContainer 
                formState={this.state.formState}
                updateFormState={this.updateFormState}
                updateErrors={this.updateErrors}
                updateNotices={this.updateNotices}
                handleLogin={this.handleLogin}
                updateStateApplicant={this.updateStateApplicant}
                applicant={this.state.applicant}
                signedIn={this.state.signedIn}
                toggleSignIn={this.toggleSignIn}
                errors={this.state.errors}
                notices={this.state.notices}
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
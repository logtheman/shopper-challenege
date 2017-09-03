import React from 'react';
import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';
import LoginForm from './LoginForm';
import * as api from '../common/apiCalls'; 


class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBackgroundApproval: false,
    }
    this.onSubmitBasicInfo = this.onSubmitBasicInfo.bind(this);
  }

  onSubmitBasicInfo(applicantInfo){
    this.setState({
      showBackgroundApproval: true,
    });
    const payload = {
      applicant: {
        first_name: applicantInfo.firstName,
        last_name: applicantInfo.lastName,
        phone: applicantInfo.phone,
        email: applicantInfo.email,
        zip_code: applicantInfo.zipcode
      }
    }
    let response = "";
    console.log("applicant in SignUpFormContainer", this.props.applicant);

    if(this.props.applicant){
      payload.applicant.id = this.props.applicant.id;
      response = api.editApplicant(payload);
    }else{
      response = api.createApplicant(payload);
    }
    console.log("respose from server", response);

  }

  render(){
    console.log("sign in container form:", this.props);

    let formDetail, backgroundAgreement, loginForm, headerText = "";
    if(this.props.showSignInForm){
      headerText= "Sign In";
      loginForm = (
        <LoginForm 
          handleLogin={this.props.handleLogin}
        />);
    }else{
      if(this.state.showBackgroundApproval){
        backgroundAgreement = (<BackgroundCheckAgreement />)
      }else{
        headerText = this.props.signedIn ? "Welcome Back!" : "Applicant Information"
        if(!this.props.signedIn || this.props.applicant){
          // Signin and data hasn't loaded yet
          formDetail = (
              <ApplicantBasicInfoForm 
              submitSuccessfully={this.onSubmitBasicInfo}
              firstName={this.props.applicant && this.props.applicant.firstName}
              lastName={this.props.applicant && this.props.applicant.lastName}
              email={this.props.applicant && this.props.applicant.email}
              phone={this.props.applicant && this.props.applicant.phone}
              zipcode={this.props.applicant && this.props.applicant.zipcode}
              signedIn={this.props.signedIn}
            />)

        }else{
          formDetail = <div>Loading ...</div>
        }
      }
    }

    return (
      <div className="container sign-up-form">
        <h3 className="pt-2 text-center"> {headerText} </h3>
          {formDetail}
          {loginForm}
          {backgroundAgreement}
      </div>
    );
  }
}

export default SignUpFormContainer;



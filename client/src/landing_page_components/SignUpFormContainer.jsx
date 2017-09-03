import React from 'react';
import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';
import LoginForm from './LoginForm';
import * as api from '../common/apiCalls'; 
import * as utils from '../common/utils';
import * as apiUtils from '../common/apiUtils';



class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBackgroundApproval: false,
      completeForm: false,
      applicantId: null,
      errors: "",
    }
    this.onSubmitBasicInfo = this.onSubmitBasicInfo.bind(this);
    this.toggleBackgroundCheckForm = this.toggleBackgroundCheckForm.bind(this);
    this.handleAgreeToBackgroundCheck = this.handleAgreeToBackgroundCheck.bind(this);
  }

  toggleBackgroundCheckForm(){
    this.setState({showBackgroundApproval: !this.state.showBackgroundApproval });
  }

  handleAgreeToBackgroundCheck(){
    let payload = utils.applicantNameJStoRuby(this.props.applicant);
    payload.applicant.agree_background = true;
    payload.applicant.id = this.state.applicantId ? this.state.applicantId :
     this.props.applicant.id;
     apiUtils.post('/applicants', payload).then(response => {
       if(response){
         this.setState({
           showBackgroundApproval: false,
           completeForm: true,
         });
       }else{
         this.setState({
           errors: "Error please retry"
         });
       }
     });
    let response = api.editApplicant(payload);
  }

  onSubmitBasicInfo(applicantInfo){
    let payload = utils.applicantNameJStoRuby(applicantInfo);
    if(this.props.signedIn && this.props.applicant){
      payload.applicant.id = this.props.applicant.id;
      api.editApplicant(payload);
    }else{
      apiUtils.post('/applicants', payload).then(response => {
        if(response){
          this.setState({
            applicantId: response.id,
            showBackgroundApproval: true,
          });
        }else{
          this.setState({
            errors: "Invalid Entry. Please Check Form"
          });
        }
      });
    }
    if(this.props.applicant && !this.props.applicant.backgrounCheck){
      this.setState({
        showBackgroundApproval: true,
      });
    }
  }

  render(){
    console.log("sign in container form:", this.props);
    let formDetail, backgroundAgreement, loginForm, showComplete, headerText = "";

    if(this.state.completeForm){

    }else{
      if(this.props.showSignInForm){
        headerText= "Sign In";
        loginForm = (
          <LoginForm 
            handleLogin={this.props.handleLogin}
          />);
      }else{
        if(this.state.showBackgroundApproval && !this.props.applicant.agree_background){
          backgroundAgreement = (
            <BackgroundCheckAgreement 
              toggleBackgroundCheckForm={this.toggleBackgroundCheckForm}
              onClickAgree={this.handleAgreeToBackgroundCheck}
            />);
        }else{
          headerText = this.props.signedIn ? "Welcome Back!" : "Applicant Information"
          if(!this.props.signedIn || this.props.applicant){
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
    }

    return (
      <div className="container sign-up-form">
        <h3 className="pt-2 text-center"> {headerText} </h3>
          {formDetail}
          {loginForm}
          {backgroundAgreement}
          {this.state.errors}
      </div>
    );
  }
}

export default SignUpFormContainer;



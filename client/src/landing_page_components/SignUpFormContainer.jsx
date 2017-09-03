import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';
import LoginForm from './LoginForm';
import * as api from '../common/apiCalls'; 


class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completedInfo: false,
      applicant: {},
    }
    this.onSubmitBasicInfo = this.onSubmitBasicInfo.bind(this);
  }

  onSubmitBasicInfo(applicantInfo){
    this.setState({
      completedInfo: true,
      applicant: applicantInfo
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
    const response = api.createApplicant(payload);
    console.log("respose from server", response);

  }

  render(){
    console.log("sign in container form:", this.props);

    let formDetail, backgroundAgreement, loginForm = "";
    if(this.props.showSignInForm){
      loginForm = (
        <LoginForm 
          handleLogin={this.props.handleLogin}
        />);
    }else{
      if(this.state.completedInfo){
        backgroundAgreement = (<BackgroundCheckAgreement />)
      }else{
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
            />)

        }else{
          formDetail = <div>Loading ...</div>
        }
      }
    }

    return (
      <div className="container sign-up-form">

          {formDetail}
          {loginForm}
        <ReactCSSTransitionGroup
           transitionName="form-transition"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
         >
          {backgroundAgreement}
         </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SignUpFormContainer;



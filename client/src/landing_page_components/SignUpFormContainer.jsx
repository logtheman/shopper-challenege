import React from 'react';
import PropTypes from 'prop-types';

import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';
import LoginForm from './LoginForm';
import FormComplete from './FormComplete';
import * as utils from '../common/utils';
import * as apiUtils from '../common/apiUtils';
import * as formState from '../common/FormStateTypes';


class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      applicantId: null,
      errors: "",
    }
    this.onSubmitBasicInfo = this.onSubmitBasicInfo.bind(this);
    this.handleAgreeToBackgroundCheck = this.handleAgreeToBackgroundCheck.bind(this);
  }

  handleAgreeToBackgroundCheck(){
    if(this.props.applicant.id){
      let payload = utils.applicantNameJStoRuby(this.props.applicant);
      payload.applicant.agree_background = true;
      apiUtils.put(`/applicants/${this.props.applicant.id}`, payload).then(response => {
        if(response.status > 200){
         this.props.updateErrors(response.message);
        }else{
          this.props.updateStateApplicant(utils.applicantNameRubyToJs(response));
          this.props.updateFormState(formState.SHOW_COMPLETION);
          this.props.updateErrors("");
          this.props.updateNotices("");
        }
      });
    }
  }

  onSubmitBasicInfo(applicantInfo){
    let payload = utils.applicantNameJStoRuby(applicantInfo);
    if(this.props.signedIn && this.props.applicant){
      apiUtils.put(`/applicants/${this.props.applicant.id}`, payload).then(response => {
        if(response.status > 200){
          this.props.updateErrors(response.message);
        }else{
          this.props.updateStateApplicant(utils.applicantNameRubyToJs(response));
          this.props.updateErrors("");
          this.props.updateNotices("Successfully Posted");
          if(!response.agree_background){
            this.props.updateFormState(formState.SHOW_BACKGROUND_AGREE);
          }else{
            this.props.updateFormState(formState.SHOW_BASIC_INFO);
          }
        }
      });
    }else{
      apiUtils.post('/applicants', payload).then(response => {
        if(response.status > 200){
          this.props.updateErrors("Failed to submit. Please recheck form and try again.");
          this.props.updateFormState(formState.SHOW_BASIC_INFO);
        }else{
          this.props.updateStateApplicant(utils.applicantNameRubyToJs(response));
          this.props.updateFormState(formState.SHOW_BACKGROUND_AGREE);
          this.props.updateErrors("");
          this.props.updateNotices("Successfully Posted");
          this.props.toggleSignIn();
        }
      });
    }
  }

  render(){
    let formContent, headerText = "";
    switch(this.props.formState){
      case (formState.SHOW_BACKGROUND_AGREE):
        formContent = (<BackgroundCheckAgreement 
          updateFormState={this.props.updateFormState}
          onClickAgree={this.handleAgreeToBackgroundCheck}
        />);
        break;
      case (formState.SHOW_COMPLETION):
        formContent = (
          <FormComplete 
            updateFormState={this.props.updateFormState}
          />);
        break;
      case (formState.SHOW_SIGN_IN):
        headerText= "Sign In";
        formContent = (<LoginForm 
          handleLogin={this.props.handleLogin}
          updateFormState={this.props.updateFormState}
        />);
        break;
      default:
        headerText = this.props.signedIn ? "Welcome Back!" : "Applicant Information"
        formContent = (
          <ApplicantBasicInfoForm 
            handleSubmit={this.onSubmitBasicInfo}
            applicant={this.props.applicant}
            updateStateApplicant={this.props.updateStateApplicant}
            signedIn={this.props.signedIn}
          />);
    }

    return (
      <div className="container sign-up-form">
        <h3 className="pt-2 text-center ic-green"> {headerText} </h3>
        {formContent}
        <div className="text-center highlight">
          {this.props.errors}
        </div>
        <div className="text-center ic-green">
          {this.props.notices}
        </div>
      </div>
    );
  }
}

SignUpFormContainer.propTypes = {
  updateFormState: PropTypes.func.isRequired,
  updateErrors: PropTypes.func.isRequired,
  updateNotices: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  updateStateApplicant: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  toggleSignIn: PropTypes.func.isRequired,
  errors: PropTypes.string,
  notices: PropTypes.string,
  applicant: PropTypes.object,
  formState: PropTypes.string.isRequired,
}

export default SignUpFormContainer;



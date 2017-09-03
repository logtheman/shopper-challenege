import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';
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
    let formDetail, backgroundAgreement = "";
    if(this.props.showSignInForm){
      
    }else{
      formDetail = !this.state.completedInfo ?  
        (<ApplicantBasicInfoForm 
          submitSuccessfully={this.onSubmitBasicInfo}
        />) : null;
      backgroundAgreement = this.state.completedInfo ? 
        (<BackgroundCheckAgreement />) : null;
    }

    return (
      <div className="container sign-up-form">

          {formDetail}
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


// firstName={this.props.session.firstName}
// lastName={this.props.session.lastName}
// email={this.props.session.email}
// phone={this.props.session.phone}
// zipcode={this.props.session.zipcode}



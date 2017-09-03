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
    const payload = {session: applicantInfo}
    const response = api.createSession(payload);
    console.log("respose from server", response);

  }

  render(){
    const formDetail = !this.state.completedInfo ?  
      (<ApplicantBasicInfoForm 
        submitSuccessfully={this.onSubmitBasicInfo}
        firstName={this.props.session}
        lastName={this.props.session}
        email={this.props.session}
        phone={this.props.session}
        zipcode={this.props.session}
      />) : null;
    const backgroundAgreement = this.state.completedInfo ? 
      (<BackgroundCheckAgreement />) : null;

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



import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';
import BackgroundCheckAgreement from './BackgroundCheckAgreement';


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
  }

  render(){
    const formDetail = !this.state.completedInfo ?  
      (<ApplicantBasicInfoForm 
        submitSuccessfully={this.onSubmitBasicInfo}
      />) : (<BackgroundCheckAgreement />);

    return (
      <div className="container sign-up-form">

        <ReactCSSTransitionGroup
           transitionName="form-transition"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
         >
          {formDetail}
         </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SignUpFormContainer;



import React from 'react';
import { Button, Form } from 'reactstrap';
import PropTypes from 'prop-types';


import FormFeedbackGroup from './FormFeedbackGroup';
import { checkField } from '../common/formValidityChecks';

class ApplicantBasicInfoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      status: {},
      canProceed: false,
    }
    this.updateFieldState = this.updateFieldState.bind(this);
    this.onLeaveField = this.onLeaveField.bind(this);
    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.checkFormCompleteness = this.checkFormCompleteness.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentWillMount(){
    this.setState({canProceed: this.checkFormValidity() && this.checkFormCompleteness()});
  }

  updateFieldState(event) {
    const field = event.target.name;
    let tempApplicant = Object.assign({}, this.props.applicant);
    tempApplicant[field] = event.target.value;
    this.props.updateStateApplicant(tempApplicant);
    this.setState({canProceed: this.checkFormValidity() && this.checkFormCompleteness()});
  }

  onLeaveField(event){
    const field = event.target.name;
    let errorMessage = checkField(field, event.target.value);
    let tempError = Object.assign({}, this.state.errors);
    tempError[field] = errorMessage ? errorMessage : null;
    this.setState({errors: tempError});

    let tempStatus = Object.assign({}, this.state.status);
    tempStatus[field] = errorMessage ? "danger" : "success";
    this.setState({status: tempStatus});
    this.setState({canProceed: this.checkFormValidity() && this.checkFormCompleteness()});

  }

  checkFormValidity(){
    for(let error in this.state.errors){
      if(this.state.errors[error]){
        return false;
      }
    }
    return true;
  }

  checkFormCompleteness(){
    for(let field in this.props.applicant){
      if(this.props.applicant[field] === null){
        return false;
      }
    }
    return true;
  }

  onSubmitForm(){
    if(this.state.canProceed){
      this.props.handleSubmit(this.props.applicant);
    }
  }

  render(){
    const proceedButtonColor = this.state.canProceed  ? "active" : "";
    const buttonText = this.props.signedIn ? "Edit Info" : "Apply Now!";

    return (
      <Form className="">
        <div className="row">
          <div className="col-6">
            <FormFeedbackGroup 
              placeholder="First Name"
              name="firstName" 
              onChange={this.updateFieldState}
              onBlur={this.onLeaveField}
              defaultValue={this.props.applicant.firstName}
              feedbackText={this.state.errors.firstName}
              fieldState={this.state.status.firstName}/>
          </div>
          <div className="col-6">
            <FormFeedbackGroup 
              placeholder="Last Name"
              name="lastName" 
              onChange={this.updateFieldState}
              onBlur={this.onLeaveField}
              defaultValue={this.props.applicant.lastName}
              feedbackText={this.state.errors.lastName}
              fieldState={this.state.status.lastName}/>
          </div>
        </div>
          <FormFeedbackGroup 
            placeholder="Email"
            name="email" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            defaultValue={this.props.applicant.email}
            feedbackText={this.state.errors.email}
            fieldState={this.state.status.email}/>

          <FormFeedbackGroup 
            placeholder="415-960-1234"
            maxLength="14"
            name="phone" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            defaultValue={this.props.applicant.phone}
            feedbackText={this.state.errors.phone}
            fieldState={this.state.status.phone}/>

          <FormFeedbackGroup 
            placeholder="94107"
            maxLength="5"
            name="zipcode" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            defaultValue={this.props.applicant.zipcode}
            feedbackText={this.state.errors.zipcode}
            fieldState={this.state.status.zipcode}/>
          <div className="row mt-4">
            <div className="col-12">
              <Button 
                className={`btn-block apply-button mb-3 ${proceedButtonColor}`} 
                onClick={this.onSubmitForm}>
               {buttonText}
              </Button>
            </div>
          </div>
      </Form>
    );
  }
}

ApplicantBasicInfoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  updateStateApplicant: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  applicant: PropTypes.obj,
}


export default ApplicantBasicInfoForm;



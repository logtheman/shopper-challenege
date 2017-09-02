import React from 'react';
import { Button, Form } from 'reactstrap';

import FormFeedbackGroup from './FormFeedbackGroup';
import { checkField } from '../common/formValidityChecks';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      applicant: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        zipcode: null
      },
      errors: {},
      status: {},
      canProceed: false,

    }
    this.updateFieldState = this.updateFieldState.bind(this);
    this.onLeaveField = this.onLeaveField.bind(this);
    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.checkFormCompleteness = this.checkFormCompleteness.bind(this);
  }

  updateFieldState(event) {
    const field = event.target.name;
    let tempApplicant = Object.assign({}, this.state.applicant);
    tempApplicant[field] = event.target.value;
    this.setState({applicant: tempApplicant});

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
      console.log("this.state.errors[error]", this.state.errors[error]);
      if(this.state.errors[error]){
        return false;
      }
    }
    return true;
  }

  checkFormCompleteness(){
    for(let field in this.state.applicant){
      console.log("this.state.applicant[field]", this.state.applicant[field]);
      if(this.state.applicant[field] === null){
        return false;
      }
    }
    return true;
  }

  render(){
    const proceedButtonColor = this.state.canProceed  ? "active" : "";

    return (
      <Form className="">
        <div className="row">
          <div className="col-6">
            <FormFeedbackGroup 
              placeholder="First Name"
              name="firstName" 
              onChange={this.updateFieldState}
              onBlur={this.onLeaveField}
              feedbackText={this.state.errors.firstName}
              fieldState={this.state.status.firstName}/>
          </div>
          <div className="col-6">
            <FormFeedbackGroup 
              placeholder="Last Name"
              name="lastName" 
              onChange={this.updateFieldState}
              onBlur={this.onLeaveField}
              feedbackText={this.state.errors.lastName}
              fieldState={this.state.status.lastName}/>
          </div>
        </div>
          <FormFeedbackGroup 
            placeholder="Email"
            name="email" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            feedbackText={this.state.errors.email}
            fieldState={this.state.status.email}/>

          <FormFeedbackGroup 
            placeholder="Phone Number"
            maxLength="14"
            name="phone" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            feedbackText={this.state.errors.phone}
            fieldState={this.state.status.phone}/>

          <FormFeedbackGroup 
            placeholder="94107"
            maxLength="5"
            name="zipcode" 
            onChange={this.updateFieldState}
            onBlur={this.onLeaveField}
            feedbackText={this.state.errors.zipcode}
            fieldState={this.state.status.zipcode}/>
          <div className="row mt-4">
            <div className="col-12">
              <Button className={`btn-block apply-button mb-3 ${proceedButtonColor}`} >
                Apply Now!  
              </Button>
            </div>
          </div>
      </Form>
    );
  }
}

export default SignUpForm;



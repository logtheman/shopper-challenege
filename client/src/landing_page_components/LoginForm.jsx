import React from 'react';

import FormFeedbackGroup from './FormFeedbackGroup';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: null,
      error: null,
      state: null,
    }
  }

  updateFieldState(event) {
    this.setState({email: event.target.value});

    this.setState({canProceed: this.checkFormValidity() && this.checkFormCompleteness()});
  }

  onLeaveField(event){
    const field = event.target.name;
    let errorMessage = checkField("email", event.target.value);
    this.setState({
      errors: errorMessage,
      state: errorMessage ? "danger" : "success",
    });

    this.setState({canProceed: this.checkFormValidity() && this.checkFormCompleteness()});

  }

  render(){
    return(
      <FormFeedbackGroup 
        placeholder="Email"
        name="email" 
        onChange={this.updateFieldState}
        onBlur={this.onLeaveField}
        defaultValue={this.state.email}
        feedbackText={this.state.error}
        fieldState={this.state.state}/>
    );
  }
}

export default LoginForm;
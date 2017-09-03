import React from 'react';
import { Button} from 'reactstrap';
import PropTypes from 'prop-types';


import FormFeedbackGroup from './FormFeedbackGroup';
import { checkField } from '../common/formValidityChecks';
import * as formState from '../common/FormStateTypes';


class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: null,
      error: null,
      state: null,
    }
    this.updateFieldState = this.updateFieldState.bind(this);
    this.onLeaveField = this.onLeaveField.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);
    this.onBackButton = this.onBackButton.bind(this);
  }

  updateFieldState(event) {
    let errorMessage = checkField("email", event.target.value);
    this.setState({
      email: event.target.value,
      canProceed: errorMessage ? true : false,
    });
  }

  onLeaveField(event){
    let errorMessage = checkField("email", event.target.value);
    this.setState({
      error: errorMessage,
      state: errorMessage ? "danger" : "success",
      canProceed: errorMessage ? true : false,
    });
  }

  onHandleLogin(){
    if(!this.state.error){
      this.props.handleLogin(this.state.email);
    }
  }

  onBackButton(){
    this.props.updateFormState(formState.SHOW_BASIC_INFO);
  }

  render(){
    const proceedButtonColor = this.state.canProceed  ? "active" : "";
    return(
      <div>
        <FormFeedbackGroup 
          placeholder="Email"
          name="email" 
          onChange={this.updateFieldState}
          onBlur={this.onLeaveField}
          defaultValue={this.state.email}
          feedbackText={this.state.error}
          fieldState={this.state.state}
        />

        <div className="row mt-4">
          <div className="col-12">
            <Button 
              className={`btn-block apply-button mb-3 ${proceedButtonColor}`} 
              onClick={this.onHandleLogin}>
             Login
            </Button>
            <Button 
              color="default"
              className="btn-block mb-3" 
              onClick={this.onBackButton}>
             Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  updateFormState: PropTypes.func.isRequired,
}

export default LoginForm;
import React from 'react';
import { Button} from 'reactstrap';

import FormFeedbackGroup from './FormFeedbackGroup';
import { checkField } from '../common/formValidityChecks';


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

  render(){
    const proceedButtonColor = this.state.canProceed  ? "active" : "";

    return(
      <div>
        <h3 className="pt-2 text-center"> Sign In </h3>
        <FormFeedbackGroup 
          placeholder="Email"
          name="email" 
          onChange={this.updateFieldState}
          onBlur={this.onLeaveField}
          defaultValue={this.state.email}
          feedbackText={this.state.error}
          fieldState={this.state.state}/>

        <div className="row mt-4">
          <div className="col-12">
            <Button 
              className={`btn-block apply-button mb-3 ${proceedButtonColor}`} 
              onClick={this.onHandleLogin}>
             Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
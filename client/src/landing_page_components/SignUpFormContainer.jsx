import React from 'react';

import ApplicantBasicInfoForm from './ApplicantBasicInfoForm';


class SignUpFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){

    return (
      <div className="container sign-up-form">
        <ApplicantBasicInfoForm />
      </div>
    );
  }
}

export default SignUpFormContainer;



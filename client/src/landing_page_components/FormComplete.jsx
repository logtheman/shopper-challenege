import React from 'react';
import { Button, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import * as formState from '../common/FormStateTypes';


const FormComplete = props => {

  function onClickReviewApp(){
    props.updateFormState(formState.SHOW_BASIC_INFO);
  }

  return (
    <div className="pt-2">
      <div className="text-center pb-2">
        <h2 className="ic-green"> Application Submitted!</h2>
      </div>
      <div className="container"> 
      We will be reviewing your application and reach out to you to setup an in person training in the next 3-5 business days.
      <br /><br />
      You can go back and edit your applicatio or close this window at this time.

      </div>
      <Form>
        <div className="row mt-3">
          <div className="col-12">
            <Button 
              color="success"
              className="btn-block mb-3"
              onClick={onClickReviewApp}>
              Review Application
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

FormComplete.propTypes = {
  updateFormState: PropTypes.func.isRequired,
}

export default FormComplete;
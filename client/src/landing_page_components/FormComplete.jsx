import React from 'react';
import { Button, Form } from 'reactstrap';

const FormComplete = props => {
  return (
    <div className="pt-2">
      <div className="text-center pb-2">
        <h2> Application Submitted!</h2>
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
              color="default"
              className="btn-block mb-3"
              onClick={props.toggleShowComplete}>
              See Application
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default FormComplete;
import React from 'react';
import { Button, Form } from 'reactstrap';


const BackgroundCheckAgreement =  props => {
  return (
    <div className="pt-2">
      <div className="text-center pb-2">
        <h2> Agree to Background Check</h2>
      </div>
      <div className="container"> 
      I hereby authorize Instacart to investigate my background and 
      qualifications for purposes of evaluating whether I am qualified for the position as an Instacart Shopper.

      I also understand that I am providing Instacart permission to conduct this investigation or contract a third party to do so for them.

      </div>
      <Form>
        <div className="row mt-3">
          <div className="col-6">
            <Button 
              color="success"
              className="btn-block mb-3">
              Authorize 
            </Button>
          </div>
          <div className="col-6">
            <Button 
              color="default"
              className="btn-block mb-3">
              Back
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default BackgroundCheckAgreement;
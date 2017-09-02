import React from 'react';
import { Button, Form } from 'reactstrap';


const BackgroundCheckAgreement =  props => {
  return (
    <div>
      <div className="text-center">
        <h2> Agree to Background Check</h2>
      </div>
      <div className="container"> 
        In order to ensure Instacart customers recieve the highest quality service, Instacart requires background
        checks for all of its shoppers. 

        Please confirm that you agree to allow Instacart to run a background check:
      </div>
      <Form>
        <div className="row mt-3">
          <div className="col-6">
            <Button 
              color="success"
              className="btn-block mb-3">
              Agree  
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
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback} from 'reactstrap';


const FormFeedbackGroup = ({name, fieldState, feedbackText, label, defaultValue, value, placeholder, maxLength, onChange, onBlur}) => {

  return(
    <FormGroup color={fieldState}>
      <Label htmlFor={name}>{label}</Label>
      <Input 
        name={name}
        state={fieldState} 
        maxLength={maxLength}
        placeholder={placeholder} 
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
      <FormFeedback>{feedbackText}</FormFeedback>
    </FormGroup>
  );
}

FormFeedbackGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  feedbackText: PropTypes.string,
  fieldState: PropTypes.string,
  maxLength: PropTypes.string,
};

export default FormFeedbackGroup;
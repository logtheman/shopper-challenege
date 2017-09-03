import * as utils from './apiUtils';


export function createApplicant(payload){
  utils.post('/applicants', payload).then(() => {
    return "Successfully Submitted";
  }).catch(error => {
    return `There has been an error: ${error}`;
  });
}

export function createSession(payload){
  utils.post('/login', payload).then(applicant => {
    return applicant;
  }).catch(error => {
    return `There has been an error: ${error}`;
  });
}

export function getSession(){
  utils.get('/login').then(applicant => {
    return applicant;
  }).catch(error => {
    return `There has been an error: ${error}`;
  });
}
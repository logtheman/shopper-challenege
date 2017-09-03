import * as utils from './apiUtils';


export function createApplicant(payload){
  utils.post('/applicants', payload).then(response => {
    if(response.status !== 200 || response.status !== 204){
      console.log("unable to create applicant:", response);
      return false;
    }
    return true
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
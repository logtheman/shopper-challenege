import * as utils from './apiUtils';


export function createApplicant(payload){
  utils.post('/applicants', payload).then(response => {
    console.log("response", response);
    return response;
  });
}

export function editApplicant(payload){
  console.log("editApplicant api call", payload);
  utils.put(`/applicants/${payload.applicant.id}`, payload).then(response => {
    return response;
  });
}

export function createSession(payload){
  utils.post('/login', payload).then(applicant => {
    return applicant;
  }).catch(error => {
    return `There has been an error: ${error}`;
  });
}

export function deleteSession(){
  utils.deleteRequest('/logout').then(response => {
    return response;
  });
}

export function getSession(){
  utils.get('/login').then(applicant => {
    return applicant;
  }).catch(error => {
    return `There has been an error: ${error}`;
  });
}
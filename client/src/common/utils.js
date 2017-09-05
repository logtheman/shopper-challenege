
export function applicantNameJStoRuby(applicantInfo){
  const returnObj ={
    applicant: {
      id: applicantInfo.id,
      first_name: applicantInfo.firstName,
      last_name: applicantInfo.lastName,
      phone: applicantInfo.phone,
      email: applicantInfo.email,
      zip_code: applicantInfo.zipcode,
      agree_background: applicantInfo.agree_background,
    }
  }
  return returnObj;
}


export function applicantNameRubyToJs(applicantInfo){
  const returnObj ={
      id: applicantInfo.id,
      firstName: applicantInfo.first_name,
      lastName: applicantInfo.last_name,
      phone: applicantInfo.phone,
      email: applicantInfo.email,
      zipcode: applicantInfo.zip_code,
      agree_background: applicantInfo.agree_background,
  }
  return returnObj;
}

export function saveApplicantToSession(applicant, source){
  sessionStorage.setItem("id", applicant.id);
  sessionStorage.setItem("firstName", applicant.first_name)
  sessionStorage.setItem("lastName", applicant.last_name);
  sessionStorage.setItem("phone", applicant.phone);
  sessionStorage.setItem("email", applicant.email);
  sessionStorage.setItem("signedIn", true);
  sessionStorage.setItem("agree_background", applicant.agree_background);
  if(source === "server"){
    sessionStorage.setItem("firstName", applicant.first_name)
    sessionStorage.setItem("lastName", applicant.last_name);
    sessionStorage.setItem("zipcode", applicant.zip_code);
  }else{
    sessionStorage.setItem("firstName", applicant.firstName)
    sessionStorage.setItem("lastName", applicant.lastName);
    sessionStorage.setItem("zipcode", applicant.zipcode);
  }

}

export function getApplicantFromSession(applicant){
  return {
  id: sessionStorage.getItem("id") ? sessionStorage.getItem("id") : null,
    firstName: sessionStorage.getItem("firstName") ? sessionStorage.getItem("firstName") : null,
    lastName: sessionStorage.getItem("lastName") ? sessionStorage.getItem("lastName") : null,
    phone: sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") : null,
    email: sessionStorage.getItem("email") ? sessionStorage.getItem("email") : null,
    zipcode: sessionStorage.getItem("zipcode") ? sessionStorage.getItem("zipcode") : null,
    agree_background: sessionStorage.getItem("agree_background") ? sessionStorage.getItem("agree_background") :  false,
  }
}
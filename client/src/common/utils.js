
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
  console.log("applicantNameJStoRuby", returnObj);
  return returnObj;
}


export function applicantNameRubyToJs(applicantInfo){
  const returnObj ={
      id: applicantInfo.id,
      firstName: applicantInfo.first_name,
      lastName: applicantInfo.last_name,
      phone: applicantInfo.phone,
      email: applicantInfo.email,
      zipCode: applicantInfo.zip_code,
      agree_background: applicantInfo.agree_background,
  }
  console.log("applicantNameRubyToJs", returnObj);
  return returnObj;
}
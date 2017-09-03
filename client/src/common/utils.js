
export function applicantNameJStoRuby(applicantInfo){
  return {
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
}
class ApplicationController < ActionController::API

  private
  
    def current_applicant
      @_current_applicant ||= session[:email] &&
        Applicant.find_by(email: session[:email])
    end
end

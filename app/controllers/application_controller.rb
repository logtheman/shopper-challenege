class ApplicationController < ActionController::API

  private
  
    def current_applicant
      @current_applicant ||= session[:email] &&
        Applicant.find_by(email: session[:email])
    end
end

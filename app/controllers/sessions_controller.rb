class SessionsController < ApplicationController

  def new
    applicant = Applicant.find_by(email: params[:email])
    if applicant
      session[:email] = applicant.email
      render json: applicant
    else
      render json: {message: "No applicant with this email exist"}
    end
  end

  def create
  end

  def destroy
    session[:email] = nil
    render json: {message: "Successfully logged out"}
  end

end

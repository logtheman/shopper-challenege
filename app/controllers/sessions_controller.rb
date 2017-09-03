class SessionsController < ApplicationController

  def new
    applicant = Applicant.find_by(email: params[:email])
    binding.pry
    if applicant
      session[:email] = applicant.email
      render json: applicant
    else
      render json: {message: "No information avaliable"}
    end
  end

  def create
  end

  def destroy
  end

  private

  def email
    @email ||= params[:email]
  end

end

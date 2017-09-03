class SessionsController < ApplicationController

  def new
      session[:email] = params[:email]
  end

  def get
    
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

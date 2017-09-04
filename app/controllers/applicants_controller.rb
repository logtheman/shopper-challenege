class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:update, :edit, :delete]


  def create
    @applicant = Applicant.new(applicant_params)
    if @applicant.save
      session[:applicant_email] = @applicant.email
      render json: @applicant
    else
      render json: @applicant.errors
    end
  end

  def new
  end

  def update
    if @applicant.update(applicant_params)
      render json: @applicant
    else
      render json: @applicant.errors
    end
  end

  def edit
    @applicant = current_applicant
  end

  def delete
  end

  def index
    render json: Applicant.all
  end

  def check_email
    email_found = Applicant.where(email: params[:email]).count > 0 #Whatever your logic is to find duplicate emails
    if email_found 
      message = "Email already registered. Please Login"
      status = 1
    else
      status = 0
    end
    render json: {status: status, message: message, }
  end

  private
    def set_applicant
      @applicant ||= begin
        applicant = params[:id] ? Applicant.find(params[:id]) : Applicant.new
      end
    end

    def applicant_params
      params.required(:applicant).permit(:id, :first_name, :last_name, :email, :phone, :zip_code, :agree_background, :region, :phone_type, :source, :over_21)
    end

end

class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:update, :edit, :delete]


  def create
    @applicant = Applicant.new(applicant_params)
    if @applicant.save
      session[:applicant_email] = @applicant.email
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

  private
    def set_applicant
      @applicant ||= begin
        applicant = params[:id] ? Applicant.find(params[:id]) : Applicant.new
      end
    end

    def applicant_params
      params.required(:applicant).permit(:id, :first_name, :last_name, :email, :phone, :zip_code, :region, :phone_type, :source, :over_21)
    end

end

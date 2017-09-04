class Applicant < ApplicationRecord
  validates :email, :presence => true, :uniqueness => true
end

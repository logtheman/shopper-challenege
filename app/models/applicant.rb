class Applicant < ApplicationRecord


  def self.start_after(date)
    where('week >= date')
  end

  def self.end_before(date)
    where('week >= date')
  end

  def week
    self.created_at.beginning_of_week.strftime('%Y-%m-%d')
  end
end

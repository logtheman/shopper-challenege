class AddBackgroundCheckAgreedToApplicant < ActiveRecord::Migration[5.0]
  def change
    add_column :applicants, :agree_background, :boolean, default: false
  end
end

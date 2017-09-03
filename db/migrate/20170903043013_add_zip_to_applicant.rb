class AddZipToApplicant < ActiveRecord::Migration[5.0]
  def change
    add_column :applicants, :zip_code, :string

  end
end

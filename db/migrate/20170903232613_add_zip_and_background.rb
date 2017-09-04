class AddZipAndBackground < ActiveRecord::Migration[5.0]
  def change
    add_column :applicants, :zip_code, :string
    add_column :applicants, :agree_background, :boolean, default: false
    add_index :applicants, :email

  end
end

class MakeEmailUnique < ActiveRecord::Migration[5.0]
  def change
    remove_index :applicants, :email
    add_index :applicants, :email, unique: true
  end
end

class AddUniquenessContraintToApplicantEmail < ActiveRecord::Migration[5.0]
  def change
    add_index :applicants, :email, unique: true
  end
end

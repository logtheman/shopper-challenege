class CreateApplicants < ActiveRecord::Migration[5.0]
  def change
    create_table :applicants do |t|
      t.string   :first_name
      t.string   :last_name
      t.string   :region
      t.string   :phone
      t.string   :email
      t.string   :phone_type
      t.string   :source
      t.boolean  :over_21
      t.text     :reason
      t.string   :workflow_state
      t.string   :zip_code
      t.boolean  :agree_background, default: false
      t.index :email, name: "index_applicants_on_email"


      t.timestamps
    end
  end
end

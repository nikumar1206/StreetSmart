class Addingdescription < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :description, :text, null: false, default: ""
    add_column :users, :realtor, :boolean, default: false
  end
end

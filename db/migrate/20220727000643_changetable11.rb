class Changetable11 < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :amenities, :string, array:true,  default: []
    remove_column :users, :first_name
    remove_column :users, :last_name
  end
end

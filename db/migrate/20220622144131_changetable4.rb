class Changetable4 < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :realtor_id, :lister_id
    add_column :listings, :lat, :float
    add_column :listings, :lng, :float
  end
end

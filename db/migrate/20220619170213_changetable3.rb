class Changetable3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :own
    remove_column :listings, :rent
  end
end

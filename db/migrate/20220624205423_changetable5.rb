class Changetable5 < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :rent_bool, :boolean, default: false
  end
end

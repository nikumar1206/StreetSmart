class Changetable7 < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :saves, :integer, default: 0
  end
end

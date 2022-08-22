class Changetable13 < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :save_count
    drop_table :favorites
  end
end

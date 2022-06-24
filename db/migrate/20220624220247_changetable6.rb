class Changetable6 < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :borough, :string, default: "Queens"
  end
end

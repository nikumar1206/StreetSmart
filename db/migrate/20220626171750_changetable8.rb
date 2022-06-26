class Changetable8 < ActiveRecord::Migration[5.2]
  def change
    rename_column :saves, :lister_id, :user_id
  end
end

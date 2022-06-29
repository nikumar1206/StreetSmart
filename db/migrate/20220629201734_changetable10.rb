class Changetable10 < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :saves, :save_count
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end

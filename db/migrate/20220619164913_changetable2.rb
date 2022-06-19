class Changetable2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :type, :property_type
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end

class Changeusertable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_index :users, :first_name
    add_index :users, :last_name
  end
end

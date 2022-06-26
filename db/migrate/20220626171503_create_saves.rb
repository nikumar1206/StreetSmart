class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :listing_id, null: false
      t.integer :lister_id, null: false

      t.timestamps
    end
    add_index :saves, :listing_id
    add_index :saves, :lister_id
    add_index :saves, [:lister_id, :listing_id]
  end
end

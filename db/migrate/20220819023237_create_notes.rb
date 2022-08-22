class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :body

      t.timestamps
    end
    add_index :notes, [:user_id, :listing_id]
  end
end

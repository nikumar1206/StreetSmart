class CreateSavedListings < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_listings do |t|
      t.integer :saver_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
  end
end

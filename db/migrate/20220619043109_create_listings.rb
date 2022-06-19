class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false 
      t.string :location, null: false
      t.string :neighborhood, null: false
      t.integer :zip, null: false
      t.integer :price, null: false
      t.boolean :rent, null: false
      t.boolean :own, null: false
      t.string :type
      t.integer :realtor_id, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false

      t.timestamps
    end
    add_index :listings, :name, unique: true
    add_index :listings, :location, unique: true
  end
end

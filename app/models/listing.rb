class Listing < ApplicationRecord
    validates :name, :location, :neighborhood, :zip, :realtor_id, :price, :beds, :baths, presence: true

end

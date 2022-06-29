@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :name, :location, :neighborhood, :rent_bool, :saves, :borough, :zip, :price, :property_type, :lister_id, :beds, :baths, :lat, :lng, :description
        json.imageUrl url_for(listing.photo) if listing.photo.attached?
        # json.lister do
        # json.extract! listing.lister, :email, :name, :phone
    end
end

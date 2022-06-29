@listings.each do |listing|
    json.set! listing.id do
        json.partial! "/api/listings/listing", listing: listing
        json.imageUrl url_for(listing.photo) if listing.photo.attached?
        # json.lister do
        # json.extract! listing.lister, :email, :name, :phone
    end
end

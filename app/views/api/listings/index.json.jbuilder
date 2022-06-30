@listings.each do |listing|
    json.set! listing.id do
        json.partial! "/api/listings/listing", listing: listing
        json.imageUrl url_for(listing.photo) if listing.photo.attached?
        json.saved listing.saved?(current_user) if logged_in?
        json.lister do
            json.extract! listing.lister, :email, :name, :phone
        end
    end
end

@listings.each do |listing|
    json.set! listing.id do
        json.partial! "listing", listing: listing
        json.imageUrl url_for(listing.photo) if listing.photo.attached?
    end
end
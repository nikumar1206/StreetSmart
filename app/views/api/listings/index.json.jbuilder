@listings.each do |listing|
    listing.set! listing.id do
        json.partial! "listing", listing: listing
    end
end
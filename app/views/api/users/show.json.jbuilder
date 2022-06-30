json.partial! "api/users/user", user: @user
# json.listings do
#     json.extract! @user.listings, :id, :name, :location, :neighborhood, :rent_bool, :saves, :borough, :zip, :price, :property_type, :lister_id, :beds, :baths, :lat, :lng, :description
# end


saved_listings_arr = []

@user.saved_listings.each do |listing|
    saved_listings_arr << listing.id
end

json.saved_listings =  saved_listings_arr
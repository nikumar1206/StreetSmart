if logged_in?
    user_note = @listing.user_note(current_user) # stores user note to avoid quering twice
end


json.extract! @listing, :id, :name, :location, :neighborhood, :zip, :price, :rent_bool, :borough, :property_type, :lister_id, :beds, :baths, :lat, :lng, :description, :amenities
json.imageUrl url_for(@listing.photo) if @listing.photo.attached?
json.saved @listing.saved?(current_user) if current_user
json.note user_note.body if user_note
json.noteId user_note.id if user_note
json.numSaves @listing.number_of_saves
json.lister do
    json.extract! @listing.lister, :email, :name, :phone
end
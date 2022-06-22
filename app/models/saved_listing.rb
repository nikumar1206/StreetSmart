class SavedListing < ApplicationRecord
    validates :saver_id, :listing_id, presence: true
    
    # validates :saver_id, presence: true, uniqueness: { scope: :listing_id, 
#   message: "Only one reservation at a time is permitted"}

    belongs_to :user, foreign_key: "saver_id"
    belongs_to :listing, foreign_key: "listing_id"
end

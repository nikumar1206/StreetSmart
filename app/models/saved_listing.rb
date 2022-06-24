# == Schema Information
#
# Table name: saved_listings
#
#  id         :bigint           not null, primary key
#  saver_id   :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SavedListing < ApplicationRecord
    validates :saver_id, :listing_id, presence: true

    belongs_to :user, foreign_key: "saver_id"
    belongs_to :listing, foreign_key: "listing_id"

end

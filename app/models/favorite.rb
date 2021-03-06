# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  listing_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :user_id, uniqueness: { scope: :listing_id }
    belongs_to :favoriter, class_name: "user", foreign_key: "user_id"
    belongs_to :listing, class_name: "Listing", foreign_key: "listing_id"
end

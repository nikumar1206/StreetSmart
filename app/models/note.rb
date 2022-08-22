# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  listing_id :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Note < ApplicationRecord
    validates :user_id, :listing_id, presence: true
    belongs_to :listing, class_name: "Listing", foreign_key: "listing_id"
    belongs_to :user, class_name: "User", foreign_key: "user_id"
end

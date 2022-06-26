# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  location      :string           not null
#  neighborhood  :string           not null
#  zip           :integer          not null
#  price         :integer          not null
#  property_type :string
#  lister_id     :integer          not null
#  beds          :integer          not null
#  baths         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  lat           :float
#  lng           :float
#  description   :text             default(""), not null
#  rent_bool     :boolean          default(FALSE)
#  borough       :string           default("Queens")
#  saves         :integer          default(0)
#
class Listing < ApplicationRecord
    validates :name, :location, :neighborhood, :borough, :zip, :lister_id, :price, :beds, :baths, presence: true

    belongs_to :user, foreign_key: "lister_id"
    # has_many :saves, class_name: "Save", foreign_key: "listing_id"
    # has_many :favorites, class_name: "Favorite", foreign_key: "listing_id"

    has_one_attached :photo
end

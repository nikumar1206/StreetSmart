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
#
class Listing < ApplicationRecord
    validates :name, :location, :neighborhood, :borough, :zip, :lister_id, :price, :beds, :baths, presence: true

    belongs_to :user, foreign_key: "lister_id"

    has_one_attached :photo
end

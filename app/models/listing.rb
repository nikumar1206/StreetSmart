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
#  save_count    :integer          default(0)
#
class Listing < ApplicationRecord
    validates :name, :location, :neighborhood, :borough, :zip, :lister_id, :price, :beds, :baths, presence: true
    validates :name, uniqueness: true

    belongs_to :lister, class_name: "User", foreign_key: "lister_id"
    has_many :saves, class_name: "Save", foreign_key: "listing_id"


    has_one_attached :photo

    def saved?(user)
        !!self.saves.find{ |save| save.user_id == user.id }
    end


end

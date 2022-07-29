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
#  amenities     :string           default([]), is an Array
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

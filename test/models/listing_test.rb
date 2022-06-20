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
#  realtor_id    :integer          not null
#  beds          :integer          not null
#  baths         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

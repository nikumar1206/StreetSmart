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
require 'test_helper'

class SavedListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

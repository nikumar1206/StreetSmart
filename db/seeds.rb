# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

Listing.destroy_all
User.destroy_all
SavedListing.destroy_all

user1 = User.create!({ name:"Demo User", phone:"555-555-555", email: "demo_user@demo.com", password: "password"})


nyc_data = {
    'Bronx' => [
      ['Central Bronx', '10453'],
      ['Central Bronx', '10457'],
      ['Central Bronx', '10460'],
      ['Bronx Park and Fordham', '10458'],
      ['Bronx Park and Fordham', '10467'],
      ['Bronx Park and Fordham', '10468'],
      ['High Bridge and Morrisania', '10451'],
      ['High Bridge and Morrisania', '10452'],
      ['High Bridge and Morrisania', '10456'],
      ['Hunts Point and Mott Haven', '10454'],
      ['Hunts Point and Mott Haven', '10455'],
      ['Hunts Point and Mott Haven', '10459'],
      ['Hunts Point and Mott Haven', '10474'],
      ['Kingsbridge and Riverdale', '10463'],
      ['Kingsbridge and Riverdale', '10471'],
      ['Northeast Bronx', '10466'],
      ['Northeast Bronx', '10469'],
      ['Northeast Bronx', '10470'],
      ['Northeast Bronx', '10475'],
      ['Southeast Bronx', '10461'],
      ['Southeast Bronx', '10462'],
      ['Southeast Bronx', '10464'],
      ['Southeast Bronx', '10465'],
      ['Southeast Bronx', '10472'],
      ['Southeast Bronx', '10473']
    ], 'Manhattan' => [
      ['Central Harlem', '10026'],
      ['Central Harlem', '10027'],
      ['Central Harlem', '10030'],
      ['Central Harlem', '10037'],
      ['Central Harlem', '10039'],
      ['Chelsea and Clinton', '10001'],
      ['Chelsea and Clinton', '10011'],
      ['Chelsea and Clinton', '10018'],
      ['Chelsea and Clinton', '10019'],
      ['Chelsea and Clinton', '10020'],
      ['Chelsea and Clinton', '10036'],
      ['East Harlem', '10029'],
      ['East Harlem', '10035'],
      ['Gramercy Park and Murray Hill', '10010'],
      ['Gramercy Park and Murray Hill', '10016'],
      ['Gramercy Park and Murray Hill', '10017'],
      ['Gramercy Park and Murray Hill', '10022'],
      ['Greenwich Village and Soho', '10012'],
      ['Greenwich Village and Soho', '10013'],
      ['Greenwich Village and Soho', '10014'],
      ['Lower Manhattan', '10004'],
      ['Lower Manhattan', '10005'],
      ['Lower Manhattan', '10006'],
      ['Lower Manhattan', '10007'],
      ['Lower Manhattan', '10038'],
      ['Lower Manhattan', '10280'],
      ['Lower East Side', '10002'],
      ['Lower East Side', '10003'],
      ['Lower East Side', '10009'],
      ['Upper East Side', '10021'],
      ['Upper East Side', '10028'],
      ['Upper East Side', '10044'],
      ['Upper East Side', '10065'],
      ['Upper East Side', '10075'],
      ['Upper East Side', '10128'],
      ['Upper West Side', '10023'],
      ['Upper West Side', '10024'],
      ['Upper West Side', '10025'],
      ['Inwood and Washington Heights', '10031'],
      ['Inwood and Washington Heights', '10032'],
      ['Inwood and Washington Heights', '10033'],
      ['Inwood and Washington Heights', '10034'],
      ['Inwood and Washington Heights', '10040']
    ], 'Brooklyn' => [
      ['Central Brooklyn', '11212'],
      ['Central Brooklyn', '11213'],
      ['Central Brooklyn', '11216'],
      ['Central Brooklyn', '11233'],
      ['Central Brooklyn', '11238'],
      ['Southwest Brooklyn', '11209'],
      ['Southwest Brooklyn', '11214'],
      ['Southwest Brooklyn', '11228'],
      ['Borough Park', '11204'],
      ['Borough Park', '11218'],
      ['Borough Park', '11219'],
      ['Borough Park', '11230'],
      ['Canarsie and Flatlands', '11234'],
      ['Canarsie and Flatlands', '11236'],
      ['Canarsie and Flatlands', '11239'],
      ['Southern Brooklyn', '11223'],
      ['Southern Brooklyn', '11224'],
      ['Southern Brooklyn', '11229'],
      ['Southern Brooklyn', '11235'],
      ['Northwest Brooklyn', '11201'],
      ['Northwest Brooklyn', '11205'],
      ['Northwest Brooklyn', '11215'],
      ['Northwest Brooklyn', '11217'],
      ['Northwest Brooklyn', '11231'],
      ['Flatbush', '11203'],
      ['Flatbush', '11210'],
      ['Flatbush', '11225'],
      ['Flatbush', '11226'],
      ['East New York and New Lots', '11207'],
      ['East New York and New Lots', '11208'],
      ['Greenpoint', '11211'],
      ['Greenpoint', '11222'],
      ['Sunset Park', '11220'],
      ['Sunset Park', '11232'],
      ['Bushwick and Williamsburg', '11206'],
      ['Bushwick and Williamsburg', '11221'],
      ['Bushwick and Williamsburg', '11237']
    ], 'Queens' => [
      ['Northeast Queens', '11361'],
      ['Northeast Queens', '11362'],
      ['Northeast Queens', '11363'],
      ['Northeast Queens', '11364'],
      ['North Queens', '11354'],
      ['North Queens', '11355'],
      ['North Queens', '11356'],
      ['North Queens', '11357'],
      ['North Queens', '11358'],
      ['North Queens', '11359'],
      ['North Queens', '11360'],
      ['Central Queens', '11365'],
      ['Central Queens', '11366'],
      ['Central Queens', '11367'],
      ['Jamaica', '11412'],
      ['Jamaica', '11423'],
      ['Jamaica', '11432'],
      ['Jamaica', '11433'],
      ['Jamaica', '11434'],
      ['Jamaica', '11435'],
      ['Jamaica', '11436'],
      ['Northwest Queens', '11101'],
      ['Northwest Queens', '11102'],
      ['Northwest Queens', '11103'],
      ['Northwest Queens', '11104'],
      ['Northwest Queens', '11105'],
      ['Northwest Queens', '11106'],
      ['West Central Queens', '11374'],
      ['West Central Queens', '11375'],
      ['West Central Queens', '11379'],
      ['West Central Queens', '11385'],
      ['Rockaways', '11691'],
      ['Rockaways', '11692'],
      ['Rockaways', '11693'],
      ['Rockaways', '11694'],
      ['Rockaways', '11695'],
      ['Rockaways', '11697'],
      ['Southeast Queens', '11004'],
      ['Southeast Queens', '11005'],
      ['Southeast Queens', '11411'],
      ['Southeast Queens', '11413'],
      ['Southeast Queens', '11422'],
      ['Southeast Queens', '11426'],
      ['Southeast Queens', '11427'],
      ['Southeast Queens', '11428'],
      ['Southeast Queens', '11429'],
      ['Southwest Queens', '11414'],
      ['Southwest Queens', '11415'],
      ['Southwest Queens', '11416'],
      ['Southwest Queens', '11417'],
      ['Southwest Queens', '11418'],
      ['Southwest Queens', '11419'],
      ['Southwest Queens', '11420'],
      ['Southwest Queens', '11421'],
      ['West Queens', '11368'],
      ['West Queens', '11369'],
      ['West Queens', '11370'],
      ['West Queens', '11372'],
      ['West Queens', '11373'],
      ['West Queens', '11377'],
      ['West Queens', '11378']
    ], 'Staten Island' => [
      ['Port Richmond', '10302'],
      ['Port Richmond', '10303'],
      ['Port Richmond', '10310'],
      ['South Shore', '10306'],
      ['South Shore', '10307'],
      ['South Shore', '10308'],
      ['South Shore', '10309'],
      ['South Shore', '10312'],
      ['Stapleton and St. George', '10301'],
      ['Stapleton and St. George', '10304'],
      ['Stapleton and St. George', '10305'],
      ['Mid-Island', '1031']
    ]
  }
PROPERTY_TYPE = %w(townhouse condo penthouse apartment single-family\ house multi-family\ house)
BOROUGHS = %w(Manhattan Queens Brooklyn Staten\ Island Bronx)

BEDS = [
  1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 4, 5
]

BATHS = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1.5, 1.5,
  2, 2, 2,
  2.5, 3, 4
]

i = 1
10.times do
    name = Faker::Address.street_address
    borough = BOROUGHS.sample()
    bor_zip = nyc_data[borough].sample()
    neighborhood = bor_zip[0]
    zip = bor_zip[1]
    property_type = PROPERTY_TYPE.sample()
    realtor = 1
    price = rand(2..100) * 50000
    beds = BEDS.sample()
    baths = BATHS.sample()
    address = "#{name}, #{borough}, New York, #{zip}"
    description = "This absolutely gorgeous #{property_type} situated in #{borough} features #{beds} bedrooms and #{baths} bathrooms. Separate room for home office for the perfect work from home lifestyle. This is THE best #{beds} bed #{property_type} in #{neighborhood}! All for only $#{price}!!"
    new_listing = Listing.create!({
        name: name, 
        location: address, 
        neighborhood: neighborhood,
        borough: borough,
        zip: zip, 
        property_type: property_type,
        rent_bool: [true, false].sample(),
        lister_id: realtor,
        lat: rand(40.666885..40.740644),
        lng: -rand(73.765498..73.966863),
        beds: beds,
        saves: 0,
        baths: baths,
        price: price,
        description: description
        })
    image = URI.open("https://streetsmart-safeassets.s3.amazonaws.com/listing_seed/listing#{i}.jpg")
    new_listing.photo.attach(io: image, filename: "listing#{i}")
    i += 1
end

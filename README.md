# StreetSmart

## Overview
Welcome to StreetSmart, a comprehensive, full-stack clone of the real-estate search engine StreetEasy. Users are able to browse listings, filter for amenities, and toggle between properties listed as rentals or for sale. Users may also create, edit, and save listings to their own profile!

[Check it out!](http://streetsmart1.herokuapp.com/)

## Main Features
### User Authentication
  * Users can login and signup, however being logged in is not required to browse listings. 
### Listings
  * Users may browse properties all across NYC!
  * Listings created by the user my also be edited and deleted.
  * Listings may be filtered by amenities, # of beds, baths, and price.
### Profile
  * Users may see and edit the information (except for their email) StreetSmart holds.
  * Users may see their created listings and saved listings.
 
## Technologies
### Frontend: React and Redux
StreetSmart's frontend is built primarily using React 18 with Hooks. Redux was used to manage the application's global state.
### Backend: Ruby on Rails, PostgreSQL
RoR was used to send JSON data back to the frontend from the PostgresQL database. Ruby on Rails also allowed making advanced SQL queries easier using the Active Record Query Interface and avoiding the N+1 Query problem.
### Google Maps API
In order to show the location of the listings, Google Maps API was used to render a dynamic map in which users can see information about local food places and nearby public transportation.
### Other notable Frameworks/Libraries/Gems implemented
  * AWS S3
  * ReactRouter
  * JBuilder
  * Faker
  * Figaro
  * BCrypt
 
### Main Features
* none of my main features are done 
### Future Features
  * Upload multiple photos
  * Track user-specific search history
  * Implement Geocoding API, for better Google Maps API integration

## Design Docs
[Link to Docs](https://github.com/nikumar1206/StreetSmart/wiki)

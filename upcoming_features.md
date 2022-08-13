<!-- upcoming features for this project -->

### Soon to be added:

- Media-screen rules for better device compatability.
  - These will be added overtime
- Price fields should auto-add a dollar sign ($)
- replace the current default google icon for users
- Rails active-storage takes forever to show images on first load.
- BreadCrumb can use better styling and icons.

### Further in the future:

- Add Notes to listings
  - Each user gets to place a max of 1 note per listing
  - Will be a separate component under listing description
  - will be a joins table in the database
- Allow users to upload images of themselves.
- Upload multiple photos for a listing and have a carousel on listing show page.
- Track user-specific search history

### Re-factoring:

- Currently, amenities (and honestly all of search) are passed in a very jank method in params.
  - need better way of sharing data between just 2 components (redux seems overkill)
  * looking at the useContext hook to replace this
- Many components need to have their logic abstracted away so components make more sense.

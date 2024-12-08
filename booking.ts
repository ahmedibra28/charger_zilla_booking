const endpoints = [
  {
    name: 'Get Profile Detail', // User
    method: 'GET',
    url: '/get-profile-detail/:id',
  },
  {
    name: 'Get All Users',
    method: 'GET',
    url: '/get-all-users',
  },
  {
    name: 'Login',
    method: 'POST',
    url: '/login',
  },
  {
    name: 'Sign Up',
    method: 'POST',
    url: '/sign-up',
  },
  {
    name: 'Delete Account',
    method: 'DELETE',
    url: '/delete-account',
  },
  {
    name: 'Log Out',
    method: 'POST',
    url: '/log-out',
  },
  {
    name: 'Get All Listings', // Listing
    method: 'GET',
    url: '/get-all-listings',
  },
  {
    name: 'Filter Listings',
    method: 'GET',
    url: '/filter-listing/category',
  },
  {
    name: 'Add Charger',
    method: 'POST',
    url: '/add-charger',
  },
  {
    name: 'Edit Charger',
    method: 'PUT',
    url: '/edit-charger/:id',
  },
  {
    name: 'Delete Charger',
    method: 'DELETE',
    url: '/delete-charger/:id',
  },
  {
    name: 'Get All Bookings', // Booking
    method: 'GET',
    url: '/get-all-bookings',
  },
  {
    name: 'Get All New Bookings',
    method: 'GET',
    url: '/get-all-new-bookings',
  },
  {
    name: 'Get Booking Detail',
    method: 'GET',
    url: '/get-booking-detail/:id',
  },
  {
    name: 'Filter Bookings',
    method: 'GET',
    url: '/filter-booking/category',
  },
  {
    name: 'Accept Booking',
    method: 'PUT',
    url: '/accept-booking',
  },
  {
    name: 'Delete Booking',
    method: 'DELETE',
    url: '/delete-booking/:id',
  },
  {
    name: 'Get All Bookings', // Buyer Booking
    method: 'GET',
    url: '/buyer/get-all-bookings',
  },
  {
    name: 'Skip Booking',
    method: 'POST',
    url: '/buyer/skip-booking',
  },
  {
    name: 'Stop Repeated Booking',
    method: 'POST',
    url: '/buyer/stop-repeated-booking',
  },
  {
    name: 'Filter Bookings',
    method: 'GET',
    url: '/buyer/filter-booking/category',
  },
  {
    name: 'Filter Bookings',
    method: 'GET',
    url: '/buyer/filter-booking/get-all-pending',
  },
  {
    name: 'Get All Chargers', // Charger
    method: 'GET',
    url: '/get-all-chargers',
  },
  {
    name: 'Get Available Dates',
    method: 'GET',
    url: '/get-available-dates',
  },
  {
    name: 'Book Now',
    method: 'POST',
    url: '/book-now/:id',
  },
  {
    name: 'Get All Reviews', // Review
    method: 'GET',
    url: '/get-all-reviews',
  },
  {
    name: 'Get All Stars',
    method: 'GET',
    url: '/get-all-stars',
  },
  {
    name: 'Get Stars',
    method: 'GET',
    url: '/get-stars/:id',
  },
  {
    name: 'Add Review',
    method: 'POST',
    url: '/add-review',
  },
  {
    name: 'Get All Messages', // Chat
    method: 'GET',
    url: '/get-all-messages',
  },
  {
    name: 'Get All Receiver Messages',
    method: 'GET',
    url: '/get-all-receiver-messages',
  },
  {
    name: 'Get All Sender Messages',
    method: 'GET',
    url: '/get-all-sender-messages',
  },
  {
    name: 'Send Message',
    method: 'POST',
    url: '/send-message/:id',
  },
  {
    name: 'Payout Available', // Payments
    method: 'GET',
    url: '/payout-available',
  },
  {
    name: 'Add Payment Details',
    method: 'POST',
    url: '/add-payment-details',
  },
  {
    name: 'Edit Payment Details',
    method: 'PUT',
    url: '/edit-payment-details',
  },
  {
    name: 'Remove Payment Details',
    method: 'DELETE',
    url: '/remove-payment-details',
  },
  {
    name: 'Request Payout',
    method: 'POST',
    url: '/request-payout',
  },
  {
    name: 'Get All Requested Payouts',
    method: 'GET',
    url: '/get-all-requested-payouts',
  },
  {
    name: 'Get Specific Payout Details',
    method: 'GET',
    url: '/get-specific-payout-details',
  },
]

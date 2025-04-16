const BASE_URL = import.meta.env.VITE_API_URL;  
export const FRONTEND_URL = import.meta.env.VITE_APP_FRONTEND_URL;  
export const MEDIA_URL = import.meta.env.VITE_APP_MEDIA_PATH


export const USER = {
  SIGN_UP: `${BASE_URL}/api/user/signup`,  
  LOGIN: `${ BASE_URL }/api/user/login`,
 VERIFY_EMAIL:`${ BASE_URL }/api/user/verifyemail`,
 CONTACT: `${BASE_URL}/api/user/contact`,
 VENDORQUOTE: `${BASE_URL}/api/user/vendorQuote`,
 BOOKING_DETAIL:`${BASE_URL}/api/user/bookingData`,
 VENUE_BOOKINGS:`${BASE_URL}/api/user/venueBookings`,
 VENDOR_REQUESTS:`${BASE_URL}/api/user/vendorRequests`,
 GOOGLE_LOGIN:`${BASE_URL}/api/user/google-login`
};



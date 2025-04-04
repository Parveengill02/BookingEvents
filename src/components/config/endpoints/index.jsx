const BASE_URL = import.meta.env.VITE_API_URL;  
export const FRONTEND_URL = import.meta.env.VITE_APP_FRONTEND_URL;  

export const USER = {
  SIGN_UP: `${BASE_URL}/api/user/signup`,  
  LOGIN: `${ BASE_URL }/api/user/login`,
 VERIFY_EMAIL:`${ BASE_URL }/api/user/verifyemail`

  
};

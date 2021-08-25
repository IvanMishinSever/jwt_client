import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../Authorization/authSlice";
import userReducer from "../Main/userSlice";

const store = configureStore ({
   reducer: {
    auth: authReducer,
    user: userReducer,
  
      
   } 
})
export default store;
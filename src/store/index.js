import {configureStore} from '@reduxjs/toolkit';

import {authReducer, login, logout} from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export {store, login, logout};

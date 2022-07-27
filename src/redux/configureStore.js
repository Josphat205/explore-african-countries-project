import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './country/country';

const store = configureStore({
  reducer: {
    data: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

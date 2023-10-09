import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './language/reducer';

export const store = configureStore({
  reducer: {
    language: languageReducer
  }
});

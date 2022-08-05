import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';

const LS_KEY = 'contacts';

export const store = configureStore({
  contacts: {
    items: JSON.parse(localStorage.getItem(LS_KEY)),
    filter: '',
  },
  reducer: {
    contacts: contactsSlice,
  },
});

//slice

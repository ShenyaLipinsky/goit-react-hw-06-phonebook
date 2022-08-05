import { createSlice } from '@reduxjs/toolkit';
import { store } from './store';
const LS_KEY = 'contacts';

const initialState = {
  items: JSON.parse(localStorage.getItem(LS_KEY)) && [],
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: state => {
      if (
        store.contacts.item.name.toLowerCase() ===
        store.contacts.filter.toLowerCase()
      ) {
        alert(`${store.contacts.items.name} is already in contacts.`);
        return [...store.contacts.items];
      }
      return [...store.contacts.items, state];
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;

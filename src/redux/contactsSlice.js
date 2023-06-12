import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push({
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact(state, { payload }) {
      const filterValueId = state.contacts.findIndex(
        contact => contact.id === payload
      );
      state.contacts.splice(filterValueId, 1);
    },
    onChangeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});
export const { addContact, deleteContact, onChangeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

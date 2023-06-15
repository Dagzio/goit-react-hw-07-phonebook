import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
extraReducers: {
  [fetchContacts.pending] (state) {
    state.contacts.isLoading = true;
  },
  [fetchContacts.fulfilled] (state, action) {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = action.payload;
  },
  [fetchContacts.rejected] (state, action) {
    state.contacts.isLoading = false;
      state.contacts.error = action.payload;
  },
}
});

export const contactsReducer = contactsSlice.reducer;


  // reducers: {
  //   addContact(state, { payload }) {
  //     state.contacts.items.push({
  //       id: nanoid(),
  //       name: payload.name,
  //       number: payload.number,
  //     });
  //   },
  //   deleteContact(state, { payload }) {
  //     const filterValueId = state.contacts.items.findIndex(
  //       contact => contact.id === payload
  //     );
  //     state.contacts.items.splice(filterValueId, 1);
  //   },
  //   onChangeFilter(state, { payload }) {
  //     state.filter = payload;
  //   },
  // },
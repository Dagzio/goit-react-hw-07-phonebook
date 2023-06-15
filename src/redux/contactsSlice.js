import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.items.push({
        id: payload.id,
        name: payload.name,
        phone: payload.phone,
      });
    },
    [deleteContact.fulfilled](state, { payload }) {
      const filterValueId = state.contacts.items.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts.items.splice(filterValueId, 1);
    },
  },
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

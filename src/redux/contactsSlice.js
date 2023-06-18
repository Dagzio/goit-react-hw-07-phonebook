import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';
import { onUpdateFilterValue } from 'components/Filter/Filter';
import {
  fetchHandlePending,
  fetchHandleFulfilled,
  fetchHandleRejected,
  contactHandleAdd,
  contactHandleDelete,
  filterHandleUpdate,
} from './handleFunctions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, fetchHandlePending)
      .addCase(fetchContacts.fulfilled, fetchHandleFulfilled)
      .addCase(fetchContacts.rejected, fetchHandleRejected)
      .addCase(addContact.fulfilled, contactHandleAdd)
      .addCase(deleteContact.fulfilled, contactHandleDelete)
      .addCase(onUpdateFilterValue, filterHandleUpdate);
  },
});

export const contactsReducer = contactsSlice.reducer;

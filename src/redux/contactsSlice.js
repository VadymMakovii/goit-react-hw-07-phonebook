import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [changeContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [changeContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [changeContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

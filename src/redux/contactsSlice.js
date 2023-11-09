import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(value) {
        return {
          payload: { ...value, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;

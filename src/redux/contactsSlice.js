import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  // Добавляем обработку внешних экшенов
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items.push(action.payload);
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { deleteContact } = contactSlice.actions;

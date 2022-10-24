import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contactsState',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    addFilteredContact: (state, action) => {
      state.filter = state.contacts.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase().trim())
      );

      if (action.payload === '') {
        state.filter = '';
      }
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(el => el.id === action.payload);
      state.contacts.splice(index, 1);
    },
    deleteFilteredContact: (state, action) => {
      if (state.filter) {
        const index = state.filter.findIndex(el => el.id === action.payload);
        state.filter.splice(index, 1);
      }
    },
  },
});

export const {
  addContact,
  addFilteredContact,
  deleteContact,
  deleteFilteredContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setContacts(state, action) {
        state.contacts = action.payload;
    },
    setFilter(state, action) {
        state.filter = action.payload;
    },
  },
});

export const {setContacts, setFilter} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
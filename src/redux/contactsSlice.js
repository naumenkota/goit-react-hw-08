import { createSelector, createSlice, isAnyOf} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from './filtersSlice';

const initialState = {
    items: [],
    loading: false,
    error: null   
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
        })
          .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
              state.items = state.items.filter(item => item.id !== action.payload);
              state.loading = false;
            })

        .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
        state.error = action.payload;
        state.loading = false;
        }) 
        .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
        state.error = null;
        state.loading = true;
        })
        
    }
    
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactsReducer = slice.reducer;


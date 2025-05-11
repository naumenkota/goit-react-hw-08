import { createSlice, isAnyOf} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "./operations";


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


export const contactsReducer = slice.reducer;


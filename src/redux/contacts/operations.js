import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const prepareAuth = (thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) return thunkAPI.rejectWithValue();
  setAuthHeader(token);
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await axios.get(`/contacts`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
   
  }
});


export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await axios.post(`/contacts`, newContact);
    console.log('Contact added:', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  return thunkAPI.rejectWithValue(error.message);
   
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
   
  }
});


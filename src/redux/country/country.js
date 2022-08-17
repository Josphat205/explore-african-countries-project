import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  countries: [],
  error: '',
};

export const fetchCounties = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(
      'https://restcountries.com/v3.1/region/africa',
    );
    const data = await response.json();
    return data;
  },
);

export const fetchByName = createAsyncThunk(
  'countries/fetchCountries',
  async (term) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${term}`,
    );
    const data = await response.json();
    return data;
  },
);

export const fetchCountry = createAsyncThunk(
  'countries/fetchCountry',
  async (username) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${username}`);
    const data = await response.json();
    return data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchCounties.pending]: (state) => {
      state.loading = true;
    },
    [fetchCounties.fulfilled]: (state, action) => {
      const newState = state;
      state.loading = false;
      newState.countries = action.payload;
    },
    [fetchCounties.rejected]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
    [fetchCountry.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      const newState = state;
      state.loading = false;
      newState.countries = action.payload;
    },
    [fetchCountry.rejected]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
    [fetchByName.pending]: (state) => {
      state.loading = true;
    },
    [fetchByName.fulfilled]: (state, action) => {
      const newState = state;
      state.loading = false;
      newState.countries = action.payload;
    },
    [fetchByName.rejected]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
  },
});

export default countriesSlice.reducer;

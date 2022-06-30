import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
  interface searchState {
    cityKeyword: string
    countryKeyword: string
    countryTitle: string
  }
  // Define the initial state using that type
  const initialState: searchState = {
    cityKeyword: '',
    countryKeyword: '',
    countryTitle: '',
  }
  
  export const searchSlice = createSlice({
    name: 'search',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setCityKeyword: (state, action: PayloadAction<string>) => {
        state.cityKeyword = action.payload;
      },
      setCountryKeyword: (state, action: PayloadAction<string>) => {
        state.countryKeyword = action.payload;
      },
      setCountryTitle: (state, action: PayloadAction<string>) => {
        state.countryTitle = action.payload;
      },
    },
  })
  
  export const { setCityKeyword, setCountryKeyword, setCountryTitle } = searchSlice.actions
  
  
  export default searchSlice.reducer
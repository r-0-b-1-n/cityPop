import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
  interface searchState {
    cityKeyword: string
    countryKeyword : string
  }
  // Define the initial state using that type
  const initialState: searchState = {
    cityKeyword: '',
    countryKeyword: ''
  }
  
  export const searchSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setCityKeyword: (state, action: PayloadAction<string>) => {
        state.cityKeyword = action.payload;
      },
      setCountryKeyword: (state, action: PayloadAction<string>) => {
        state.countryKeyword = action.payload;
      },
    },
  })
  
  export const { setCityKeyword, setCountryKeyword } = searchSlice.actions
  
  
  export default searchSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export type CounterPageState = {
  activePage: number;
  isEnding: boolean;
}

const initialState: CounterPageState = {
  activePage: 1,
  isEnding: false,
}

export const counterPageSlice = createSlice({
  name: 'counterPage',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.activePage += 1;
    },
    setIsEnding: (state) => {
      state.isEnding = true;
    },
  },
})

export const { nextPage, setIsEnding } = counterPageSlice.actions

export default counterPageSlice.reducer
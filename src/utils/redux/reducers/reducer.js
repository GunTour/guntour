import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  booking: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedin = action.payload;
    },
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setBooking } = sliceState.actions;
export default reducer;
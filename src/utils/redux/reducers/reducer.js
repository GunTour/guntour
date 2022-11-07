import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  role: "",
  booking: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedin = action.payload;
    },
    setRole: (state, action) => {
      state.rolePage = action.payload;
    },
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setBooking, setRole } = sliceState.actions;
export default reducer;
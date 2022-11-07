import { configureStore } from "@reduxjs/toolkit";
import reducer from "utils/redux/reducers/reducer";

export const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});

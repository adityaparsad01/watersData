import { configureStore } from "@reduxjs/toolkit";
import counters from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counters
  }
});

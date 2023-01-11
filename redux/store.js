import { configureStore } from "@reduxjs/toolkit";
import * as React from "react";
import Reducer from "./reducer";

export const store = configureStore({
  reducer: {
    app: Reducer,
  },
});

"use client";

import store from "@/app/store/store";
import { Provider } from "react-redux";



const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

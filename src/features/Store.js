import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";



//connect the store with Redux_Devtools_Extension
//const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// state

const store = configureStore({
  reducer:{
    user : authSlice
  }
})
export default store;
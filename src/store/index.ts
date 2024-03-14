import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filterSlice from "../store/filterSlice.ts";
import ticketSlice from "../store/ticketSlice.ts";


const rootReducer = combineReducers({
    filter: filterSlice,
    tickets: ticketSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    collectionChamps: [],
    sidebar: false,
}


export const store = createStore(reducer, initialState);
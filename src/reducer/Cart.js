import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        list: []

    },
    reducers: {
        addCart: (state, action) => {
            state.list = action.payload.list;
            window.sessionStorage.setItem("cart", JSON.stringify(action.payload.list));
        }
    }

})

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
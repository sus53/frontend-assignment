import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "Product",
    initialState: {
        list: [],
        currentProduct: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.list = action.payload.list;

        },
        addCurrentProduct: (state, action) => {
            state.currentProduct = action.payload.currentProduct;
            window.localStorage.setItem("product", JSON.stringify(action.payload.currentProduct));
        }
    }

})

export const { addProduct, addCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
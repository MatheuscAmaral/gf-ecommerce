'use client'

import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
    selectedStorage: string;
}

const initialState: ProductState = {
    selectedStorage: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectStorage: (state, action) => {
            state.selectedStorage = action.payload;
        }
    }
});

export const { selectStorage } = productSlice.actions;
export default productSlice.reducer;

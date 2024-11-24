'use client'

import { ProductState } from '@/interfaces/productState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductState = {
    selectedStorage: {
        type: '',
        index: 0,
        payload: ''
    },
    selectedPlan: {
        type: '',
        index: 0,
        payload: ''
    },
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectStorage: (state, action) => {
            state.selectedStorage = action.payload;
        },
        selectPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
    }
});

export const { selectStorage, selectPlan } = productSlice.actions;
export default productSlice.reducer;

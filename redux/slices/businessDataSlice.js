import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: {},
};

export const businessDataSlice = createSlice({
    name: 'businessDataSlice ',
    initialState,
    reducers: {
        businessDataAction: (state, action) => {
            state.value = action.payload;
        },
    },
});
export const { businessDataAction } = businessDataSlice.actions;
export default businessDataSlice.reducer;

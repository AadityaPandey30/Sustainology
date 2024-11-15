import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 'Dashboard',
};

export const headersSlice = createSlice({
    name: 'headersSlice ',
    initialState,
    reducers: {
        headersAction: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(state, 'hhhhh');
            state.value = action.payload;
        },
    },
});
export const { headersAction } = headersSlice.actions;
export default headersSlice.reducer;

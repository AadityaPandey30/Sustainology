import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

export const sidebarToggleSlice = createSlice({
    name: 'sidebarToggleSlice ',
    initialState,
    reducers: {
        sidebarToggle: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value;
        },
    },
});
export const { sidebarToggle } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;

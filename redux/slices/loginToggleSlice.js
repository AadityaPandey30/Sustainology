import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

export const loginToggleSlice = createSlice({
    name: 'loginToggleSlice ',
    initialState,
    reducers: {
        loginToggle: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value;
        },
    },
});
export const { loginToggle } = loginToggleSlice.actions;
export default loginToggleSlice.reducer;

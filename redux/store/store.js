import { configureStore } from '@reduxjs/toolkit';
import loginToggleSlice from '../slices/loginToggleSlice';
import headersSlice from '../slices/headersSlice';
import sidebarToggleSlice from '../slices/sidebarToggleSlice';
import businessDataSlice from '../slices/businessDataSlice';

export const store = configureStore({
    reducer: {
        loginToggle: loginToggleSlice,
        headers: headersSlice,
        sideBarToggle: sidebarToggleSlice,
        businessData: businessDataSlice,
    },
});

'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const StoreProvide = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvide;
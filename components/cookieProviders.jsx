'use client';
import React from 'react';
import { CookiesProvider } from 'react-cookie';

const CookieProviders = ({ children }) => {
    return <CookiesProvider>{children} </CookiesProvider>;
};
export default CookieProviders;

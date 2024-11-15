'use client';
import Navbar from '../../components/header/Header';
import Banner from '../../components/project-overview-components/Banner';
import React, { useRef, useState } from 'react';
import DefaultAccordion from '@/components/faq/Acrodians';
import WholePage from '../../components/faq/WholePage';

//** import css */
import '../../styles/faq.css';
import Footer from '@/components/footer/Footer';

export default function Faq() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);

    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            {/* <Banner bannerRef={bannerRef} /> */}
            {/* <DefaultAccordion /> */}
            <WholePage />
            <Footer />
        </>
    );
}

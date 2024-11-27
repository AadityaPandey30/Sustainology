'use client';
import Navbar from '../../components/header/Header';
import React, { useRef, useState } from 'react';
import Banner from '@/components/business/Banner';
import Introduction from '@/components/business/Introduction';
import Features from '@/components/business/Features';
import Integration from '@/components/business/Integration';
import Benefits from '@/components/business/Benefits';
import useIntersectionObserver from '@/hook/useInerationSidebar';

import '../../styles/faq.css';
import Footer from '@/components/footer/Footer';

export default function ClimateAPIPage() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);

    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.6);

    const buttons = [
        { label: 'Features', href: '#cu-1' },
        { label: 'Integration Steps', href: '#cu-2' },
        { label: 'Business Benefits', href: '#cu-3' },
    ];

    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} isClimate={true} buttons={buttons} />

            <div className="approach-bg">
                <Introduction />
                <Features sectionRefs={sectionRefs} />
            </div>
            <Integration sectionRefs={sectionRefs} />
            <Benefits sectionRefs={sectionRefs} />
            <Footer />
        </>
    );
}

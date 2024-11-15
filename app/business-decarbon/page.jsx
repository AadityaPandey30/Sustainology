'use client';
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/header/Header';
import Banner from '../../components/business/Banner';
import Decarbonization from '../../components/business/Decarbonization';
import Offset from '../../components/business/Offset';
import Unlocking from '../../components/business/Unlocking';
import Clearance from '../../components/business/Clearance';
import './../../styles/business.css';
import DecarbonApproach from '@/components/business/DecarbonApproach';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import Footer from '@/components/footer/Footer';

export default function Business() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.6);

    const buttons = [
        { label: 'Our approach', href: '#bu-1' },
        { label: 'API Solutions', href: '#bu-2' },
        { label: 'Offtake Agreement', href: '#bu-3' },
        { label: 'Carbon Credits', href: '#bu-4' },
        { label: 'Environmental Audit', href: '#bu-5' },
    ];

    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} isDecarbon={true} buttons={buttons} />
            <DecarbonApproach sectionRefs={sectionRefs} />
            <Decarbonization sectionRefs={sectionRefs} />
            <Unlocking sectionRefs={sectionRefs} />
            <Offset sectionRefs={sectionRefs} />
            <Clearance sectionRefs={sectionRefs} />
            <Footer />
        </>
    );
}

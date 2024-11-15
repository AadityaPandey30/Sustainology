'use client';
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/header/Header';
import Banner from '../../components/business/Banner';
import ESGConsultancy from '../../components/business/ESGConsultancy';
import Decarbonization from '../../components/business/Decarbonization';
import Environmental from '../../components/business/Environmental';
import Offset from '../../components/business/Offset';
import Unlocking from '../../components/business/Unlocking';
import './../../styles/business.css';
import Overview from '../../components/business/Overview.jsx';
import OurApproach from '../../components/business/OurApproach.jsx';
import Certification from '@/components/business/Certifiction';
import Simulation from '@/components/business/Simulation';
import Consulting from '@/components/business/Consulting';
import Circular from '@/components/business/Circular';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import EsgStartegy from '@/components/esg-strategy/strategy';
import Footer from '@/components/footer/Footer';

export default function Business() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    useIntersectionObserver(sectionRefs, 0.5);

    const buttons = [
        { label: 'Our Approach', href: '#our-approach' },
        { label: 'ESG Strategy & Transformation', href: '#busi-2' },
        { label: 'Green Building Solutions', href: '#certification' },
        { label: 'Circular economy Services', href: '#busi-4' },
    ];
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} buttons={buttons} />
            <Overview />
            <OurApproach sectionRefs={sectionRefs} />
            {!isMobile ? (
                <ESGConsultancy sectionRefs={sectionRefs} />
            ) : (
                <EsgStartegy sectionRefs={sectionRefs} />
            )}
            <Environmental />
            <Certification sectionRefs={sectionRefs} />
            <Simulation />
            <Consulting />
            <Circular sectionRefs={sectionRefs} />
            <Footer />
        </>
    );
}

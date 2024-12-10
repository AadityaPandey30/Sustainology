'use client';
import Navbar from '../../components/header/Header';
import React, { useRef, useState } from 'react';
// import ClimateAPI from '@/components/business/ClimateAPI';
import Banner from '@/components/business/Banner';

import '../../styles/faq.css';
import Footer from '@/components/footer/Footer';
import AboutUs from '@/components/business/AboutUs';
import DevelopmentProcess from '@/components/business/DevelopmentProcess';
import AdditionalServices from '@/components/business/AdditionalServices';
import CaseStudies from '@/components/business/CaseStudies';
import useIntersectionObserver from '@/hook/useInerationSidebar';

export default function ClimateAPIPage() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);

    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.6);

    const buttons = [
        { label: 'About Us', href: '#con-1' },
        { label: 'Development Process', href: '#con-2' },
        { label: 'Case Studies', href: '#con-3' },
    ];

    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} buttons={buttons} />
            <AboutUs sectionRefs={sectionRefs} />
            <DevelopmentProcess sectionRefs={sectionRefs} />
            <div className="bg-gradient-to-br from-[#e7ffcecc] to-[#ffffff,#e7f1ff]">
                <AdditionalServices sectionRefs={sectionRefs} />
                <CaseStudies sectionRefs={sectionRefs} />
            </div>
            <Footer />
        </>
    );
}

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
import Certification from '@/components/business/Certifiction';
import Simulation from '@/components/business/Simulation';
import Circular from '@/components/business/Circular';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import EsgStartegy from '@/components/esg-strategy/strategy';
import Footer from '@/components/footer/Footer';

export default function Business() {
    const cleanSeoScript = `{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Sustainology",
    "item": "https://sustainology.life/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "For Business",
    "item": "https://sustainology.life/for-business"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "ESG Services",
    "item": "https://sustainology.life/for-business"  
  }]
}
`;

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = cleanSeoScript;
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    const sectionRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    useIntersectionObserver(sectionRefs, 0.5);

    const buttons = [
        // { label: 'Our Approach', href: '#our-approach' },
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
            {/* <Head>
                <meta
                    name="description"
                    content="Explore Sustainology ESG Services: Tailored solutions to enhance sustainability, improve ESG performance, achieve net-zero goals, and conduct comprehensive product life cycle assessments (LCA)."
                />
            </Head> */}
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} isEsg={true} buttons={buttons} />
            <Overview />
            {!isMobile ? (
                <ESGConsultancy sectionRefs={sectionRefs} />
            ) : (
                <EsgStartegy sectionRefs={sectionRefs} />
            )}
            <Environmental />
            <Certification sectionRefs={sectionRefs} />
            <Simulation />
            <Circular sectionRefs={sectionRefs} />
            <Footer />
        </>
    );
}

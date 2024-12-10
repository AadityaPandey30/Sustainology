'use client';
import Navbar from '@/components/header/Header';
// import Banner from '@/components/project-overview-components/Banner';
import React, { use, useEffect, useRef, useState } from 'react';
import '../../styles/aboutUs.css';
import AboutUsBanner from '@/components/about-us/AboutUsBanner';
import MissionVision from '@/components/about-us/MissionVision';
import OurValues from '@/components/about-us/OurValues';
import Founders from '@/components/about-us/Founders';
import FounderDetailsModal from '@/components/about-us/FounderDetailsModal';
import StrategicPartners from '@/components/about-us/StrategicPartners';
import Customer from '../../components/home/Customer';
import Image from 'next/image';
import Address from '@/components/address/page';

// import Technology from '@/components/home/Technology';
import { useFetch } from '@/hook/getDataOnLoad';
import foundersData from '../../utils/foundersData';
import founderTempData from '../../utils/foundersTemp';
import advisorData from '@/utils/advisor';
import OurTechnology from '@/components/home/OurTechnology';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import TrustedBy from '@/components/about-us/TrustedBy';
import Footer from '@/components/footer/Footer';

export default function AboutUs() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [modalData, setModalData] = useState({});
    const [keyValue, setKeyValue] = useState(0);

    const bannerRef = useRef();

    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.6);

    const { data: testimonialData } = useFetch({
        url: `/testimonial/get-all-active`,
    });

    const testimonials = testimonialData?.response;

    useEffect(() => {
        setKeyValue(1);
    }, []);

    return (
        <>
            <main className="relative overflow-x-hidden">
                <Navbar
                    bannerRef={bannerRef}
                    isScrolled={isScrolled}
                    setIsScrolled={setIsScrolled}
                />
                {/* <Banner bannerRef={bannerRef} /> */}
                <AboutUsBanner bannerRef={bannerRef} />
                <MissionVision sectionRefs={sectionRefs} />
                <OurValues sectionRefs={sectionRefs} />
                <Founders
                    setOpenDetail={setOpenDetail}
                    title={'Founders'}
                    data={founderTempData}
                    setModalData={setModalData}
                    id="founders"
                    sectionRefs={sectionRefs}
                    refIndex={2}
                />
                <Founders
                    setOpenDetail={() => ''}
                    title={'Partners'}
                    data={advisorData}
                    setModalData={() => ''}
                    id="advisors"
                    sectionRefs={sectionRefs}
                    refIndex={3}
                />
                <StrategicPartners sectionRefs={sectionRefs} />
                <div className="accreditations-section mt-16 bottom-section">
                    <TrustedBy />

                    <Customer testimonials={testimonials} isAbout={true} />
                </div>

                <div
                    id="about-technology"
                    ref={(el) => {
                        sectionRefs.current[5] = el;
                    }}
                >
                    <OurTechnology
                        sectionRefs={sectionRefs}
                        refIndex={5}
                        key={keyValue}
                    />
                </div>

                <FounderDetailsModal
                    setDetailsModal={setOpenDetail}
                    detailModal={openDetail}
                    modalData={modalData}
                />
                <Address />

                <Footer />
            </main>
        </>
    );
}

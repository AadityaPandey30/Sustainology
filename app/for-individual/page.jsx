'use client';

import React, { useRef, useState, Suspense, useEffect } from 'react';
// import { store } from "../../redux/store/store";
// import { Provider } from "react-redux";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import '../../styles/individuals.css';
import Banner from '../../components/individual/Banner';
import CalculatorForm from '../../components/individual/CalculatorForm';
import Certificate from '../../components/individual/Certificate';
import CarbonCreditForm from '../../components/individual/CarbonCreditForm';
import RedirectBanner from '../../components/individual/RedirectBanner';
import UserInformationForm from '../../components/individual/UserInformationForm';
import useIntersectionObserver from '@/hook/useInerationSidebar';

const Calculator = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [userDetail, setUserDetail] = React.useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClickProceed, setIsClickProceed] = useState(false);

    const bannerRef = useRef(null);
    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.5);

    const handelSubmit = (values, { setSubmitting }) => {
        setUserDetail(values);
        setShowModal(false);
        setIsClickProceed(true);
    };

    return (
        // <Provider store={store}>
        <main className="min-h-screen overflow-x-hidden">
            <Header
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} sectionRefs={sectionRefs} />
            <div
                id="carbon-calculator"
                ref={(el) => (sectionRefs.current[1] = el)}
            >
                <Suspense>
                    <CalculatorForm
                        setShowModal={setShowModal}
                        userDetail={userDetail}
                        sectionRefs={sectionRefs}
                        isClickProceed={isClickProceed}
                        setIsClickProceed={setIsClickProceed}
                    />
                </Suspense>
            </div>
            <Certificate />
            <section
                className="md:mt-40 mt-12 lg:w-3/4  lg:px-[95px] px-2 "
                id="support-project"
                ref={(el) => (sectionRefs.current[2] = el)}
            >
                <Suspense>
                    <CarbonCreditForm
                        setShowModal={setShowModal}
                        userDetail={userDetail}
                        sectionRefs={sectionRefs}
                        isClickProceed={isClickProceed}
                        setIsClickProceed={setIsClickProceed}
                    />
                </Suspense>
            </section>
            <RedirectBanner sectionRefs={sectionRefs} />
            <UserInformationForm
                setShowModal={setShowModal}
                showModal={showModal}
                handelSubmit={handelSubmit}
            />
            <Footer />
        </main>
        // </Provider>
    );
};

export default Calculator;

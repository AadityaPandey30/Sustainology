'use client';
import React, { useEffect, useRef, useState } from 'react';

//** components import */
import Navbar from '../../../components/header/Header';
import Banner from '../../../components/project-overview-components/Banner';
import ProjectTitle from '../../../components/project-overview-components/ProjectTitle';
import ProjectShortInfo from '../../../components/project-overview-components/ProjectShortInfo';
import CreditCarbon from '../../../components/project-overview-components/CreditCarbon';
import SatelliteImage from '../../../components/project-overview-components/SatelliteImage';
import Gallery from '../../../components/project-overview-components/Gallery';
import SDGGoals from '../../../components/project-overview-components/SDGGoals';
import { useFetch } from '../../../hook/getDataOnLoad';
import UserInformationForm from '@/components/individual/UserInformationForm';
import ProjectVerification from '@/components/project-overview-components/ProjectVerification';
// import { useUpdateDataOnLoad } from '@/hook/updateDataOnLoad';
import axios from 'axios';

//**css import */
import '@/styles/projectOverView.css';
import axiosInstance from '@/utils/service';
import useIntersectionObserver from '@/hook/useInerationSidebar';
import Footer from '@/components/footer/Footer';

const ProjectOverview = ({ params: slug }) => {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const [projectDetails, setProjectDetails] = useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [userDetail, setUserDetail] = React.useState(null);
    const [isClickProceed, setIsClickProceed] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

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

    const { data, error, isLoading } = useFetch({
        url: `/project/${slug.slug}`,
    });
    const sectionRefs = useRef([]);

    useIntersectionObserver(sectionRefs, 0.5);

    useEffect(() => {
        if (data) {
            setProjectDetails(data?.response);
        }
    }, [data]);

    let sub = 1;
    useEffect(() => {
        if (sub) {
            // handelViewCount();
            sub = 0;
        }
    }, []);

    // const handelViewCount = async () => {
    //     try {
    //         const ipResponse = await axios.get(
    //             'https://geolocation-db.com/json/'
    //         );
    //         console.log('Geolocation', ipResponse?.data);
    //         await axiosInstance.put(
    //             `/project/update-project-view/${slug.slug}`,
    //             { ip: ipResponse?.data?.IPv4 }
    //         );
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handelViewCount = async () => {
        try {
            const ipResponse = await axios.get(
                process.env.NEXT_PUBLIC_LOCATION_URL
            );
            console.log('Geolocation', ipResponse?.data);
            await axiosInstance.put(
                `/project/update-project-view/${slug.slug}`,
                { ip: ipResponse?.data?.ip }
            );
        } catch (error) {
            console.error('Error fetching geolocation data:', error);
        }
    };

    const handelSubmit = (values, { setSubmitting }) => {
        setUserDetail(values);
        setShowModal(false);
        setIsClickProceed(true);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="absolute h-[875px] w-[1154.61px] top-[100px] -left-[216.7px] -z-10">
                <div className="gray-gradient absolute -z-10 h-[651.41px] w-[939.37px] top-[600px] left-0 -rotate-[180deg]"></div>
                <div className="green-gradient absolute -z-10 h-[619.78px] w-[737.73px] top-[854.61px] left-0 -rotate-[167.14deg] "></div>
            </div>
            <div className="absolute h-[1005.41px] w-[958.57px] top-[1298px] right-0 -z-10 ">
                <div className=" absolute gray-gradient w-[736.98px] h-[603.75px] right-0"></div>
                <div className=" absolute green-gradient w-[795.56px] h-[603.75px] right-0 top-96 -rotate-[2.86deg]"></div>
            </div>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} projectDetails={projectDetails} />
            <ProjectTitle
                projectDetails={projectDetails}
                sectionRefs={sectionRefs}
            />
            <ProjectShortInfo
                projectDetails={projectDetails}
                sectionRefs={sectionRefs}
            />
            <section
                className="md:mt-20 mt-12   pt-2 lg:pl-[132px] px-10 lg:pr-0  lg:w-[83%]"
                id="pricing"
                ref={(el) => (sectionRefs.current[1] = el)}
            >
                {projectDetails?.isVerified ? (
                    <CreditCarbon
                        projectDetails={projectDetails}
                        setShowModal={setShowModal}
                        userDetail={userDetail}
                        sectionRefs={sectionRefs}
                        setIsClickProceed={setIsClickProceed}
                        isClickProceed={isClickProceed}
                    />
                ) : (
                    <ProjectVerification sectionRefs={sectionRefs} />
                )}
            </section>
            <SatelliteImage
                projectDetails={projectDetails}
                sectionRefs={sectionRefs}
            />
            <Gallery
                projectDetails={projectDetails}
                sectionRefs={sectionRefs}
            />
            <SDGGoals
                projectDetails={projectDetails}
                sectionRefs={sectionRefs}
            />
            <UserInformationForm
                setShowModal={setShowModal}
                showModal={showModal}
                handelSubmit={handelSubmit}
            />
            <Footer />
        </div>
    );
};

export default ProjectOverview;

'use client';
import { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import CareerBanner from '../../components/career-components/CareerBanner';
import '../../styles/career.css';
import CareerContent from '../../components/career-components/CareerContent';
import CareerPost from '../../components/career-components/CareerPost';
import ResumeUpload from '../../components/career-components/ResumeUpload';
import JobDetailsModal from '../../components/career-components/job-details/JobDetailsModal';
import SocialShareModal from '@/components/career-components/SocialShareModal';
import Footer from '@/components/footer/Footer';

const Career = () => {
    const bannerRef = useRef(null);
    const scrollRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedJobDetails, setSelectedJobDetails] = useState({});
    const [showShareModal, setShareShowModal] = useState(false);

    const handelScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <CareerBanner handelScroll={handelScroll} />
            <CareerContent />
            <CareerPost
                setShowModal={setShowModal}
                showModal={showModal}
                setSelectedJobDetails={setSelectedJobDetails}
                scrollRef={scrollRef}
            />
            {/* <ResumeUpload /> */}
            <JobDetailsModal
                setShowModal={setShowModal}
                showModal={showModal}
                selectedJobDetails={selectedJobDetails}
                setShareShowModal={setShareShowModal}
            />
            <SocialShareModal
                setShareShowModal={setShareShowModal}
                showShareModal={showShareModal}
                selectedJobDetails={selectedJobDetails}
            />
            <Footer />
        </>
    );
};

export default Career;

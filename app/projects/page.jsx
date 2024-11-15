'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import ProjectList from '../../components/project-component/ProjectList';
import ProjectCard from '../../components/project-component/ProjectCard';

import './../../styles/projectOverView.css';
import ProjectContactModal from '@/components/project-component/ProjectContactModal';
import Footer from '@/components/footer/Footer';

export default function Projects() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactModal, setIsContactModal] = useState(false);
    const [selectedProjectData, setSelectedProjectData] = useState({});
    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            {/* <Banner bannerRef={bannerRef} /> */}
            <ProjectList setIsScrolled={setIsScrolled} />
            <ProjectCard
                setSelectedProjectData={setSelectedProjectData}
                setIsContactModal={setIsContactModal}
            />
            <ProjectContactModal
                setShowModal={setIsContactModal}
                showModal={isContactModal}
                selectedProjectData={selectedProjectData}
            />
            <Footer />
        </>
    );
}

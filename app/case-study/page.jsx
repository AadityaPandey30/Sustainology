'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import { useFetch } from '../../hook/getDataOnLoad';
import './../../styles/blog.css';
import List from '../../components/case-study/List';
import Footer from '@/components/footer/Footer';

export default function CaseStudy() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const { data, error, isLoading } = useFetch({
        url: `/caseStudy/all-active`,
    });

    const cases = data?.response?.getAllCaseStudys?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="blog-bg-gd">
                <div className="blog-bg">
                    <div className="container mx-auto pt-20 md:pt-32 pb-6 text-center font-bold text-4xl md:text-[44px] md:leading-[60px]">
                        <h1 className="text-[#33496F]">Case Studies</h1>
                    </div>
                    <List cases={cases} />
                </div>
            </div>
            <Footer />
        </>
    );
}

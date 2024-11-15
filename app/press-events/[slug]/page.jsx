'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../../components/header/Header';
import Overview from '../../../components/case-study/Overview';
import { useFetch } from '../../../hook/getDataOnLoad';

import './../../../styles/blog.css';
import Footer from '@/components/footer/Footer';

export default function PressDetails({ params: slug }) {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const { data, error, isLoading } = useFetch({
        url: `/pressEvent/${slug.slug}`,
    });

    const blog = data?.response;
    console.log('blogssss', blog);

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="blog-overview-bg ">
                <Overview blog={blog} />
            </div>
            <Footer />
        </>
    );
}

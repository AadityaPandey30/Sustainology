'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../../components/header/Header';
import Overview from '../../../components/blog/Overview';
import { useFetch } from '../../../hook/getDataOnLoad';

import './../../../styles/blog.css';
import Footer from '@/components/footer/Footer';

export default function Blog({ params: slug }) {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const { data, error, isLoading } = useFetch({
        url: `/blog/${slug.slug}`,
    });

    const blog = data?.response;

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="blog-overview-bg">
                <Overview blog={blog} />
            </div>
            <Footer />
        </>
    );
}

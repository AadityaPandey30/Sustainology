'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import { useFetch } from '../../hook/getDataOnLoad';
import './../../styles/blog.css';
import List from '../../components/blog/List';
import Footer from '@/components/footer/Footer';

export default function Blog() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const { data, error, isLoading } = useFetch({
        url: `/blog/allActive`,
    });

    const blogs = data?.response?.getAllBlogs?.sort(
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
                    <div className=" mx-auto pt-20 md:pt-32 pb-6 md:pb-6 text-center font-bold text-[44px] leading-[60px]">
                        <h1 className="text-[#33496F]">BLOGS</h1>
                    </div>
                    <List blogs={blogs} />
                </div>
            </div>
            <Footer />
        </>
    );
}

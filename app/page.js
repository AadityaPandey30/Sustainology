'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useFetch } from '../hook/getDataOnLoad';
import Navbar from '../components/header/Header';
import Banner from '../components/home/Banner';
import Navigate from '../components/home/Navigate';
import Customer from '../components/home/Customer';
import List from '../components/blog/List';
import Accreditations from '../components/home/Accreditations';
import Commitment from '../components/home/Commitment';
import Partners from '../components/home/Partners';
import Technology from '../components/home/Technology';
import NavigateAnim from '../components/home/NavigateAnim';
import Link from 'next/link';
import './../styles/projectOverView.css';
import './../styles/home.css';
import NewsletterSection from '../components/home/Newsletter';
import Developing from '../components/home/Developing';
import ProjectList from '../components/project-component/ProjectList';
import OurTechnology from '@/components/home/OurTechnology';
import Footer from '@/components/footer/Footer';
import Address from '@/components/address/page';
export default function Home() {
    const bannerRef = useRef();
    const sectionRefs = useRef([]);
    const [keyValue, setKeyValue] = useState(0);

    const [isScrolled, setIsScrolled] = useState(false);
    const { data: blogData } = useFetch({
        url: '/blog/allActive',
    });
    const { data: testimonialData } = useFetch({
        url: '/testimonial/get-all-active',
    });

    const blogs = blogData?.response?.getAllBlogs
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        ?.slice(0, 4);
    const testimonials = testimonialData?.response;

    useEffect(() => {
        setKeyValue(1);
    }, []);
    return (
        <>
            <Navbar
                bannerRef={bannerRef}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Banner bannerRef={bannerRef} />
            <NavigateAnim />
            <Accreditations />
            <Commitment />
            <ProjectList setIsScrolled={setIsScrolled} isHome={true} />
            <Partners />
            <OurTechnology
                sectionRefs={sectionRefs}
                refIndex={5}
                key={keyValue}
            />

            <Developing />
            <div className="bg-[#F7F6EC] pb-8 lg:pb-14">
                <div className="container mx-auto pt-8 pb-8 text-center font-bold md:text-[52px] md:leading-[60px] text-4xl">
                    <h1 className="text-[#33496F]">BLOGS</h1>
                </div>
                <List blogs={blogs} />
                <div className="flex justify-center">
                    <Link
                        href="/blog"
                        className=" text-xl leading-[1.375rem] font-semibold flex justify-center py-3 pb-[15px] px-8 hover:text-[#2F5738] text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738]"
                    >
                        More Blogs
                    </Link>
                </div>
            </div>

            <div className="accreditations-section bottom-section">
                <Customer testimonials={testimonials} />
                <Address />
                <NewsletterSection />
            </div>
            <Footer />
        </>
    );
}

'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import { useFetch } from '../../hook/getDataOnLoad';
import './../../styles/blog.css';
import List from '../../components/press-events/List';
import Footer from '@/components/footer/Footer';

export default function PressEvents() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const { data, error, isLoading } = useFetch({
        url: `/pressEvent/all/active`,
    });

    const pressEvents = data?.response?.getAllPressEvents;

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="blog-bg-gd">
                <div className="blog-bg">
                    <div className=" mx-auto pt-20 md:pt-32 md:pb-6 text-center font-bold text-4xl md:text-[44px] md:leading-[60px] leading-[52px]">
                        <h1 className="text-[#33496F]">Press & Events</h1>
                    </div>
                    <List pressEvents={pressEvents} />
                </div>
            </div>
            <Footer />
        </>
    );
}

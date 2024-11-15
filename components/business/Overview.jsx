import React, { useEffect, useRef } from 'react';

const Overview = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('animate-slide-up');
                }
            });
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer?.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <section className="pb-20 mt-12 md:pt-[3.75rem]" ref={contentRef}>
            <div>
                <h2 className="font-extrabold text-4xl md:text-[3.25rem] leading-[4.40rem] text-center text-[#33496F]">
                    Overview
                </h2>
            </div>
            <div className="font-medium text-[18px] md:text-[1.375rem] leading-8 text-[#666666] lg:pl-[132px] lg:pr-[197px] px-10 md:mt-10 text-center sm:text-left">
                <p>
                    In the journey towards a greener and fairer future, every
                    business has its unique path.Our grounded strategies and
                    comprehensive expertise ensure your organization reaps the
                    full rewards of sustainable investment. Our consultancy
                    excels across various domains, including recycling
                    innovations, sustainable materials, eco-friendly food
                    systems, supply chain improvements, and championing
                    diversity and inclusion.
                </p>
            </div>
        </section>
    );
};

export default Overview;

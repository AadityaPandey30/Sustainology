import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const AboutUs = ({ sectionRefs }) => {
    const itemsRef = useRef([]);
    const updateActiveClass = (progress, numItems) => {
        const currentIndex = Math.round(progress * numItems);

        itemsRef.current.forEach((el, i) => {
            el.classList.remove('active', 'opacity-0');
            const isCurrent = i === currentIndex;
            const isNext = i === (currentIndex + 1) % numItems;
            const isPrevious = i === (currentIndex - 1 + numItems) % numItems;
            if (!isNext && !isPrevious && !isCurrent) {
                // If the item is neither the current, next, nor previous, add 'opacity-0'
                el.classList.add('opacity-0');
            }
            if (i === currentIndex) {
                el.classList.add('active');
            }

            if (currentIndex === 5) {
                itemsRef.current[0].classList.add('active');
                itemsRef.current[0].classList.remove('opacity-0');
                itemsRef.current[2].classList.add('opacity-0');
                itemsRef.current[3].classList.add('opacity-0');
            }
        });
    };
    return (
        <section
            id="con-1"
            ref={(el) => (sectionRefs.current[0] = el)}
            className="bg-gradient-to-r from-[#c9ddb4b5] to-[#8995ab62] p-2 pb-[5%]"
        >
            <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center pt-16 pb-12">
                About Us
            </h2>
            <p className="text-2xl max-w-6xl text-center m-auto mb-16 px-1 text-[#68676b]">
                Sustainology is a climate solutions company that provides
                consultancy focusing on carbon project development and
                sustainability strategy. With a strong background in carbon
                management, Sustainology offers expertise in project design,
                carbon credit generation, and environmental compliance. Our
                approach blends technical skills with a solid understanding of
                international carbon standards, helping clients cut emissions,
                improve sustainability, and gain value from environmental
                assets. Sustainology’s team ensures that each project meets
                compliance and supports global climate goals.
            </p>
            <div className="mx-auto w-[90%] max-w-6xl p-8 bg-[#33496F] rounded-[15px] my-8 text-center">
                <p className="text-sm md:text-3xl text-white">
                    18,709,518 tonnes of CO2 emission reduction estimated by
                    2030 
                </p>
            </div>
            <div className="mx-auto w-[90%] max-w-6xl p-8 bg-[#33496F] rounded-[15px] my-8 text-center">
                <p className="text-sm md:text-3xl text-white">
                    413,895 million hectares of Nature-based carbon assets under
                    management 
                </p>
            </div>
        </section>
    );
};

export default AboutUs;

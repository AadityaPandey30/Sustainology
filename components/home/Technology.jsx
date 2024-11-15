import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../styles/home.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Technology = ({ id }) => {
    const container = useRef();

    useGSAP(
        () => {
            let techTimeln = gsap.timeline({
                scrollTrigger: {
                    trigger: '.tech-container',
                    pin: true,
                    pinSpacing: true,
                    start: 'left left',
                    end: '+=2000',
                    scrub: 1,
                },
            });

            const sections = gsap.utils.toArray('.technology');

            sections.forEach((section, index) => {
                techTimeln.from(section, {
                    duration: 1,
                    opacity: index === 0 ? 1 : 0,
                });
            });
            sections.forEach((section, index) => {
                techTimeln.to(section, { duration: 1, opacity: 1 });
            });
        },
        { scope: container }
    );
    return (
        <section className="overflow-hidden" ref={container} id={id}>
            <div className="tech-container h-screen flex items-center justify-center">
                <div className="technologies h-screen w-full mx-auto relative">
                    <div className="technology absolute top-0 left-0 w-full h-screen">
                        <Image
                            loading="lazy"
                            src="/images/home/tech_1.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                        />
                    </div>
                    <div className="technology absolute top-0 left-0 w-full h-screen">
                        <Image
                            loading="lazy"
                            src="/images/home/tech_2.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="technology absolute top-0 left-0 w-full h-screen">
                        <Image
                            loading="lazy"
                            src="/images/home/tech_3.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="technology absolute top-0 left-0 w-full h-screen">
                        <Image
                            loading="lazy"
                            src="/images/home/tech_4.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="technology absolute top-0 left-0 w-full h-screen">
                        <Image
                            loading="lazy"
                            src="/images/home/tech_5.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                {/* <div class="progress-line"></div>
                <div class="progress-logo">
                    <Image loading="lazy"
                                                    {100}

                        src="/images/Sustainology Logo 1.png"
                        alt=""
                        width={48}
                        height={48}
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Technology;

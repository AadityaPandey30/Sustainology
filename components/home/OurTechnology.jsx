import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../styles/home.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const OurTechnology = ({ id, sectionRefs, refIndex }) => {
    const container = useRef();

    const cleanSeoScript = `{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Sustainology",
    "item": "https://sustainology.life/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "About Us",
    "item": "https://sustainology.life/about-us"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Our Technology",
    "item": "https://sustainology.life/about-us#about-technology"  
  }]
}
`;

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = cleanSeoScript;
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                document.head.removeChild(script);
            }
        };
    }, []);

    useGSAP(
        () => {
            const largeTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '.technology-start-trig',
                    pin: '.technology-bg',
                    pinSpacing: false,
                    start: 'top top',
                    markers: false,

                    endTrigger: '.technology-last',
                    end: 'bottom bottom',
                },
            });

            largeTL.to('.technology-dot', { position: 'fixed' });

            const sections = [
                '#technology-one',
                '#technology-two',
                '#technology-three',
                '#technology-four',
                '#technology-five',
            ];

            const bgs = [
                '.technology-bg-1',
                '.technology-bg-2',
                '.technology-bg-3',
                '.technology-bg-4',
                '.technology-bg-5',
            ]; // Ensure this matches your HTML

            sections.forEach((sectionId, index) => {
                ScrollTrigger.create({
                    trigger: sectionId,
                    start: '10% center',
                    end: '50% center',
                    onUpdate: (self) => {
                        const progress = self.progress; // Get current scroll progress of the trigger
                        gsap.to(bgs[index], { opacity: progress });
                    },
                    scrub: true,
                    markers: false,
                });
            });
        },
        { scope: container }
    );
    return (
        <div className="technology-wrap-all" ref={container}>
            <svg
                className="absolute left-[50%] z-[80] top-[20%] translate-x-[-50%]"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <svg
                className="absolute left-[50%] z-[80] top-[40%] translate-x-[-50%]"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <svg
                className="absolute left-[50%] z-[80] top-[60%] translate-x-[-50%]"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <svg
                className="absolute left-[50%] z-[80] top-[80%] translate-x-[-50%]"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <div className="technology-bg grid grid-cols-3 md:grid-cols-6">
                <div className="technology-bg-1"></div>
                <div className="technology-bg-2"></div>
                <div className="technology-bg-3"></div>

                <div className="technology-bg-4"></div>
                <div className="technology-bg-5"></div>
                <div className="technology-dot">
                    <Image
                        loading="lazy"
                        src="/images/Sustainology Logo 1.png"
                        height={48}
                        width={48}
                        objectFit="cover"
                        alt="left-vector"
                    />
                </div>
            </div>

            <div className="technology-start-trig"></div>
            <section
                id="technology-one"
                className="technology-panel flex items-center relative"
            >
                <div className="container absolute top-6 mx-auto text-center font-bold md:text-[52px] md:leading-[60px] text-4xl mb-6">
                    <h2 className="text-[#FFFFFF]">Our Technology</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 mt-20 px-4 border-2 border-white">
                            Advanced Remote Sensing for Agriculture Forestry And
                            Other Land Use (AFOLU) Monitoring and Verification -
                            (ARS-AMV)
                        </div>
                    </div>
                    <div></div>
                </div>
                {/* <div className="technology-wrap center timeline-box">
                    <h2 className="lines">Section One</h2>
                    <h2 className="lines">Have a COKE.</h2>
                </div> */}
            </section>

            <section
                id="technology-two"
                className="technology-panel flex items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
                    <div></div>
                    <div className="flex items-center">
                        <div className="text-white font-bold leading-[32px] text-lg md:text-xl bg-[#878d9169] rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
                            <h3>
                                Innovative Integration of Remote Sensing
                                Technologies
                            </h3>
                            By combining satellite imaging, GIS, LiDAR, drone
                            imaging and augmenting it with ground truthed data
                            using machine learning, we offer a comprehensive
                            data acquisition system that captures every detail
                            of the landscape with unparalleled accuracy.
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="technology-three"
                className="technology-panel flex items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
                            <h3 className="text-xl md:text-2xl">
                                Global Data Collaboration for Enhanced Accuracy
                            </h3>
                            Leveraging data sets from leading organisations like
                            NASA, ISRO, ESA, JAXA, USGS, USDA, and FSI our
                            technology utilises the most current and expansive
                            data, ensuring the highest accuracy in our
                            monitoring efforts.
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

            <section
                id="technology-four"
                className="technology-panel flex items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
                    <div></div>
                    <div className="flex items-center">
                        <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
                            <h3 className="text-xl md:text-2xl">
                                Comprehensive Environmental Metrics Monitoring
                            </h3>
                            Our system accurately tracks key environmental
                            metrics, including soil organic carbon levels, land
                            use and land cover changes, biomass distribution,
                            and afforestation and deforestation activities,
                            offering precise monitoring and insightful baseline
                            scenario modelling.
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="technology-five"
                className="technology-panel flex items-center technology-last"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
                            <h3 className="text-xl md:text-2xl]">
                                Endorsed by Earthood: A Testament to Reliability
                            </h3>
                            Earthood's endorsement highlights the reliability
                            and effectiveness of our technology, affirming our
                            dedication to delivering top-tier precision in
                            environmental monitoring.
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>

        // <div className="technology-wrap-all" ref={container}>
        //     <svg
        //         className="absolute left-1/2 z-100 top-20% transform -translate-x-1/2"
        //         width="40"
        //         height="41"
        //         viewBox="0 0 40 41"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <path
        //             d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //         <path
        //             d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //     </svg>
        //     <svg
        //         className="absolute left-1/2 z-100 top-40% transform -translate-x-1/2"
        //         width="40"
        //         height="41"
        //         viewBox="0 0 40 41"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <path
        //             d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //         <path
        //             d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //     </svg>
        //     <svg
        //         className="absolute left-1/2 z-100 top-60% transform -translate-x-1/2"
        //         width="40"
        //         height="41"
        //         viewBox="0 0 40 41"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <path
        //             d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //         <path
        //             d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //     </svg>
        //     <svg
        //         className="absolute left-1/2 z-100 top-80% transform -translate-x-1/2"
        //         width="40"
        //         height="41"
        //         viewBox="0 0 40 41"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <path
        //             d="M11.6654 22.6133L19.9987 30.9466L28.332 22.6133"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //         <path
        //             d="M11.6654 10.9453L19.9987 19.2786L28.332 10.9453"
        //             stroke="white"
        //             strokeWidth="4"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //         />
        //     </svg>

        //     <div className="technology-bg grid grid-cols-3 md:grid-cols-6">
        //         <div className="technology-bg-1"></div>
        //         <div className="technology-bg-2"></div>
        //         <div className="technology-bg-3"></div>
        //         <div className="technology-bg-4"></div>
        //         <div className="technology-bg-5"></div>
        //         <div className="technology-dot">
        //             <Image loading="lazy"
        //                 {100}
        //                 src="/images/Sustainology Logo 1.png"
        //                 height={48}
        //                 width={48}
        //                 objectFit="cover"
        //                 alt="left-vector"
        //             />
        //         </div>
        //     </div>

        //     <div className="technology-start-trig"></div>

        //     <section
        //         id="technology-one"
        //         className="technology-panel flex items-center relative"
        //     >
        //         <div className="container absolute top-6 mx-auto text-center font-bold text-[52px] leading-[60px] mb-6">
        //             <h2 className="text-white">Our Technology</h2>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
        //             <div className="flex items-center">
        //                 <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 mt-20 px-4 border-2 border-white">
        //                     Advanced Remote Sensing for Agriculture Forestry And
        //                     Other Land Use (AFOLU) Monitoring and Verification -
        //                     (ARS-AMV)
        //                 </div>
        //             </div>
        //             <div></div>
        //         </div>
        //     </section>

        //     <section
        //         id="technology-two"
        //         className="technology-panel flex items-center"
        //     >
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
        //             <div></div>
        //             <div className="flex items-center">
        //                 <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
        //                     <h3>
        //                         Innovative Integration of Remote Sensing
        //                         Technologies
        //                     </h3>
        //                     By combining satellite imaging, GIS, LiDAR, drone
        //                     imaging and augmenting it with ground truthed data
        //                     using machine learning, we offer a comprehensive
        //                     data acquisition system that captures every detail
        //                     of the landscape with unparalleled accuracy.
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <section
        //         id="technology-three"
        //         className="technology-panel flex items-center"
        //     >
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
        //             <div className="flex items-center">
        //                 <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
        //                     <h3 className="text-xl md:text-2xl">
        //                         Global Data Collaboration for Enhanced Accuracy
        //                     </h3>
        //                     Leveraging data sets from leading organisations like
        //                     NASA, ISRO, ESA, JAXA, USGS, USDA, and FSI our
        //                     technology utilises the most current and expansive
        //                     data, ensuring the highest accuracy in our
        //                     monitoring efforts.
        //                 </div>
        //             </div>
        //             <div></div>
        //         </div>
        //     </section>

        //     <section
        //         id="technology-four"
        //         className="technology-panel flex items-center"
        //     >
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
        //             <div></div>
        //             <div className="flex items-center">
        //                 <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
        //                     <h3 className="text-xl md:text-2xl">
        //                         Comprehensive Environmental Metrics Monitoring
        //                     </h3>
        //                     Our system accurately tracks key environmental
        //                     metrics, including soil organic carbon levels, land
        //                     use and land cover changes, biomass distribution,
        //                     and afforestation and deforestation activities,
        //                     offering precise monitoring and insightful baseline
        //                     scenario modelling.
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <section
        //         id="technology-five"
        //         className="technology-panel flex items-center technology-last"
        //     >
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-44 w-full">
        //             <div className="flex items-center">
        //                 <div className="text-white font-bold text-lg md:text-xl bg-gray-900 bg-opacity-25 rounded-xl backdrop-blur-xl w-full py-6 px-4 border-2 border-white">
        //                     <h3 className="text-xl md:text-2xl">
        //                         Endorsed by Earthood: A Testament to Reliability
        //                     </h3>
        //                     Earthood's endorsement highlights the reliability
        //                     and effectiveness of our technology, affirming our
        //                     dedication to delivering top-tier precision in
        //                     environmental monitoring.
        //                 </div>
        //             </div>
        //             <div></div>
        //         </div>
        //     </section>
        // </div>
    );
};

export default OurTechnology;

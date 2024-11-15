import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const NavigateAnim = () => {
    const container = useRef();

    useGSAP(() => {
        let solutionTimeln = gsap.timeline({
            scrollTrigger: {
                trigger: '.navigations-section',
                pin: true,
                pinSpacing: true,
                start: 'left-=120px left',
                end: '+=3000',
                scrub: 1,
                marker: true,
                snap: 1 / 3,
            },
        });

        solutionTimeln.addLabel('navigation1');
        solutionTimeln.to('.navigation-1', {
            yPercent: 0,
            opacity: 1,
        });

        solutionTimeln.from('.navigation-2', {
            scale: 0.7,
            yPercent: 65,
        });
        solutionTimeln.addLabel('navigation2');

        solutionTimeln.to(
            '.navigation-1',
            {
                scale: 1,
                yPercent: -0.5,
            },
            '-=0.3'
        );

        solutionTimeln.to('.navigation-2', {
            yPercent: 0,
        });

        solutionTimeln.from('.navigation-3', {
            scale: 0.6,
            yPercent: 75,
        });
        solutionTimeln.addLabel('navigation3');

        solutionTimeln.to(
            '.navigation-2',
            {
                scale: 1,
                yPercent: -0.4,
                // opacity: 0.6,
            },
            '-=0.3'
        );

        solutionTimeln.to('.navigation-3', {
            yPercent: 0,
            // opacity: 1,
        });

        solutionTimeln.to('.navigation-3', {});
    });
    return (
        <section
            className="lg:px-[95px] mt-14 h-screen navigations-section overflow-hidden anim-bg"
            ref={container}
        >
            <div className="navigations">
                <div className="navigation navigation-1 rounded-[1.75rem]  z-30">
                    <div className="overflow-hidden relative h-[80vh] w-full rounded-lg">
                        <Image
                            loading="lazy"
                            src="/images/home/navigate_1.png"
                            alt="Article Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="text-white absolute top-10 md:top-32 left-10 md:left-28 w-2/3">
                            <h2 className="text-3xl md:text-5xl  font-extrabold leading-[2.4rem] md:leading-[4.4rem]">
                                Navigate ESG with Expertise
                            </h2>
                            <p className="mt-8 text-[18px] font-medium md:text-[22px] leading-[1.71rem]">
                                Elevate your corporate sustainability narrative
                                with our comprehensive ESG consulting services.
                                From meticulous reporting to acquiring
                                recognised certifications, our tools are
                                designed to streamline your sustainability
                                journey and enhance your brands green
                                credentials.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="navigation navigation-2 rounded-[1.75rem] z-30">
                    <div className="overflow-hidden relative h-[80vh] w-full rounded-lg">
                        <Image
                            loading="lazy"
                            src="/images/home/navigate_2.png"
                            alt="Article Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="text-white absolute top-10 md:top-32 left-10 md:left-28 w-[80%] md:w-2/3">
                            <h2 className="text-3xl md:text-5xl font-extrabold leading-[2.4rem] md:leading-[4.4rem]">
                                Personalized Pathways to Net Zero
                            </h2>
                            <p className="mt-8 font-medium text-[18px] md:text-[22px] leading-[1.71rem]">
                                Utilize our Life Cycle Assessment (LCA) to
                                dissect your products environmental impact at
                                every stage. Armed with insights, we will help
                                you formulate and execute a personalised
                                net-zero plan. For instance our API effortlessly
                                weaves carbon tracking and offsetting into your
                                customer interactions, enhancing user experience
                                while underlining your commitment to
                                sustainability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="navigation navigation-3 rounded-[1.75rem] z-30">
                    <div className="overflow-hidden relative h-[80vh] full rounded-lg">
                        <Image
                            loading="lazy"
                            src="/images/home/navigate_3.png"
                            alt="Article Image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="text-white absolute top-10 md:top-32 left-10  w-[80%] md:left-28 md:w-2/3">
                            <h2 className=" font-extrabold text-3xl md:text-5xl md:font-extrabold md:leading-[4.4rem]">
                                Customize Your Climate Commitment
                            </h2>
                            <p className="mt-8 font-medium text-[18px] md:text-[22px] leading-[1.71rem]">
                                We offer personalised solutions that align with
                                your companys goals, initiating projects that
                                deliver on specific sustainability outcomes and
                                corporate pledges. Craft your unique climate
                                strategy with our tailored solutions, including
                                bulk carbon credit purchases and bespoke
                                off-take agreements to ensure a reliable credit
                                supply over an extended duration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <section
        //     className="lg:px-8 lg:mt-14 h-screen navigations-section overflow-hidden anim-bg"
        //     ref={container}
        // >
        //     <div className="navigations grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        //         <div className="navigation navigation-1 rounded-lg">
        //             <div className="overflow-hidden relative h-[70vh] sm:h-[80vh] lg:h-full rounded-lg">
        //                 <Image loading="lazy"
        //                     {100}
        //                     src="/images/home/navigate_1.png"
        //                     alt="Article Image"
        //                     layout="fill"
        //                     objectFit="cover"
        //                 />
        //                 <div className="text-white absolute top-4 sm:top-32 left-4 sm:left-28 lg:left-20 w-full sm:w-2/3">
        //                     <h2 className="text-2xl sm:text-5xl font-extrabold leading-tight sm:leading-[4.4rem]">
        //                         Navigate ESG with Expertise
        //                     </h2>
        //                     <p className="mt-4 sm:mt-8 font-medium text-base sm:text-[22px] leading-normal sm:leading-[1.71rem]">
        //                         Elevate your corporate sustainability narrative
        //                         with our comprehensive ESG consulting services.
        //                         From meticulous reporting to acquiring
        //                         recognised certifications, our tools are
        //                         designed to streamline your sustainability
        //                         journey and enhance your brand's green
        //                         credentials.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="navigation navigation-2 rounded-lg">
        //             <div className="overflow-hidden relative h-[70vh] sm:h-[80vh] lg:h-full rounded-lg">
        //                 <Image loading="lazy"
        //                     {100}
        //                     src="/images/home/navigate_2.png"
        //                     alt="Article Image"
        //                     layout="fill"
        //                     objectFit="cover"
        //                 />
        //                 <div className="text-white absolute top-4 sm:top-32 left-4 sm:left-28 lg:left-20 w-full sm:w-2/3">
        //                     <h2 className="text-2xl sm:text-5xl font-extrabold leading-tight sm:leading-[4.4rem]">
        //                         Personalized Pathways to Net Zero
        //                     </h2>
        //                     <p className="mt-4 sm:mt-8 font-medium text-base sm:text-[22px] leading-normal sm:leading-[1.71rem]">
        //                         Utilize our Life Cycle Assessment (LCA) to
        //                         dissect your product's environmental impact at
        //                         every stage. Armed with insights, we will help
        //                         you formulate and execute a personalized
        //                         net-zero plan. For instance, our API
        //                         effortlessly weaves carbon tracking and
        //                         offsetting into your customer interactions,
        //                         enhancing user experience while underlining your
        //                         commitment to sustainability.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="navigation navigation-3 rounded-lg">
        //             <div className="overflow-hidden relative h-[70vh] sm:h-[80vh] lg:h-full rounded-lg">
        //                 <Image loading="lazy"
        //                     {100}
        //                     src="/images/home/navigate_3.png"
        //                     alt="Article Image"
        //                     layout="fill"
        //                     objectFit="cover"
        //                 />
        //                 <div className="text-white absolute top-4 sm:top-32 left-4 sm:left-28 lg:left-20 w-full sm:w-2/3">
        //                     <h2 className="text-2xl sm:text-5xl font-extrabold leading-tight sm:leading-[4.4rem]">
        //                         Customize Your Climate Commitment
        //                     </h2>
        //                     <p className="mt-4 sm:mt-8 font-medium text-base sm:text-[22px] leading-normal sm:leading-[1.71rem]">
        //                         We offer personalized solutions that align with
        //                         your company's goals, initiating projects that
        //                         deliver on specific sustainability outcomes and
        //                         corporate pledges. Craft your unique climate
        //                         strategy with our tailored solutions, including
        //                         bulk carbon credit purchases and bespoke
        //                         off-take agreements to ensure a reliable credit
        //                         supply over an extended duration.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default NavigateAnim;

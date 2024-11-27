import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const OurValues = ({ sectionRefs }) => {
    const contentRef = useRef(null);

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
    "name": "Our Values",
    "item": "https://sustainology.life/about-us#our-values"  
  }]
}`;
      

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('animate-slide-up');
                }
            });
        });

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = cleanSeoScript;
        document.head.appendChild(script);

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (script.parentNode) {
                document.head.removeChild(script);
          }





























































































































































































































































































































































































































































































          
            if (contentRef.current) {
                observer?.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <selection
            className="relative"
            id="our-values"
            ref={(el) => (sectionRefs.current[1] = el)}
        >
            <div className="absolute -z-10    w-full h-[752px]">
                <div className="absolute right-0 z-10 h-[608.54px]">
                    <Image
                        loading="lazy"
                        src="/right-our-right.png"
                        alt="vector1"
                        className="h-full w-full"
                        sizes="100vw"
                        height={609.54}
                        width={881.27}
                    />
                </div>
                <div className="absolute top-48   h-[521.87px] left-0 -z-10">
                    <Image
                        loading="lazy"
                        src="/right-our-value.png"
                        alt="vector2"
                        className="h-full w-full"
                        sizes="100vw"
                        height={521.87}
                        width={745.71}
                    />
                </div>
                <div className="absolute h-full w-full -top-8 -z-10">
                    <Image
                        loading="lazy"
                        src="/our-values-mid.png"
                        alt="vector2"
                        className="h-full w-full"
                        sizes="100vw"
                        height={521.87}
                        width={745.71}
                    />
                </div>
            </div>
            <div className="lg:px-[95px] px-10 ">
                <div className=" relative backdrop-blur-3xl  lg:h-[452.24px] rounded-[20px] border border-white w-full  flex justify-center items-center gradient-our-value ">
                    <div ref={contentRef}>
                        <h2 className="font-bold md:text-[52px]  md:leading-[70.51px] text-4xl text-[#2A3C5B] text-center ">
                            Our Values
                        </h2>
                        <div className="grid lg:grid-cols-3  mt-7 mb-9 lg:mt-10 ">
                            <div className="lg:border-e-2 px-8   border-e-[#CCCCCC] ">
                                <h3 className="font-bold text-2xl md:text-[32px] md:leading-[43.39px] text-center text-[#4C4C4C]">
                                    Transparency
                                </h3>
                                <p className="mt-3 font-semibold text-lg md:text-xl leading-[26px] text-[#808080] text-center">
                                    We practice unwavering transparency,
                                    lighting the way for trust and clarity in
                                    our pursuit of a sustainable world.
                                </p>
                            </div>
                            <div className=" lg:border-e-2 px-8 max-lg:mt-4  border-e-[#CCCCCC] ">
                                <h3 className="font-bold md:text-[32px] md:leading-[43.39px] text-center text-2xl text-[#4C4C4C]">
                                    Accountability
                                </h3>
                                <p className="mt-3 font-semibold text-lg md:text-xl leading-[26px] text-[#808080] text-center">
                                    Our commitment is our compass, guiding us to
                                    take responsible actions for our collective
                                    environmental future.
                                </p>
                            </div>
                            <div className=" px-8  max-lg:mt-4 ">
                                <h3 className="font-bold md:text-[32px] md:leading-[43.39px] text-2xl text-center text-[#4C4C4C]">
                                    Forward thinking
                                </h3>
                                <p className="mt-3 font-semibold text-lg md:text-xl leading-[26px] text-[#808080] text-center">
                                    {"We're"} always looking ahead, proactively
                                    shaping the future with sustainable
                                    solutions beyond {"today's"}
                                    challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </selection>
    );
};

export default OurValues;

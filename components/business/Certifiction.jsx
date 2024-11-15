import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Certification = ({ sectionRefs }) => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="certification"
            className="py-10 md:py-28 certification-bg bg-[url('/images/business/certbg.png')] bg-center bg-cover"
            // style={{ backgroundPositionY: `${offsetY}px` }}
            ref={(el) => (sectionRefs.current[2] = el)}
        >
            <div class="parallax-item lg:px-[95px]">
                <h3 className="text-center font-bold text-5xl md:text-[52px] md:leading-[62px] leading-[52px] text-[#ffffff]">
                    Green building certification
                </h3>
                <p className="px-10 mt-8 text-[18px] md:text-2xl leading-8 font-medium text-[#ffffff] text-center sm:text-left">
                    Sustainology excels in facilitating green building
                    certifications, ensuring your projects meet the highest
                    standards of environmental sustainability. Our services
                    encompass the full spectrum of certification processes, from
                    initial design consultation to final certification, aligned
                    with leading global and local eco-friendly standards.  With
                    our in-house team of trained auditors, we offer tailored
                    support, including custom certification development,
                    comprehensive advisory, and rigorous audits, to make your
                    building projects exemplars of sustainable design and
                    construction.
                </p>
            </div>
            <div className="lg:px-[95px]">
                <div className="mt-10 md:mt-28 bg-[#ffffffba] rounded-[20px] backdrop-blur-sm py-8">
                    <div class="certificate-scroll-container">
                        <div class="certificate-scrolling-wrapper">
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon1.png"
                                alt=""
                                width={381}
                                height={100}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon2.png"
                                alt=""
                                width={72}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon3.png"
                                alt=""
                                width={166}
                                height={80}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon4.png"
                                alt=""
                                width={95}
                                height={80}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon5.png"
                                alt=""
                                width={140}
                                height={88}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon6.png"
                                alt=""
                                width={219}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon7.png"
                                alt=""
                                width={72}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon8.png"
                                alt=""
                                width={248}
                                height={80}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon9.png"
                                alt=""
                                width={143}
                                height={72}
                                className=""
                            />
                        </div>
                    </div>
                    <div class="certificate-scroll-container mt-[72px]">
                        <div class="certificate-scrolling-wrapper reverse">
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon10.png"
                                alt=""
                                width={182.86}
                                height={44}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon11.png"
                                alt=""
                                width={72}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon12.png"
                                alt=""
                                width={160.38}
                                height={68}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon13.png"
                                alt=""
                                width={72}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon14.png"
                                alt=""
                                width={102.66}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon15.png"
                                alt=""
                                width={204.88}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon16.png"
                                alt=""
                                width={145.04}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon17.png"
                                alt=""
                                width={124.66}
                                height={72}
                                className=""
                            />
                            <Image
                                loading="lazy"
                                src="/images/business/logos/icon18.png"
                                alt=""
                                width={178.38}
                                height={48}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certification;

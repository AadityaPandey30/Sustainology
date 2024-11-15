import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Consulting = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="consulting"
            className="md:py-28 certification-bg bg-[url('/images/business/consulting.png')] bg-center bg-cover"
            // style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
        >
            <div className="lg:px-[95px] px-10">
                <h3 className="text-center font-bold text-4xl md:text-[44px] leading-[52px] md:leading-[62px] text-[#ffffff]">
                    Green building consulting-
                    <br />
                    Sustainable Design & Advisory Services
                </h3>

                <ul className="mt-8 flex flex-col gap-5 text-[18px] md:text-[22px] leading-[29px] font-medium text-[#ffffff] custom-icons">
                    <li>
                        <strong>Building Physics Analysis : </strong>
                        Harness our advanced diagnostics to enhance comfort,
                        efficiency, and performance across all building types,
                        ensuring your project excels in sustainable operation.
                    </li>
                    <li>
                        <strong>Sustainability Integration : </strong>
                        Join our cross-disciplinary workshops and infuse every
                        aspect of your design with sustainable practices,
                        grounded in our deep expertise and innovative approach.
                    </li>
                    <li>
                        <strong>ASHRAE-Based Energy & HVAC Design :</strong>
                        Benefit from our meticulous energy use and climate
                        control system calculations, ensuring optimized
                        performance that adheres to ASHRAE standards.
                    </li>
                    <li>
                        <strong>Water Budgeting : </strong>
                        Collaborate on strategic planning for water use
                        efficiency, targeting conservation and net-zero
                        objectives with smart, actionable plans.
                    </li>
                    <li>
                        <strong>Post-Occupancy Evaluation :</strong>
                        Engage with us for detailed audits and policy
                        development, creating a blueprint for ongoing
                        environmental stewardship well beyond the
                        ribbon-cutting.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Consulting;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Simulation = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="simulation"
            className="py-10 md:py-28 px-10 lg:px-[95px] certification-bg bg-[url('/images/business/Simulation.png')] bg-center bg-cover"
            // style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
        >
            <div className="font-extrabold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-[#ffffff] text-center">
                <h2>Building Performance Simulation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-14 mt-10  ">
                <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff5b] opacity-75 hover:opacity-100 border-card">
                    <h3 className="font-bold text-[2rem] leading-[2rem] text-[#ffffff] text-center break-words">
                        Energy Modeling
                    </h3>
                    <p className="font-semibold text-xl leading-[1.625rem] text-[#ffffff] text-center mt-7">
                        Custom simulation of building parameters to select
                        Energy Conservation Measures (ECMs) balancing ROI,
                        comfort, and efficiency
                    </p>
                </div>
                <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff5b] opacity-75 hover:opacity-100 border-card">
                    <h3 className="font-bold text-[2rem] leading-[2rem] text-[#ffffff] text-center">
                        Thermal Comfort Analysis
                    </h3>
                    <p className="font-semibold text-xl leading-[1.625rem] text-[#ffffff] text-center mt-7">
                        Employing Computational Fluid Dynamics (CFD) to craft
                        indoor environments that ensure comfort and energy
                        balance
                    </p>
                </div>
                <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff5b] opacity-75 hover:opacity-100 border-card">
                    <h3 className="font-bold text-[2rem] leading-[2rem] text-[#ffffff] text-center">
                        Daylight and Lighting Study
                    </h3>
                    <p className="font-semibold text-xl leading-[1.625rem] text-[#ffffff] text-center mt-7">
                        Conducting analyses using Autodesk® Ecotect® to
                        enhance daylight use and comply with LEED daylighting
                        requirements
                    </p>
                </div>
                <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff5b] opacity-75 hover:opacity-100 border-card">
                    <h3 className="font-bold text-[2rem] leading-[2rem] text-[#ffffff] text-center">
                        Acoustical Environment Optimisation
                    </h3>
                    <p className="font-semibold text-xl leading-[1.625rem] text-[#ffffff] text-center mt-7">
                        Utilizing advanced software for acoustical analysis,
                        targeting ideal reverberation levels for optimized
                        interior acoustics
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Simulation;

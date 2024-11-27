import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-r from-[#c9ddb4b5] to-[#8995ab62] p-2 pb-[5%]">
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
                    Xx tonnes of CO2 emission reduction estimated by 2030 
                </p>
            </div>
            <div className="mx-auto w-[90%] max-w-6xl p-8 bg-[#33496F] rounded-[15px] my-8 text-center">
                <p className="text-sm md:text-3xl text-white">
                    Xx million hectares of Nature-based carbon assets under
                    management 
                </p>
            </div>
        </section>
    );
};

export default AboutUs;

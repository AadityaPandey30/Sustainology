import React from 'react';
import Link from 'next/link';

const Clearance = ({ sectionRefs }) => {
    return (
        <section
            className="lg:px-[95px] sm:py-24 py-10 px-10 clearance-container"
            id="bu-5"
            ref={(el) => (sectionRefs.current[4] = el)}
        >
            <div className="grid grid-cols-5">
                <div className="lg:col-span-3 md:col-span-4 col-span-5  bg-[#ffffff90] rounded-[20px] backdrop-blur-md py-11 px-5 sm:px-16">
                    <div>
                        <h3 className="font-extrabold text-3xl leading-[40px] text-[#33496F] sm:text-left text-center">
                            Navigating Environmental Clearance & Energy Audits
                        </h3>
                        <ul className="mt-10 flex flex-col gap-6 sm:text-lg leading-[24px] font-medium text-[#666666] custom-icons icon-dark">
                            <li>
                                <strong className="text-[#333333]">
                                    Environmental Clearance Compliance :{' '}
                                </strong>
                                Expert guidance through the Middle East's
                                environmental regulations for project clearance,
                                including impact assessments and mitigation
                                strategies.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Customized Energy Audits :{' '}
                                </strong>
                                Comprehensive energy audits that conform to
                                regional standards, identifying efficiency
                                opportunities and optimizing energy consumption.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Regulatory Expertise :
                                </strong>
                                Leveraging our UAE base, Sustainology's in-depth
                                knowledge of environmental regulations across
                                the Middle East ensures that your projects are
                                compliant with all regional legal requirements.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Sustainable Project Delivery :{' '}
                                </strong>
                                Leveraging our local expertise to facilitate a
                                smooth approval process and promote sustainable
                                development practices.
                            </li>
                        </ul>
                        <div className="sm:mr-28 mt-12">
                            <Link href="contact-us">
                                <button class=" text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] sm:w-2/3 w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clearance;

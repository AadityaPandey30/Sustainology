import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

const RedirectBanner = ({ sectionRefs }) => {
    return (
        <section
            className="redirect-banner-container md:mt-40 mt-20"
            id="individual-treetology"
            ref={(el) => (sectionRefs.current[3] = el)}
        >
            <div className="redirection-img">
                <div className="h-full w-full bg-[#1414148c]">
                    <div className="h-full flex justify-center items-center text-white lg:px-0 max-md:px-2">
                        <div className="text-center md:w-[55%]">
                            <h3 className=" font-bold md:text-5xl md:leading-[3.625rem] text-4xl">
                                Embrace Nature with Treetology : <br />
                                Plant and Adopt Your Tree Today
                            </h3>
                            <p className="mt-8 md:text-2xl md:leading-[1.56rem] text-[1.3rem] leading-[1.3rem]">
                                Adopting a tree is as easy as ordering food
                                online. Adopt a tree with Treetology and watch
                                your environmental impact grow as local
                                communities nurture it on your behalf
                            </p>
                            <div className="w-full mt-24  md:px-24 lg:px-44">
                                <Link
                                    target="_treetology"
                                    href="http://www.treetology.com"
                                >
                                    <div className="font-bold rounded-xl w-full text-lg md:text-xl px-5  py-[0.625rem] mt-4 text-[#2F5738] bg-white hover:text-white hover:bg-[#2F5738] border border-[#2F5738] outline-none pb-3">
                                        Visit Website
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedirectBanner;

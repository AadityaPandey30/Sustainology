import React from 'react';
import { useRouter } from 'next/navigation';

const ProjectVerification = ({ sectionRefs }) => {
    const router = useRouter();
    return (
        <>
            <div className="w-ful">
                <h3 className="font-bold md:text-[3.25rem]  md:leading-[4.37rem] text-4xl text-[#2A3C5B]">
                    Project Under Verification
                </h3>
            </div>
            <div className="mt-2">
                <p className="font-semibold md:text-[1.75rem] md:leading-[2.31rem] text-xl text-[#4C4C4C]">
                    Participate in the pre sale of credits and lock in the price
                    of credits for the coming years{' '}
                </p>
            </div>
            <div className="mt-10">
                <button
                    className="py-[10px] pb-[12px] px-5  rounded-lg bg-[#2F5738] font-semibold text-xl text-[#FEFEFD] md:w-1/2 w-full"
                    onClick={() => router.push('/contact-us')}
                >
                    Contact Us
                </button>
            </div>
        </>
    );
};

export default ProjectVerification;

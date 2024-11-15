import React from 'react';
import Image from 'next/image';

const ProjectShortInfo = ({ projectDetails }) => {
    return (
        <section className="pt-2 lg:px-[95px] px-10 lg:w-[88%]">
            <div className="sm:flex justify-between text-2xl md:text-[1.75rem] md:leading-[2.37rem] space-y-4 text-[#4C4C4C]">
                <Image
                    loading="lazy"
                    src={projectDetails?.registryLogo || ''}
                    alt=""
                    height={80}
                    width={146.45}
                />
                <p className=" font-semibold ">
                    Registry Name
                    <br />
                    <span className="font-medium md:text-xl text-lg text-[#666666]">
                        {projectDetails?.registryName}
                    </span>
                </p>
                {/* <p className=" font-semibold">
                    Registry ID
                    <br />
                    <span className="font-medium text-xl text-[#666666]">
                        {projectDetails?.registryId}
                    </span>
                </p> */}
                <p className=" font-semibold">
                    Methodology
                    <br />
                    <span className="font-medium md:text-xl text-lg text-[#666666]">
                        {projectDetails?.methodologyCode}
                    </span>
                </p>
            </div>
        </section>
    );
};

export default ProjectShortInfo;

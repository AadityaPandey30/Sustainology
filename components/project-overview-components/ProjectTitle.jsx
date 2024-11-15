import React from 'react';

const ProjectTitle = ({ projectDetails, sectionRefs }) => {
    return (
        <section className="pt-2 lg:px-[95px] px-10 mt-10 lg:w-[95%]">
            <span id="overview" ref={(el) => (sectionRefs.current[0] = el)}>
                <h2 className="font-bold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-[#2A3C5B]">
                    {projectDetails?.title}
                </h2>
                <div className="md:my-10 my-5 md:flex text-[#333333] font-semibold text-lg md:leading-[1.52rem] md:space-x-10  items-center">
                    <p className="flex items-center capitalize divide-x-8">
                        {/* <Image loading="lazy"
                        {100}
                        src="/flagblack.svg"
                        height={20}
                        width={28}
                        alt=""
                    /> */}
                        {projectDetails?.location?.country}
                    </p>
                    <div
                        className="hidden md:block"
                        style={{
                            borderLeft: ' 2px solid rgba(161, 158, 167, 0.8)',
                            height: '30px',
                            marginLeft: '5%',
                        }}
                    ></div>
                    <p className="flex items-center capitalize">
                        {projectDetails?.area}
                    </p>
                    <div
                        className="hidden md:block"
                        style={{
                            borderLeft: ' 2px solid rgba(161, 158, 167, 0.8)',
                            height: '30px',
                            marginLeft: '5%',
                        }}
                    ></div>
                    <p className="flex items-center capitalize">
                        Project ID : {projectDetails?.projectId}
                    </p>
                    <div
                        className="hidden md:block"
                        style={{
                            borderLeft: ' 2px solid rgba(161, 158, 167, 0.8)',
                            height: '30px',
                            marginLeft: '5%',
                        }}
                    ></div>
                    <p className="flex items-center capitalize">
                        Proponent : {projectDetails?.developer}
                    </p>
                    <div
                        className="hidden md:block"
                        style={{
                            borderLeft: ' 2px solid rgba(161, 158, 167, 0.8)',
                            height: '30px',
                            marginLeft: '5%',
                        }}
                    ></div>
                    <p className="flex items-center capitalize">
                        Project Type : {projectDetails?.type}{' '}
                    </p>
                </div>
            </span>
            {/* <div className="text-[#666666] font-medium md:text-xl md:leading-[2rem] text-lg">
                <p className="break-words">{projectDetails?.description}</p>
            </div> */}
            <div className="text-[#666666] font-medium md:text-xl md:leading-[2rem] text-lg py-6 md:py-24 blog-content">
                <div
                    dangerouslySetInnerHTML={{
                        __html: projectDetails?.description,
                    }}
                    style={{
                        whiteSpace: 'pre-line',
                        lineHeight: '1.6',
                        textAlign: 'justify',
                    }}
                />
            </div>
        </section>
    );
};

export default ProjectTitle;

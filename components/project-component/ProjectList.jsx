import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { IoMdArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { useFetch } from '../../hook/getDataOnLoad';
import gsap from 'gsap';

const ProjectList = ({ setIsScrolled, isHome = false }) => {
    const [imageUrl, setImageUrl] = useState('');
    const { data, error, isLoading } = useFetch({
        url: `/project/allTop`,
    });

    const projectData = data?.response?.getTopProjects;
    const imageRef = useRef();

    const styles = {
        // backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '970px', // Adjust the height as needed
        maxWidth: '100%',
        zIndex: -10,

        transition: 'background-image 2s ease-in-out', // Adjust the transition properties

        backgroundImage: `linear-gradient(90.24deg, rgba(9, 9, 9, 0.65) 0.22%, rgba(9, 9, 9, 0.65)0.22%), url(${imageUrl})`,
    };

    const stylesPlain = {
        // backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '970px', // Adjust the height as needed
        maxWidth: '100%',
        zIndex: -20,

        backgroundImage: 'linear-gradient(180deg, #E0EBD4 0%, #FFFFFF 97.75%)',
    };

    useEffect(() => {
        if (projectData?.length > 0) {
            handelHover(projectData?.[0]?.images[0]?.image);
        }
    }, [projectData]);

    const handelHover = (image) => {
        // const tl = gsap.timeline();
        // tl.from(imageRef.current, { opacity: 0, duration: 0.5 }).to(
        //     imageRef.current,
        //     { opacity: 1, duration: 0.5 }
        // );
        // tl.kill();
        setImageUrl(image || projectData?.[0]?.images[0].image);
        setIsScrolled(false);
    };

    return (
        <section className="relative">
            <div
                ref={imageRef}
                className="h-[970px]  absolute  w-full"
                style={imageUrl ? styles : stylesPlain}
            >
                <div
                    className={` ${
                        imageUrl ? 'hidden' : 'block'
                    } absolute right-0  -top-12 -z-10`}
                >
                    <Image
                        loading="lazy"
                        src="/Vector6.svg"
                        alt="shade1"
                        height={425.43}
                        width={613.5}
                    />
                    <div className="absolute top-48 left-48">
                        <Image
                            loading="lazy"
                            src="/Vector5.svg"
                            className="w-full"
                            alt="shade2"
                            height={491.32}
                            width={584.82}
                        />
                    </div>
                </div>
            </div>

            <div className=" h-[970px] overflow-y-auto   pt-2 lg:px-[95px] px-10  ">
                <div className="lg:mt-28 mt-20 flex justify-center">
                    <div className="md:w-[59rem] ">
                        <h2
                            className={`font-bold md:text-[2.75rem] md:mb-2 uppercase text-4xl ${
                                imageUrl ? 'text-white' : 'text-[#33496F]'
                            } text-center`}
                        >
                            Marketplace
                        </h2>
                        {!isHome && (
                            <p
                                className={`font-medium md:text-2xl sm:text-xl text-lg  max-md:mt-10 text-center ${
                                    imageUrl ? 'text-white' : 'text-[#666666]'
                                }`}
                            >
                                Our projects merge environmental care with
                                community upliftment, ensuring each carbon
                                credit symbolizes a significant, positive
                                impact. Through stringent verification and
                                ecological preservation, we provide high-quality
                                carbon credits that benefit the planet and local
                                communities.
                            </p>
                        )}
                    </div>
                </div>
                <div className=" lg:mt-24 mt-10">
                    {projectData?.map((project, index) => {
                        return (
                            <Link
                                href={`/project-overview/${project.slug}`}
                                className={` lg:w-[70%] md:w-[80%] flex justify-between ${
                                    projectData?.length - 1 === index
                                        ? ''
                                        : 'border-b-2'
                                } py-9 hover:backdrop-blur transition-all ease-in-out group duration-700 md:hover:w-[98%] lg:hover:w-[90%] w-full   cursor-pointer `}
                                key={project?._id}
                                onMouseEnter={() =>
                                    handelHover(project?.images[0]?.image)
                                }
                                onMouseLeave={() => {
                                    handelHover('');
                                }}
                            >
                                <div className="md:flex justify-between w-3/4">
                                    <p
                                        className={`pr-20 font-medium  md:text-lg leading-6 ${
                                            imageUrl
                                                ? 'text-white'
                                                : 'text-[#666666]'
                                        }`}
                                    >
                                        {project?.year}
                                    </p>

                                    <div
                                        className={` ${
                                            imageUrl
                                                ? 'text-[white]'
                                                : 'text-[#666666]'
                                        } w-[100%] transition-all duration-700 ease-in-out   break-words `}
                                    >
                                        <p
                                            className={`font-semibold text-[1.4rem] leading-8  md:text-2xl ${
                                                imageUrl
                                                    ? 'text-white'
                                                    : 'text-[#33496F]'
                                            } capitalize truncate`}
                                        >
                                            {project.title}
                                        </p>
                                        <div className="flex mt-3 font-semibold ">
                                            <div className="text-lg pr-2 sm:pr-3 leading-6 flex items-start ">
                                                {imageUrl ? (
                                                    <Image
                                                        loading="lazy"
                                                        src={'/flag.svg'}
                                                        alt=""
                                                        className="mt-[6px]"
                                                        width={18.38}
                                                        height={14}
                                                    />
                                                ) : (
                                                    <Image
                                                        loading="lazy"
                                                        src={'/flagblack.svg'}
                                                        className="mt-[6px]"
                                                        alt=""
                                                        width={18.38}
                                                        height={14}
                                                    />
                                                )}

                                                <p className="ml-1 capitalize">
                                                    {project?.location?.country}
                                                </p>
                                            </div>
                                            <div
                                                className={`border ${
                                                    imageUrl
                                                        ? 'border-white'
                                                        : 'border-[#A19EA7]'
                                                }  `}
                                            ></div>
                                            <p className="pl-2 sm:pl-3">
                                                {project?.area}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mt-2 transition-all duration-300 ease-in-out">
                                    {/* <Image loading="lazy"

                                            src={'/rightArrowGray.svg'}
                                            alt="right_arrow"
                                            height={24}
                                            width={24}
                                        /> */}
                                    {imageUrl === project?.images[0] ? (
                                        <MdArrowOutward
                                            className={`${
                                                imageUrl
                                                    ? 'text-white'
                                                    : 'text-[#666666]'
                                            } text-xl`}
                                        />
                                    ) : (
                                        <IoMdArrowForward
                                            className={`${
                                                imageUrl
                                                    ? 'text-white'
                                                    : 'text-[#666666]'
                                            } text-xl`}
                                        />
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;

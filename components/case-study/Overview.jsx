import React from 'react';
import Image from 'next/image';
import { calculateReadTime } from '../../utils/utils';
import Link from 'next/link';

const Overview = ({ blog }) => {
    const { title, image, author_name, createdAt, content, mediaURL, tags } =
        blog || {};

    const dateObject = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    const removeHtmlTags = (str) => {
        return str?.replace(/<[^>]*>/g, '');
    };
    console.log('mediaURL', blog);
    return (
        <div className="container mx-auto px-5 lg:px-[95px]  mb-12 md:mb-20">
            <div className=" container mx-auto pt-20 md:pt-32 pb-[10px] md:pb-[83px] text-center font-bold text-4xl md:text-[44px] md:leading-[60px] leading-[52px]">
                <h1 className="text-[#33496F]">{title}</h1>
            </div>
            <div className="flex max-sm:flex-wrap gap-2 justify-between lg:grid lg:grid-cols-3">
                <div className=" flex mt-5 gap-5 max-md:justify-between max-md:w-full">
                    <div className="flex items-center  gap-[10px] ">
                        <Image
                            loading="lazy"
                            src="/images/blogs/calendar.svg"
                            alt="Article Image"
                            height={16}
                            width={16}
                        />
                        <p className="text-[#60718F] text-base font-semibold">
                            {formattedDate}
                        </p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="bg-[#2F5738] rounded-full h-[6.42px] w-[6.42px]"></div>
                        <p className="text-[##2F5738] text-base font-medium">
                            {calculateReadTime(removeHtmlTags(content))}
                        </p>
                    </div>
                </div>
                <div className="lg:block hidden"></div>
                <div className="mt-3 grid grid-cols-3 max-sm:w-full  gap-4">
                    {tags &&
                        tags?.split(',')?.map((tag, index) => (
                            <p
                                key={tag}
                                className={`rounded-s-2xl rounded-e-2xl group-hover:border transition-all duration-300 w-full flex items-center justify-center py-0.5 text-base font-semibold  ${index % 2 ? 'bg-[#EBF3E3] group-hover:border-[#656F5A] text-[#656F5A]' : 'bg-[#F3F4F6] group-hover:border-[#33496F] text-[#33496F]'}`}
                            >
                                <span className="text-center">{tag}</span>
                            </p>
                        ))}
                </div>
            </div>

            <div className="relative mt-12 md:mt-12  w-full rounded-[20px]">
                <div className="w-full  ">
                    <Image
                        loading="lazy"
                        src={Array.isArray(image) ? image?.[0] : image}
                        alt="Article Image"
                        width={1176}
                        height={588}
                        sizes="100vw"
                        className="rounded-[20px] object-cover h-full w-full"
                    />
                </div>
                {Array.isArray(image) && (
                    <div className="sm:flex hidden absolute left-3 md:left-7 bottom-3 md:bottom-5 border border-[#FFFFFF] bg-[#d0d0d0b7] rounded-xl  items-center gap-4 py-1 px-3">
                        <div className="relative max-sm:h-10 max-sm:w-10  rounded-full h-20 w-20">
                            <Image
                                loading="lazy"
                                src={image?.[1]}
                                alt="Article Image"
                                height={100}
                                width={100}
                                sizes="100vw"
                                className="rounded-full h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="text-[#33496F] max-sm:text-sm text-xl">
                            {author_name}
                        </h3>
                    </div>
                )}
            </div>
            <div className="text-lg py-5 md:py-24 text-center md:text-center break-words">
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                        whiteSpace: 'pre-line',
                        lineHeight: '1.6',
                        textAlign: 'justify',
                    }}
                />
            </div>
            {typeof image === 'string' && (
                <div className="pb-10">
                    <p>
                        <span className="font-bold">Media URL : </span>
                        <Link
                            href={mediaURL || ''}
                            className="text-blue-500"
                            target="_blank"
                        >
                            Click to open
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Overview;

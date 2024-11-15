import React from 'react';
import Image from 'next/image';
import { calculateReadTime } from '../../utils/utils';

const Overview = ({ blog }) => {
    const { title, images, author_name, date, content, tags } = blog || {};

    const dateObject = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    const removeHtmlTags = (str) => {
        return str?.replace(/<[^>]*>/g, '');
    };

    return (
        <div className="container mx-auto px-5 lg:px-[95px] md:pb-20">
            <div className="container mx-auto pt-20 md:pt-32  md:pb-[83px] text-center font-bold text-4xl md:text-[44px] md:leading-[60px] leading-[52px]">
                <h1 className="text-[#33496F]">{title}</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
                <div className="mt-5 flex sm:gap-[40px] max-sm:justify-between">
                    <div className="flex items-center gap-[10px]">
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
                <div className="md:block hidden "></div>
                <div className="mt-3 flex  gap-4">
                    {tags &&
                        tags?.split(',')?.map((tag, index) => (
                            <p
                                key={tag}
                                className={`rounded-full flex  justify-center items-center border transition-all   duration-300 px-3 text-center w-full py-[2px] text-base font-semibold break-words  ${
                                    index % 2
                                        ? 'bg-[#EBF3E3] group-hover:border-[#656F5A] text-[#656F5A]'
                                        : 'bg-[#F3F4F6] group-hover:border-[#33496F] text-[#33496F]'
                                }`}
                            >
                                <span className="text-center">{tag}</span>
                            </p>
                        ))}
                    {/* <span className="bg-[#F3F4F6] rounded-full group-hover:border group-hover:border-[#33496F] transition-all flex items-end justify-center py-0.5 text-base font-semibold text-[#33496F]">
                        Greentech
                    </span>
                    <span className="bg-[#EAF5DF] rounded-full group-hover:border group-hover:border-[#557F2A] transition-all flex items-end justify-center py-0.5 text-base font-semibold text-[#557F2A]">
                        Carbon Credits
                    </span> */}
                </div>
            </div>
            <div className="relative mt-12   w-full rounded-[20px]">
                <Image
                    loading="lazy"
                    src={images?.[1]}
                    alt="Article Image"
                    height={588}
                    width={1176}
                    sizes="100vw"
                    className="rounded-[20px] h-full w-full object-cover "
                />

                <div className=" hidden absolute left-3 md:left-7 bottom-3 md:bottom-5 border border-[#FFFFFF] bg-[#d0d0d0b7] rounded-xl sm:flex items-center gap-4 py-1 px-3">
                    <div className="relative max-sm:h-10 max-sm:w-10  rounded-full  h-20 w-20">
                        <Image
                            loading="lazy"
                            src={images?.[0]}
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
            </div>
            <div className="py-6 md:py-24 blog-content break-words">
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                        whiteSpace: 'pre-line',
                        lineHeight: '1.6',
                        textAlign: 'justify',
                    }}
                />
            </div>
        </div>
    );
};

export default Overview;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { calculateReadTime } from '../../utils/utils';

const Card = ({ blog }) => {
    const {
        _id: id,
        title,
        images,
        author_name,
        date,
        content,
        tags,
    } = blog || {};

    const dateObject = new Date(date);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    const removeHtmlTags = (str) => {
        return str.replace(/<[^>]*>/g, '');
    };

    return (
        <Link className=" cursor-pointer group" href={`/blog/${id}`}>
            <div className="relative h-64 w-full rounded-t">
                <div className="overflow-hidden relative h-64 w-full rounded-t">
                    <Image
                        loading="lazy"
                        src={images?.[1]}
                        alt="Article Image"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-all duration-300"
                    />
                </div>
                <div className="bg-[#282828B0] group-hover:bg-transparent transition-all duration-300 mix-blend-multiply absolute top-0 left-0 right-0 bottom-0 rounded-t"></div>
                <div className="bg-[#41414175] group-hover:bg-[#ffffff75] px-3 absolute bottom-7 left-0 lg:-left-16   lg:group-hover:-left-20 w-full lg:w-[383px] rounded transition-all duration-300">
                    <h2 className="font-bold text-xl md:text-[28px] leading-7 mb-2 text-white group-hover:text-[#33496F] transition-all duration-300">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="mt-5 flex justify-between">
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
            <div className="mt-2 flex justify-between">
                <p className="text-[#666666] text-lg md:text-[22px] font-normal line-clamp-2">
                    {removeHtmlTags(content)}
                </p>
            </div>
            <div className="flex items-center gap-3 mt-6">
                <div className="relative h-8 w-8 rounded-full">
                    <Image
                        loading="lazy"
                        src={images?.[0]}
                        alt="Article Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <h3 className="text-[#60718F] text-lg font-semibold">
                    {author_name}
                </h3>
            </div>
            <div className="mt-3 flex  justify-center gap-4">
                {tags &&
                    tags?.split(',')?.map((tag, index) => (
                        <span
                            key={tag}
                            className={`rounded-full flex justify-center items-center border transition-all   duration-300 px-3 text-center w-full py-[2px] text-base font-semibold break-words  ${index % 2 ? 'bg-[#EBF3E3] group-hover:border-[#656F5A] text-[#656F5A]' : 'bg-[#F3F4F6] group-hover:border-[#33496F] text-[#33496F]'}`}
                        >
                            {tag}
                        </span>
                    ))}
            </div>
        </Link>
    );
};

export default Card;

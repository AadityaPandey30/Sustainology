import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { calculateReadTime } from '../../utils/utils';

const Card = ({ event }) => {
    const {
        _id: id,
        title,
        image,
        creationDate,
        content,
        location,
    } = event || {};

    const dateObject = new Date(creationDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    const removeHtmlTags = (str) => {
        return str.replace(/<[^>]*>/g, '');
    };

    console.log('image', event);

    return (
        <Link
            className="ml-20 cursor-pointer group"
            href={`/press-events/${id}`}
        >
            <div className="relative h-64 w-full rounded-t">
                <div className="overflow-hidden relative h-64 w-full rounded-t">
                    <Image
                        loading="lazy"
                        src={image || '/project_overview.png'}
                        alt="Article Image"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-all duration-300"
                    />
                </div>
                <div className="bg-[#282828B0] group-hover:bg-transparent transition-all duration-300 mix-blend-multiply absolute top-0 left-0 right-0 bottom-0 rounded-t"></div>
                <div className="bg-[#41414175] group-hover:bg-[#ffffff75] px-3 absolute bottom-7 left-0 lg:-left-16 lg:group-hover:-left-20 w-full  lg:w-[383px] rounded transition-all duration-300">
                    <h2 className="font-bold text-xl md:text-[28px] leading-7 mb-2 text-white group-hover:text-[#33496F] transition-all duration-300">
                        {location}
                    </h2>
                </div>
            </div>
            <div className="mt-5 flex justify-between">
                <p className="text-[#33496F] text-2xl font-semibold line-clamp-2">
                    {title}
                </p>
            </div>
            <div className="mt-2 flex justify-between">
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
            </div>
        </Link>
    );
};

export default Card;

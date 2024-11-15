import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigate = () => {
    return (
        <section className="mx-auto px-[132px] pt-14 h-screen">
            <div className="overflow-hidden relative h-full w-full rounded-lg">
                <Image
                    loading="lazy"
                    src="/images/home/navigate_1.png"
                    alt="Article Image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="text-white absolute top-32 left-28 w-1/2">
                    <h2 className="text-5xl font-extrabold leading-[4.4rem]">
                        Navigate ESG with Expertise
                    </h2>
                    <p className="mt-8 font-medium text-[22px] leading-[1.71rem]">
                        Elevate your corporate sustainability narrative with our
                        comprehensive ESG consulting services. From meticulous
                        reporting to acquiring recognised certifications, our
                        tools are designed to streamline your sustainability
                        journey and enhance your brands green credentials.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Navigate;

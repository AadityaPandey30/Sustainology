import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/faq.css';

const AdditionalServices = () => {
    return (
        <div className=''>
            <div class="relative text-black flex overflow-x-hidden">
                <div class="py-12 animate-marquee whitespace-nowrap flex">

                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo19.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-md"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo20.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo21.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo22.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/icon1.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/icon5.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                </div>

                <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo19.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo20.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo21.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/logo22.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/icon1.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                    <span class="mx-[3%] text-4xl"><Image
                        src="/images/business/logos/icon5.png" // Path relative to the 'public' directory
                        alt="Background"
                        width={200}
                        height={100}
                        layout="responsive"
                        className="max-w-sm"
                    /></span>
                </div>
            </div>

            <div className='md:flex m-4 md:m-auto w-fit my-[6%] '>
                <div className='basis-1/3 max-w-sm'>
                <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-left align-bottom my-6">
                Additional Services
                </h2>
            </div>

                <div className='leading-9 basis-2/3 max-w-3xl'>
                    <p className='text-2xl'><b>Sale Facilitation:</b> Sustainology offers a comprehensive sale facilitation service to ensure maximum visibility and monetization of your carbon credits. This includes expert listing on prominent carbon marketplaces, along with direct sales support on our proprietary Sustainology platform. Our team will handle the end-to-end process, making it seamless for project developers to reach a global audience and achieve optimal value for their credits.</p>
                    <Link href="/contact-us">
                            <button className="text-xl text-white bg-[#33496F] py-2 px-[12%] rounded-[6px] my-6">
                                Contact Us
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;

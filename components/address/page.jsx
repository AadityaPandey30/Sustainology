import Image from 'next/image';
import React from 'react';

const Address = () => {
    return (
        <>
            <div className="flex justify-center py-10 ">
                <p className="text-[52px] font-bold text-[#2A3C5B]">
                    Our Offices
                </p>
            </div>
            <div className="flex justify-center mb-10 flex-wrap max-md:flex-col max-md:items-center gap-6">
                <div className=" w-[268px] h-[309px] mb-10 max-sm:mb-10  bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4] items-center">
                    <Image
                        loading="lazy"
                        src="/dubai.png"
                        width="268"
                        height="119"
                        className="py-4"
                        alt="dubai office image"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">Dubai</p>
                    <p className="px-4 text-[20px] leading-6 font-semibold text-[#4C4C4C]">
                        Mezzanine Floor, The Meydan Hotel, Nad AL Sheba, Dubai -
                        UAE PO Box - 182421
                    </p>
                </div>

                <div className="mb-10 w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4]  items-center">
                    <Image
                        loading="lazy"
                        src="/USA.png"
                        width="268"
                        height="119"
                        className="px-2"
                        alt="usa office image"
                    ></Image>
                    <p className="px-4 py-2 text-[28px] font-bold">U.S.A</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold text-[#4C4C4C]">
                        16192 Coastal Highway, Lewes, Delaware 19958, Country Of
                        Sussex, U.S.A
                    </p>
                </div>
                <div className=" mb-10 max-sm:mb-10 w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4] items-center ">
                    <Image
                        loading="lazy"
                        src="/UK.png"
                        width="268"
                        height="119"
                        className="py-3"
                        alt="uk office image"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">U.K</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold  text-[#4C4C4C]">
                        {/* 2nd Floor College House, 17 King Edwards Road, Ruislip,
                        London, U.K, HA47AE */}
                        23A KENILWORTH GARDENS HAYES ENGLAND UB4 0AY
                    </p>
                </div>
                <div className="w-[268px] h-[309px] bg-gradient-to-r from-[#F6F9F2] to-[#E0EBD4]  items-center">
                    <Image
                        loading="lazy"
                        src="/ind.png"
                        width="268"
                        height="119"
                        className="py-2"
                        alt="india office image"
                    ></Image>
                    <p className="px-4 text-[28px] font-bold">INDIA</p>
                    <p className="px-4 text-[20px] leading-6  font-semibold text-[#4C4C4C]">
                        Novel Office, Graphite India Main Rd, Industrial Area,
                        Whitefield, Bengaluru, India
                    </p>
                </div>
            </div>
        </>
    );
};
export default Address;

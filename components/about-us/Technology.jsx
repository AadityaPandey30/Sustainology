import React, { useRef, useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import Image from 'next/Image';

const Technology = () => {
    const [imgUrl, setTmgUrl] = useState('/our-tech-1.png');

    const backGroundRef = useRef(null);

    const bGImageStyle = {
        width: '100%',
        height: '815px',
        objectFit: 'cover',
        background: `radial-gradient(50% 50% at 50% 50%, rgba(225, 239, 138, 0.6) 0%, rgba(247, 252, 199, 0.18) 100%),url(${imgUrl})`,
    };

    const handelImageChange = () => {
        backGroundRef.current.classList.add('technology-image');
        setTimeout(() => {
            backGroundRef.current.classList.remove('technology-image');
        }, 1000);
    };

    return (
        <section id="technology">
            <div style={bGImageStyle} ref={backGroundRef}>
                <div className="h-full" onClick={handelImageChange}>
                    <Image
                        loading="eager"
                        src="/logo.svg"
                        alt=""
                        height={68}
                        width={68}
                        className="relative top-1/2 left-1/2 z-10"
                    />

                    <div className="relative top-[45%] left-[52%] bg-white border-4 w-[48%] border-white"></div>
                    <div className="flex  w-fit relative top-[42%] left-[65%]">
                        <TbChevronRight className="text-4xl text-white font-bold" />
                        <TbChevronRight className="text-4xl text-white font-bold" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;

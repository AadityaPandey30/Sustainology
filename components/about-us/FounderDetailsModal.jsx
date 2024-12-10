import React, { useEffect, useRef, useState } from 'react';
import Modal from '../common/Modal';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import founders from '@/utils/foundersData';

const FounderDetailsModal = ({ setDetailsModal, detailModal, modalData }) => {
    const [showImage, setShowImage] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            if (!scrollContainer) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

            // Calculate if the user has scrolled to the bottom of the div
            const scrolledToBottom =
                parseInt(scrollHeight - scrollTop) === clientHeight;

            // If scrolled to the bottom, hide the image
            if (scrolledToBottom) {
                setShowImage(false);
            } else {
                setShowImage(true);
            }
        };
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [detailModal]);

    return (
        <Modal
            setShowModal={setDetailsModal}
            showModal={detailModal}
            divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all    sm:align-middle md:max-w-[86%] w-full  bg-red-500"
        >
            <div className="w-full">
                <Image
                    loading="lazy"
                    src="/founder-detail-vector.png"
                    height={500}
                    width={500}
                    sizes="100vw"
                    objectFit="cover"
                    alt="left-vector"
                    className="fixed -z-10 left-0 bottom-0 h-full w-full"
                />
                <div
                    className="my-2 mx-8 sm:py-2 sm:px-8  border border-white rounded-xl h-screen overflow-y-auto scrollbar-hide relative"
                    ref={scrollContainerRef}
                >
                    <h2 className="text-center font-bold text-5xl leading-[65.09px] text-[#33496F]">
                        Founders
                    </h2>
                    {showImage && (
                        <div className="fixed right-8 -z-10 h-[120px] width-[120px] bottom-0  ">
                            <Image
                                loading="lazy"
                                // priority={true}
                                src="/founder-gif.gif"
                                className="h-full w-full"
                                alt="founders-GIFS"
                                height={120}
                                width={120}
                            />
                        </div>
                    )}

                    {founders?.map((data, index1) => {
                        return (
                            <div
                                className={`lg:flex ${index1 > 0 ? 'mt-16 md:mt-32' : 'mt-8'}`}
                                key={index1}
                            >
                                <div className="max-sm:w-full rounded-3xl lg:w-1/2 max-lg:flex max-lg:justify-center  w-full overflow-hidden relative">
                                    <div className="absolute transition-opacity duration-1000 opacity-100 hover:opacity-0  bg-[#282828a7] h-full w-full z-10"></div>
                                    <Image
                                        loading="lazy"
                                        src={data?.image}
                                        height={563.71}
                                        width={499.53}
                                        sizes="100vh"
                                        alt="founder-details"
                                        className="rounded-xl  h-full w-full object-cover object-top"
                                    />
                                </div>
                                <div className="md:px-10 px-2 lg:w-1/2 flex flex-col justify-between">
                                    <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                                        <h3 className="max-md:text-center font-semibold text-[40px] leading-[54.24px]  text-[#33496F]">
                                            {data?.name}
                                        </h3>
                                        <p className="font-semibold text-[28px] leading-[37.97px] text-[#666666] capitalize">
                                            {data?.title}
                                        </p>
                                        <p className="mt-7 font-semibold text-[22px] leading-[29.83px] text-[#808080] max-md:text-center">
                                            {data?.subTitle}
                                        </p>

                                        <p className="font-medium text-xl text-[#808080] max-md:text-center">
                                            {data?.description}
                                        </p>
                                    </div>
                                    <div className=" max-sm:flex  max-sm:flex-wrap mt-10 sm:grid sm:grid-cols-3 lg:grid-cols-4 w-full gap-4 max-sm:gap-8 max-[439px]:justify-between max-sm:justify-start ">
                                        {/* <Carousel
                                            responsive={responsive}
                                            autoPlaySpeed={1000}
                                            keyBoardControl={true}
                                            centerMode={false}
                                            // customTransition="all .5 ease-in-out"
                                            transitionDuration={500}
                                            swipeable={false}
                                            draggable={false}
                                            removeArrowOnDeviceType={['laptop']}
                                        > */}
                                        {data?.logo?.map((image, index) => {
                                            return (
                                                <div
                                                    className="h-16 w-16"
                                                    key={index}
                                                >
                                                    <Image
                                                        loading="lazy"
                                                        src={image}
                                                        width={60}
                                                        height={60}
                                                        className="h-full w-full object-contain"
                                                        alt={`logo${index}`}
                                                        style={{
                                                            mixBlendMode:
                                                                'multiply',
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                        {/* </Carousel> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Modal>
    );
};

export default FounderDetailsModal;

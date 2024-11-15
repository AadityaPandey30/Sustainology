import Image from 'next/image';

const CareerContent = () => {
    return (
        <section className="md:mt-48 mt-40  mb-8  lg:mb-36 lg:px-[95px] px-2 lg:pr-20">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-full lg:w-[67%] lg:pr-4">
                    <h2 className="font-bold text-4xl lg:text-[2.5rem] lg:leading-[3.39rem] leading-9 text-[#666666]">
                        Nurturing a Thriving Environment of Collaboration and
                        Innovation
                    </h2>
                    <p className="font-medium text-lg md:text-xl text-[#808080] mt-5">
                        At Sustainology, our culture is the heart of everything
                        we do. We foster an environment where collaboration,
                        innovation, and sustainability intertwine to create a
                        thriving and dynamic workplace. We believe in the power
                        of diverse perspectives and ideas. Our team consists of
                        individuals from different backgrounds, disciplines, and
                        experiences, all united by a shared passion for driving
                        sustainable change. We encourage open communication,
                        active listening, and respect for one another,
                        recognizing that our collective strengths make us
                        stronger.
                    </p>
                </div>
                <div className="w-full lg:w-[31%] mt-8 lg:mt-0 flex justify-center items-center">
                    <Image
                        loading="lazy"
                        src="/content-image.png"
                        width={377.69}
                        height={333.43}
                        alt=""
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default CareerContent;

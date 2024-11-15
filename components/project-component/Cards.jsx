import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdArrowOutward } from 'react-icons/md';

const Card = ({ project, setSelectedProjectData, setIsContactModal }) => {
    const router = useRouter();
    const handelRedirection = () => {
        if (project?.isShowDetails) {
            router.push(`/project-overview/${project?.slug}`);
        } else {
            setIsContactModal(true);
            setSelectedProjectData(project?.images[0]?.image);
        }
    };
    return (
        <div
            onClick={handelRedirection}
            className={`mt-4 block ${project?.isShowDetails ? 'cursor-pointer' : 'cursor-default'} group/opacity`}
        >
            <div className="flex md:flex-row max-md:flex-col-reverse h-auto md:min-h-[32.75rem] rounded-lg border border-[#E0EBD4] mb-10 md:mb-20 hover:shadow-md overflow-hidden relative ">
                <div className="md:w-[60%] w-full max-md:h-1/2  ">
                    <div className=" transition-opacity group-hover/opacity:opacity-100 opacity-35 h-full w-full duration-300 ease-in-out bg-gradient-to-b from-[#F6F9F2] to-[#E0EBD4] absolute -z-10"></div>
                    <div className="py-6 md:py-12 md:px-6 px-6 ">
                        <div className="mb-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-[2.0rem] lg:text-[2.75rem] leading-[3rem] font-bold text-[#60718F] mb-2 capitalize ">
                                    {project?.title || ''}
                                </h2>

                                <h2 className="mt-5">
                                    {project?.isShowDetails && (
                                        <MdArrowOutward className="text-[#60718F] mx-auto text-2xl font-bold" />
                                    )}
                                </h2>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap w-full space-y-2 md:space-y-0 space-x-6 text-[1.25rem] md:text-[1.75rem] text-[#666666] leading-7 font-semibold items-center">
                                <p className="capitalize">
                                    {project?.location?.country || ''} |{' '}
                                    {project?.area || ''}
                                </p>
                                {/* <p>{project?.area || ''}</p> */}
                            </div>
                            <div className="capitalize mt-2 md:mt-2 max-md:mt-2 font-semibold lg:flex text-[1.25rem] md:text-2xl text-[#666666] max-md:flex space-x-4">
                                <p className="mr-2">
                                    Registry Name :{' '}
                                    {project?.registryName || ''}
                                </p>
                                {/* <p>:</p>
                                <p>{project?.registryName || ''}</p> */}
                            </div>
                        </div>
                        <hr className="mt-4" />
                        <div className="mt-4">
                            <p className="font-medium text-[1.25rem] md:text-xl leading-7 md:leading-8 text-[#666666] break-words">
                                {project?.description?.length > 400
                                    ? project?.description.slice(0, 400) + '...'
                                    : project?.description || ''}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%] w-full max-md:h-1/2  relative">
                    <Image
                        loading="lazy"
                        src={project?.images[0]?.image || ''}
                        alt={''}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%' }}
                        width={457.23}
                        height={524}
                        className="md:rounded-r-lg max-md:rounded-t-lg md:absolute  -z-10 object-cover w-full h-full"
                    />

                    <div className="bg-black opacity-50  transition duration-300 ease-in group-hover/opacity:opacity-0  w-full h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Card;

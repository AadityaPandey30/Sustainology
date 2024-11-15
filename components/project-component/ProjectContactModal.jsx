import React from 'react';
import Modal from '../common/Modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectContactModal = ({
    setShowModal,
    showModal,
    selectedProjectData,
}) => {
    const router = useRouter();
    return (
        <Modal
            setShowModal={setShowModal}
            showModal={showModal}
            divClass="inline-block align-bottom bg-white rounded-[20px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
            <div className="bg-[#F6F9F2] px-4 pt-5 pb-4  sm:pb-4">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                    <div className="flex justify-center w-full">
                        <p className="font-bold text-4xl mt-12 text-center text-[#33496F]">
                            Want To Know More About This Project?
                        </p>
                    </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                    <Image
                        loading="lazy"
                        src={selectedProjectData}
                        height={457.23}
                        width={465.01}
                        className="rounded-xl"
                        alt="project-image"
                    />
                </div>
                <div className="px-6">
                    <button
                        className="bg-[#2F5738] py-[10px] px-[20px] gap-[8px] font-semibold text-xl text-[#FEFEFD] w-full rounded-lg"
                        onClick={() => router.push('/contact-us')}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectContactModal;

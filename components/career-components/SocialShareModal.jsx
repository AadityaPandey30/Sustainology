import React from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';
import Modal from '../common/Modal';

const SocialShareModal = ({
    setShareShowModal,
    showShareModal,
    selectedJobDetails,
}) => {
    // let hostname = location.href;
    return (
        <Modal
            setShowModal={setShareShowModal}
            showModal={showShareModal}
            divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full bg-red-500"
        >
            <div className="py-4 px-6 sm:py-6 sm:px-8">
                <div className="flex justify-center space-x-6 sm:justify-start">
                    <FacebookShareButton
                        url={`${process.env.FRONT_URL}/job-details/${selectedJobDetails?._id}`}
                    >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={`${process.env.FRONT_URL}/job-details/${selectedJobDetails?._id}`}
                    >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={`${process.env.FRONT_URL}/job-details/${selectedJobDetails?._id}`}
                    >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                </div>
                <div className="mt-4 bg-gray-100 px-3 py-2 rounded shadow">
                    <p className="text-center sm:text-left">
                        Share this link:{' '}
                        <a
                            href={`/careers/job-details/${selectedJobDetails?._id}`}
                            target="_blank"
                        >
                            {'Click to open link'}
                        </a>
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default SocialShareModal;

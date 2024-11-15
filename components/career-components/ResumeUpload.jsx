import axiosInstance from '@/utils/service';
import React, { useRef, useState } from 'react';
import { FaRegFile } from 'react-icons/fa';

const ResumeUpload = () => {
    const [uploadedFile, setUploadedFile] = useState({});
    const inputRef = useRef();

    const handelFileUploadBox = () => {
        if (inputRef?.current) {
            inputRef?.current?.click();
        }
    };

    const handelFileUpload = (e) => {
        const file = e?.target?.files[0];
        if (file) {
            // Calculate file size in MB

            if (value.size <= 1048576) {
                setUploadedFile(file);
            } else {
                setUploadedFile({ message: 'Uploaded file is less than 1 mb' });
            }
        }
    };

    const handelFileSave = async () => {
        try {
            if (!uploadedFile?.message) {
                const formData = new FormData();
                formData.append('image', uploadedFile);
                const fileUploadResponse = await axiosInstance.post(
                    '/job-post/upload-pool-resume',
                    formData
                );
                if (fileUploadResponse?.status === 200) {
                    alert('File uploaded successfully');
                    setUploadedFile({});
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="lg:px-[95px] px-5 md:px-10 lg:pr-20 mt-20 mb-10">
            <div className="py-11 px-5 md:px-10 lg:px-20 lg:w-[90%] bg-[#F6F9F2] border border-[#C9DDB4] rounded-[1.25rem] flex flex-col justify-center items-center">
                <h2 className="font-bold text-2xl md:text-4xl leading-[3rem] text-center text-[#33496F]">
                    Join our talent pool! Send us your resume and unlock new
                    career possibilities.
                </h2>
                <div className="mt-12">
                    <input
                        type="file"
                        value=""
                        className="hidden"
                        accept="application/pdf"
                        ref={inputRef}
                        onChange={handelFileUpload}
                    />
                    <button
                        className="rounded-lg py-[0.625rem] px-10 md:px-28 bg-white border border-[#2F5738] text-lg md:text-xl leading-[1.375rem] text-[#2F5738] flex gap-2 md:gap-6 items-center"
                        onClick={handelFileUploadBox}
                    >
                        <FaRegFile />{' '}
                        <p className="font-semibold text-base md:text-xl leading-[1.375rem]">
                            Upload Resume
                        </p>
                    </button>
                    <p className="font-semibold text-xs md:text-sm leading-[1.125rem] text-[#808080]">
                        Max Size: 1MB
                    </p>
                    <p className="text-base md:text-lg font-bold">
                        {' '}
                        {uploadedFile?.name}
                    </p>
                    {uploadedFile?.message && (
                        <p className="text-red-500 font-bold">
                            {' '}
                            {uploadedFile?.message}
                        </p>
                    )}
                </div>
                <div className="mt-12">
                    <button
                        className="rounded-lg py-[0.625rem] px-12 md:px-40 bg-[#2F5738] border border-[#2F5738] hover:text-[#2F5738] hover:bg-[#DCE2DD] text-lg md:text-2xl leading-[1.375rem] text-white flex gap-2 md:gap-6 items-center font-semibold"
                        onClick={handelFileSave}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResumeUpload;

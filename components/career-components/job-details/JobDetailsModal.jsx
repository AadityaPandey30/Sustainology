import React, { useState, useRef, useEffect } from 'react';
import Modal from '../../common/Modal.jsx';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { GoShareAndroid } from 'react-icons/go';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { FaRegFile } from 'react-icons/fa';
import * as Yup from 'yup';
import axiosInstance from '@/utils/service.js';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const initialValue = {
    name: '',
    contactNumber: '',
    email: '',
    linkedInUrl: '',
    portfolio: '',
    image: '',
};

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contactNumber: Yup.string()
        .matches(phoneRegExp, 'Contact number is not valid')
        .required('Contact number is required'),
    image: Yup.mixed()
        .test('fileSize', 'File is too large', (value) => {
            return value ? value.size <= 1048576 : true; // 1MB in bytes
        })
        .required('Resume is required'),
    linkedInUrl: Yup.string()
        .url('Invalid LinkedIn URL')
        .required('LinkedIn URL is required'),
    portfolio: Yup.string().url('Invalid Portfolio URL'),
});

const JobDetailsModal = ({
    showModal,
    setShowModal,
    selectedJobDetails,
    setShareShowModal,
}) => {
    const [isApply, setIsApply] = useState(false);
    const [uploadedPdf, setUploadedPdf] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        if (!showModal) {
            setShareShowModal(false);
            setIsApply(false);
            setUploadedPdf('');
        }
    }, [showModal]);

    const handelFileUploadBox = () => {
        if (inputRef?.current) {
            inputRef?.current?.click();
        }
    };

    const convertTextInputToArray = (textInput) => {
        let array = [];
        if (textInput) {
            array = textInput.split(/\r?\n/);
        }
        return array;
    };

    const previewPDF = (input) => {
        setUploadedPdf(URL.createObjectURL(input.files[0]));
    };

    const handelAppliedJob = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('contactNumber', values.contactNumber);
            formData.append('email', values.email);
            formData.append('linkedInUrl', values.linkedInUrl);
            formData.append('portfolioUrl', values.portfolio);
            formData.append('jobId', selectedJobDetails?._id);
            formData.append('image', values.image);
            await axiosInstance.post('/job-post/applied-job', formData);

            setShowModal(false);
            setSubmitting(false);
            toast.success('Job applied successfully');
            resetForm();
            setUploadedPdf('');
        } catch (error) {
            console.error(error);
            toast.error(error?.message || 'Failed');
        }
    };

    const handelRemovePdf = () => {
        setUploadedPdf('');
    };
    return (
        <Modal
            setShowModal={setShowModal}
            showModal={showModal}
            divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full bg-red-500"
        >
            <div className="bg-gradient-to-b from-[#F6F9F2] to-[#FFFFFF] py-[3.75rem] md:px-[3.25rem]  max-md:px-[1.75rem]">
                {/*header*/}
                <div className="space-y-8">
                    <h1 className="text-center text-[#33496F] font-bold text-4xl capitalize">
                        {selectedJobDetails?.title}
                    </h1>
                    <p className="flex justify-center items-center text-xl sm:text-2xl font-semibold text-[#4C4C4C]">
                        <HiOutlineMapPin className="text-[#666666] text-lg" />
                        {selectedJobDetails?.location?.city}
                    </p>
                </div>
                {/*body*/}
                <div className="mt-6 flex flex-col sm:flex-row justify-between">
                    <button
                        className="py-2 px-5 border border-[#E5E5E5] bg-white flex items-center justify-center space-x-3 rounded-lg text-xl sm:text-2xl font-semibold text-[#60718F] mb-4 sm:mb-0 pb-[9px]"
                        onClick={() => setShareShowModal(true)}
                    >
                        <GoShareAndroid />
                        <p>Share</p>
                    </button>
                    {/* <button
                        className={`py-[0.625rem] px-5 text-[#FEFEFD] rounded-lg font-semibold text-2xl pb-[11px] ${isApply ? 'bg-[#2F5738]' : 'bg-[#869E8C]'}`}
                        onClick={() => setIsApply(true)}
                    >
                        Apply
                    </button> */}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row justify-between max-sm:gap-y-3">
                    <div>
                        <p className="text-2xl leading-[1.375rem] font-semibold text-[#4C4C4C]">
                            Type :{' '}
                            <span className="font-medium text-[#666666]">
                                {selectedJobDetails?.type}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl leading-[1.375rem] font-semibold text-[#4C4C4C]">
                            Mode :{' '}
                            <span className="font-medium text-[#666666]">
                                {selectedJobDetails?.mode}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl leading-[1.375rem] font-semibold text-[#4C4C4C]">
                            Experience :{' '}
                            <span className="font-medium text-[#666666]">
                                {selectedJobDetails?.experience}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="md:mt-16 mt-10 mb-10 space-y-4">
                    <p className="font-semibold text-2xl laeding-[1.375rem] text-[#4C4C4C]">
                        About Team
                    </p>
                    <p className="font-medium text-lg leading-[1.625rem] text-[#666666]">
                        {selectedJobDetails?.team}
                    </p>
                </div>

                <div className="">
                    <p className="font-semibold text-2xl laeding-[1.375rem] text-[#4C4C4C]">
                        Roles & Responsibilities
                    </p>
                    <ul className="list-none mt-4">
                        {convertTextInputToArray(selectedJobDetails?.role)?.map(
                            (roleList) => {
                                return (
                                    <li
                                        className="flex font-medium text-lg leading-[1.625rem] justify-start text-[#666666] gap-2"
                                        key={roleList}
                                    >
                                        <div className=" mt-[0.65rem] h-[9.5px] min-w-[8.4px] bg-[#A5B594]"></div>
                                        <p className="">{roleList}</p>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div className=" mt-10">
                    <p className="font-semibold text-2xl laeding-[1.375rem] text-[#4C4C4C]">
                        Qualifications & Experience
                    </p>
                    <ul className="list-none mt-4">
                        {convertTextInputToArray(
                            selectedJobDetails?.qualification
                        )?.map((qualification) => {
                            return (
                                <li
                                    className="flex font-medium text-lg leading-[1.625rem] gap-2  text-[#666666]"
                                    key={qualification}
                                >
                                    <div className=" mt-[0.65rem] h-[9.5px] min-w-[8.4px] bg-[#A5B594]"></div>{' '}
                                    <p>{qualification}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="mt-10 ">
                    <button
                        className={`py-[0.625rem] px-5 text-[#FEFEFD] rounded-lg font-semibold text-2xl pb-[11px] ${isApply ? 'bg-[#2F5738]' : 'bg-[#869E8C]'} max-sm:w-full`}
                        onClick={() => setIsApply(true)}
                    >
                        Apply
                    </button>
                </div>

                {isApply && (
                    <div className="mt-7">
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validationSchema}
                            onSubmit={handelAppliedJob}
                        >
                            {({ isSubmitting, setFieldValue }) => (
                                <Form>
                                    <>
                                        <div className="flex flex-col md:flex-row md:gap-6">
                                            <div className="w-full md:w-60%">
                                                <div className="w-full  mt-2">
                                                    <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C]">
                                                        Name
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            name="name"
                                                            className="w-full py-3 px-5 border font-normal text-xl leading-[1.375rem] outline-none border-[#DCDCDD] bg-white rounded-lg"
                                                            placeholder="Enter your name"
                                                        />
                                                    </label>
                                                    <ErrorMessage
                                                        name="name"
                                                        className=" text-red-500 font-semibold"
                                                        component={'div'}
                                                    />
                                                </div>
                                                <div className="w-full  mt-2">
                                                    <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C]">
                                                        Contact Number
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            name="contactNumber"
                                                            className="w-full py-3 px-5 border font-normal text-xl leading-[1.375rem] outline-none border-[#DCDCDD] bg-white rounded-lg"
                                                            placeholder="Enter your phone number"
                                                        />
                                                    </label>
                                                    <ErrorMessage
                                                        name="contactNumber"
                                                        className=" text-red-500 font-semibold"
                                                        component={'div'}
                                                    />
                                                </div>
                                                <div className="w-full  mt-2">
                                                    <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C]">
                                                        Email
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                        <Field
                                                            type="email"
                                                            name="email"
                                                            className="w-full py-3 px-5 border font-normal text-xl leading-[1.375rem] outline-none border-[#DCDCDD] bg-white rounded-lg"
                                                            placeholder="Enter your email"
                                                        />
                                                    </label>
                                                    <ErrorMessage
                                                        name="email"
                                                        className=" text-red-500 font-semibold"
                                                        component={'div'}
                                                    />
                                                </div>
                                                <div className="w-full  mt-2">
                                                    <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C]">
                                                        Linkedin URL
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            name="linkedInUrl"
                                                            className="w-full py-3 px-5 border font-normal text-xl leading-[1.375rem] outline-none border-[#DCDCDD] bg-white rounded-lg"
                                                            placeholder="Enter your linkedIn url"
                                                        />
                                                    </label>
                                                    <ErrorMessage
                                                        name="linkedInUrl"
                                                        className=" text-red-500 font-semibold"
                                                        component="div"
                                                    />
                                                </div>
                                                <div className="w-full  mt-2">
                                                    <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C]">
                                                        Portfolio / website/
                                                        github url (optional)
                                                        <Field
                                                            type="text"
                                                            name="portfolio"
                                                            className="w-full py-3 px-5 border font-normal text-xl leading-[1.375rem] outline-none border-[#DCDCDD] bg-white rounded-lg"
                                                            placeholder="Enter your portfolio / website/ github url"
                                                        />
                                                    </label>
                                                    <ErrorMessage
                                                        name="portfolio"
                                                        className=" text-red-500 font-semibold"
                                                        component="div"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full mt-6 md:mt-0 md:w-40%">
                                                <label className="font-semibold text-lg leading-[1.375rem] text-[#4C4C4C] w-full flex justify-between mt-2  ">
                                                    <span>
                                                        Upload Resume
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </span>
                                                    {uploadedPdf && (
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                handelRemovePdf();
                                                                setFieldValue(
                                                                    'image',
                                                                    ''
                                                                );
                                                            }}
                                                        >
                                                            {' '}
                                                            <RiDeleteBin5Fill className="text-red-600 cursor-pointer" />
                                                        </button>
                                                    )}
                                                </label>
                                                <div className="border border-[#E5E5E5] bg-white md:h-[94%] w-full rounded-lg h-[300px] flex flex-col justify-center items-center">
                                                    <div
                                                        className={
                                                            uploadedPdf
                                                                ? ' h-full w-full'
                                                                : ''
                                                        }
                                                    >
                                                        {!uploadedPdf ? (
                                                            <>
                                                                <input
                                                                    type="file"
                                                                    accept="application/pdf"
                                                                    name="image"
                                                                    className="hidden"
                                                                    value=""
                                                                    ref={
                                                                        inputRef
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setFieldValue(
                                                                            'image',
                                                                            e
                                                                                ?.target
                                                                                ?.files[0]
                                                                        );
                                                                        previewPDF(
                                                                            e.target
                                                                        );
                                                                    }}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="outline-none py-[0.625rem] px-6 bg-white border border-[#2F5738] rounded-lg font-semibold text-xl leading-[1.375] text-[#2F5738] flex gap-4 items-center
                                                                    pb-[12px]"
                                                                    onClick={
                                                                        handelFileUploadBox
                                                                    }
                                                                >
                                                                    <FaRegFile />
                                                                    <p>
                                                                        Upload
                                                                        Resume
                                                                    </p>
                                                                </button>
                                                                <ErrorMessage
                                                                    name="image"
                                                                    className=" text-red-500 font-semibold"
                                                                    component="div"
                                                                />

                                                                <p className="font-semibold  leading-[1.125rem] text-[#808080] ">
                                                                    Max Size :
                                                                    1MB
                                                                </p>
                                                            </>
                                                        ) : (
                                                            <iframe
                                                                src={
                                                                    uploadedPdf
                                                                }
                                                                title="resume-preview"
                                                                className=" rounded-lg h-full w-full"
                                                                // width="100%"
                                                                // height="370px"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <button
                                                type="submit"
                                                className="py-[0.625rem] px-5 text-[#FEFEFD] rounded-lg font-semibold text-2xl pb-[12px] bg-[#2F5738] max-sm:w-full"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </>
                                </Form>
                            )}
                        </Formik>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default JobDetailsModal;

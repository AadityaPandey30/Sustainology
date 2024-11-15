'use client';
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '@/utils/service';
import Image from 'next/image';
import { toast } from 'react-toastify';

const fields = [
    {
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your email',
    },
    {
        name: 'subject',
        label: 'Subject',
        type: 'text',
        placeholder: 'I need help regarding..',
    },
    {
        name: 'message',
        label: 'Your message / Your query',
        type: 'text',
        placeholder: 'Write your query...',
    },
];

const initialValue = {
    email: '',
    subject: '',
    message: '',
};

const validation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const ContactUs = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axiosInstance.post(
                '/business-contact-us/create',
                values
            );

            if (response.status === 201) {
                setShowModal(true);

                resetForm();
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || 'Failed to submit your query.'
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <div className="w-full flex justify-center ">
                <div
                    className="w-[70%] h-full py-5 shadow-xl bg-[#FCFDFA]"
                    style={{
                        border: '1px solid #CCCCCC',
                        borderRadius: '12px',
                    }}
                >
                    <h1 className="text-center text-[44px] font-bold text-[#33496F]">
                        Raise a Support Ticket
                    </h1>
                    <div className="relative p-6 sm:p-6 md:p-6 pt-6 flex-auto ">
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validation}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {fields.map((field) => {
                                        const isMessageField =
                                            field.name === 'message';
                                        return (
                                            <div
                                                key={field.name}
                                                className="mb-3 py-1 text-[20px]"
                                            >
                                                <label className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C]">
                                                    {field.label}
                                                </label>
                                                <br />
                                                <Field
                                                    name={field.name}
                                                    type={field.type}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    className={`w-full  outline-none px-4 py-2  rounded border ${isMessageField ? 'h-[80px]' : ''}`}
                                                />
                                                <br />
                                                <ErrorMessage
                                                    name={field.name}
                                                    className="text-[#BD3C3C] text-lg font-semibold"
                                                    component="div"
                                                />
                                                {field.name === 'email' && (
                                                    <p className="text-[#666666] text-[18px] font-semibold">
                                                        Response to this query
                                                        will be sent to this
                                                        email along with the
                                                        primary email
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="w-[60%] py-2 rounded-lg bg-[#2F5738] text-[#FEFEFD] font-semibold text-2xl mt-6 mb-2 flex items-center justify-center"
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    showModal={showModal}
                    divClass="inline-block align-bottom bg-[#FCFDFA] rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                >
                    <div className="text-center py-7">
                        <h1 className="text-[#33496F] font-bold text-[36px]">
                            Your query has been submitted.
                        </h1>
                        <p className="text-[24px] text-[#4C4C4C] font-semibold">
                            Our team will get back to you at the earliest.
                        </p>
                        <div className="flex justify-center py-5">
                            <Image
                                loading="lazy"
                                src="/Done.png"
                                alt=""
                                width={148}
                                height={148}
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ContactUs;

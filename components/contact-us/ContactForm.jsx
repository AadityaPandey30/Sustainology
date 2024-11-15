import React from 'react';
import Image from 'next/image';

const ContactForm = ({ formik }) => {
    return (
        <div className=" mx-auto py-4 md:py-14">
            <div className="flex flex-col md:flex-row relative">
                <div className="md:w-1/2 pr-20 md:mr-0">
                    <Image
                        loading="lazy"
                        src="/images/contact/bg.png"
                        alt=""
                        height={476}
                        width={498}
                    />
                </div>
                <div className="px-5 lg:w-1/2 py-4 md:py-11  lg:mr-[132px] z-50">
                    <h3 className="font-bold text-[2.5rem] leading-[3.4rem] text-[#33496F]">
                        Contact Us
                    </h3>
                    <p className="mb-6 text-gray-600">
                        Get in Touch: We're Here to Assist with Your Queries
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-8">
                            <div className="flex-grow">
                                <label
                                    htmlFor="firstName"
                                    className="block text-gray-700"
                                >
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                    placeholder="Enter Your First Name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                                />
                                {formik.touched.firstName &&
                                formik.errors.firstName ? (
                                    <div className="text-red-500">
                                        {formik.errors.firstName}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex-grow">
                                <label
                                    htmlFor="lastName"
                                    className="block text-gray-700"
                                >
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                    placeholder="Enter Your Last Name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                                />
                                {formik.touched.lastName &&
                                formik.errors.lastName ? (
                                    <div className="text-red-500">
                                        {formik.errors.lastName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700"
                            >
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="block text-gray-700"
                            >
                                Mobile Number*
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                maxLength={10}
                                placeholder="Enter Your Phone Number"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber ? (
                                <div className="text-red-500">
                                    {formik.errors.phoneNumber}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

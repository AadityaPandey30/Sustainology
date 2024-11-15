import React, { useState } from 'react';

const Business = ({ setFieldValue, formikValues, formik }) => {
    const { subject, message, no_of_employee } = formikValues;
    const [selectedQueryType, setSelectedQueryType] = useState('');

    const employeeSizeOptions = [
        '1-20',
        '20-50',
        '50-200',
        '200-1000',
        '1000+',
    ];

    const queryOptions = [
        'Making your product carbon neutral',
        'Purchase carbon credits',
        'ESG consultancy',
        'Request offtake agreement',
        'Other',
    ];
    return (
        <div>
            <div className="flex max-md:flex-col gap-6">
                {/* Company Name Input */}
                <div className="flex-grow">
                    <label
                        htmlFor="company_name"
                        className="block text-gray-700"
                    >
                        Company Name*
                    </label>
                    <input
                        type="text"
                        name="company_name"
                        id="company_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company_name}
                        placeholder="Enter Your Company Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.company_name &&
                    formik.errors.company_name ? (
                        <div className="text-red-500">
                            {formik.errors.company_name}
                        </div>
                    ) : null}
                </div>

                <div className="flex-grow">
                    <label
                        htmlFor="company_url"
                        className="block text-gray-700"
                    >
                        Company URL*
                    </label>
                    <input
                        type="text"
                        name="company_url"
                        id="company_url"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company_url}
                        placeholder="Enter Your Company URL"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.company_url && formik.errors.company_url ? (
                        <div className="text-red-500">
                            {formik.errors.company_url}
                        </div>
                    ) : null}
                </div>

                {/* Designation Input */}
                <div className="flex-grow">
                    <label
                        htmlFor="designation"
                        className="block text-gray-700"
                    >
                        Designation*
                    </label>
                    <input
                        type="text"
                        name="designation"
                        id="designation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.designation}
                        placeholder="Enter Your Designation"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.designation && formik.errors.designation ? (
                        <div className="text-red-500">
                            {formik.errors.designation}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="my-10 md:my-[76px]">
                <p className="text-[#666666] text-xl font-semibold mb-9">
                    Please select Company Size :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-7">
                    {employeeSizeOptions.map((option) => (
                        <React.Fragment key={option}>
                            <input
                                type="radio"
                                name="no_of_employee"
                                id={option}
                                value={option}
                                checked={no_of_employee === option}
                                onChange={(e) => {
                                    setFieldValue('no_of_employee', option);
                                }}
                                className="hidden"
                            />
                            <label
                                htmlFor={option}
                                className={`text-md md:text-xl leading-[1.375rem] font-semibold py-2 w-full rounded border ${no_of_employee === option ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] ' : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '} cursor-pointer text-center`}
                            >
                                {option}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-[#666666] text-xl font-semibold mb-9">
                    What is your query about? (Please select) :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
                    {queryOptions.map((option) => (
                        <React.Fragment key={option}>
                            <input
                                type="radio"
                                name="subject"
                                id={option}
                                value={option}
                                checked={subject === option}
                                onChange={(e) => {
                                    setFieldValue('subject', option);
                                    setSelectedQueryType(e.target.value);
                                }}
                                className="hidden"
                            />
                            <label
                                htmlFor={option}
                                className={`text-md md:text-xl px-4 md:px-0 leading-[1.375rem] font-semibold py-2 w-full rounded border ${subject === option ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] ' : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '} cursor-pointer text-center`}
                            >
                                {option}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                {selectedQueryType && (
                    <div className="mt-[76px]">
                        <p className="text-[#666666] text-xl font-semibold mb-9">
                            Please write your Query
                        </p>
                        <textarea
                            rows={5}
                            name="message"
                            id="message"
                            onChange={(e) => {
                                setFieldValue('message', e.target.value);
                            }}
                            value={message}
                            placeholder="Write here..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Business;

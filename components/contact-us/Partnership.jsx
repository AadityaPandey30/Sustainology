import React, { useState } from 'react';

const Partnership = ({ setFieldValue, formikValues, formik }) => {
    const { type_of_organisation_represent, message, no_of_employee } =
        formikValues;
    const [selectedQueryType, setSelectedQueryType] = useState('');

    const employeeSizeOptions = [
        '1-5',
        '5-25',
        '25-50',
        '50-100',
        '100-500',
        '500-1000',
        '1000+',
    ];

    const queryOptions = [
        'Technology provider',
        'Registry',
        'NGO',
        'Government Organizations',
        'Other',
    ];

    return (
        <div>
            <div className="grid maz-sm:grid-cols-2 gap-6">
                {/* Company Name Input */}
                <div className="flex-grow">
                    <label
                        htmlFor="company_name"
                        className="block text-gray-700"
                    >
                        Name of the organization*
                    </label>
                    <input
                        type="text"
                        name="company_name"
                        id="company_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company_name}
                        placeholder="Enter Your Organization"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.company_name &&
                    formik.errors.company_name ? (
                        <div className="text-red-500">
                            {formik.errors.company_name}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="my-10 md:my-[76px]">
                <p className="text-[#666666] text-xl font-semibold mb-9">
                    Please select Organization Size :
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
                    What type of organization do you represent? (Please select)
                    :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
                    {queryOptions.map((option) => (
                        <React.Fragment key={option}>
                            <input
                                type="radio"
                                name="type_of_organisation_represent"
                                id={option}
                                value={option}
                                checked={
                                    (option !== 'Other' &&
                                        type_of_organisation_represent ===
                                            option) ||
                                    (option === 'Other' &&
                                        selectedQueryType === 'Other' &&
                                        type_of_organisation_represent !== '')
                                }
                                onChange={(e) => {
                                    setFieldValue(
                                        'type_of_organisation_represent',
                                        option
                                    );
                                    console.log(e.target.value);
                                    setSelectedQueryType(e.target.value);
                                }}
                                className="hidden"
                            />
                            <label
                                htmlFor={option}
                                className={`text-md md:text-xl px-4 md:px-0 leading-[1.375rem] font-semibold py-2 w-full rounded border ${
                                    (option !== 'Other' &&
                                        type_of_organisation_represent ===
                                            option) ||
                                    (option === 'Other' &&
                                        selectedQueryType === 'Other' &&
                                        type_of_organisation_represent !== '')
                                        ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] '
                                        : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '
                                } cursor-pointer text-center`}
                            >
                                {option}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                {selectedQueryType === 'Other' && (
                    <div className="mt-4 w-1/2">
                        <label
                            htmlFor="company_name"
                            className="block text-gray-700"
                        >
                            Specify
                        </label>
                        <input
                            type="text"
                            name="type_of_organisation_represent"
                            id="other_organization_type"
                            onChange={(e) =>
                                setFieldValue(
                                    'type_of_organisation_represent',
                                    e.target.value
                                )
                            }
                            value={formik.values.type_of_organisation_represent}
                            placeholder="Please specify"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                        />
                    </div>
                )}
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

export default Partnership;

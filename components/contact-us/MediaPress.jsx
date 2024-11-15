import React from 'react';

const MediaPress = ({ setFieldValue, formikValues, formik }) => {
    const { message } = formikValues;

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

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
        </div>
    );
};

export default MediaPress;

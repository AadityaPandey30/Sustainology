import React, { useState } from 'react';

const ProjectDeveloper = ({ setFieldValue, formikValues, formik }) => {
    const { project_type, message, stage_of_the_project } = formikValues;
    const [selectedQueryType, setSelectedQueryType] = useState('');

    const statusOptions = ['Pipeline', 'Registered', 'Issued'];

    const queryOptions = [
        'Nature based solutions',
        'AFOLU projects',
        'Renewables',
        'Industrial projects',
        'Plastic waste recycling projects',
        'Waste management',
        'Community projects',
        'Others',
    ];

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex-grow">
                    <label
                        htmlFor="name_of_the_registry"
                        className="block text-gray-700"
                    >
                        Name of the Registry
                    </label>
                    <input
                        type="text"
                        name="name_of_the_registry"
                        id="name_of_the_registry"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name_of_the_registry}
                        placeholder="Enter Your Registry Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.name_of_the_registry &&
                    formik.errors.name_of_the_registry ? (
                        <div className="text-red-500">
                            {formik.errors.name_of_the_registry}
                        </div>
                    ) : null}
                </div>
                <div className="flex-grow">
                    <label
                        htmlFor="projectid_issued_by_registry"
                        className="block text-gray-700"
                    >
                        Project ID issued by the registry
                    </label>
                    <input
                        type="text"
                        name="projectid_issued_by_registry"
                        id="projectid_issued_by_registry"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.projectid_issued_by_registry}
                        placeholder="Enter Your Project ID issued by the registry"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.projectid_issued_by_registry &&
                    formik.errors.projectid_issued_by_registry ? (
                        <div className="text-red-500">
                            {formik.errors.projectid_issued_by_registry}
                        </div>
                    ) : null}
                </div>
                <div className="flex-grow">
                    <label
                        htmlFor="vintage_years_of_the_credits"
                        className="block text-gray-700"
                    >
                        Vintage years of the credits
                    </label>
                    <input
                        type="text"
                        name="vintage_years_of_the_credits"
                        id="vintage_years_of_the_credits"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.vintage_years_of_the_credits}
                        placeholder="Enter Your Vintage years of the credits"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.vintage_years_of_the_credits &&
                    formik.errors.vintage_years_of_the_credits ? (
                        <div className="text-red-500">
                            {formik.errors.company_name}
                        </div>
                    ) : null}
                </div>
                <div className="flex-grow">
                    <label
                        htmlFor="no_of_credits_issued"
                        className="block text-gray-700"
                    >
                        No of credits issued
                    </label>
                    <input
                        type="text"
                        name="no_of_credits_issued"
                        id="no_of_credits_issued"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.no_of_credits_issued}
                        placeholder="Enter Your No of credits issued"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    {formik.touched.no_of_credits_issued &&
                    formik.errors.no_of_credits_issued ? (
                        <div className="text-red-500">
                            {formik.errors.no_of_credits_issued}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="my-10 md:my-[76px]">
                <p className="text-[#666666] text-xl font-semibold mb-9">
                    Stage of the project :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-7">
                    {statusOptions.map((option) => (
                        <React.Fragment key={option}>
                            <input
                                type="radio"
                                name="stage_of_the_project"
                                id={option}
                                value={option}
                                checked={stage_of_the_project === option}
                                onChange={(e) => {
                                    setFieldValue(
                                        'stage_of_the_project',
                                        option
                                    );
                                }}
                                className="hidden"
                            />
                            <label
                                htmlFor={option}
                                className={`text-md md:text-xl leading-[1.375rem] font-semibold py-2 w-full rounded border ${stage_of_the_project === option ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] ' : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '} cursor-pointer text-center`}
                            >
                                {option}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-[#666666] text-xl font-semibold mb-9">
                    What is your Project type? (Please select) :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
                    {queryOptions.map((option) => (
                        <React.Fragment key={option}>
                            <input
                                type="radio"
                                name="project_type"
                                id={option}
                                value={option}
                                checked={project_type === option}
                                onChange={(e) => {
                                    setFieldValue('project_type', option);
                                    setSelectedQueryType(e.target.value);
                                }}
                                className="hidden"
                            />
                            <label
                                htmlFor={option}
                                className={`text-md md:text-xl leading-[1.375rem] font-semibold py-2 w-full rounded border ${project_type === option ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] ' : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '} cursor-pointer text-center`}
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

export default ProjectDeveloper;

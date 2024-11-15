import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Individual from './Individual';
import Business from './Business';
import MediaPress from './MediaPress';
import Partnership from './Partnership';
import ProjectDeveloper from './ProjectDeveloper';

const ContactType = ({
    setFieldValue,
    formikValues,
    formik,
    setSelectedType,
    selectedType,
}) => {
    const { category } = formikValues;
    const contactTypes = [
        { label: 'Individual', value: 'individual' },
        { label: 'Business', value: 'business' },
        { label: 'Media / Press', value: 'media-press' },
        { label: 'Partnership', value: 'partner' },
        { label: 'Project Developer', value: 'project-developer' },
    ];

    const handleResetValues = () => {
        const newFormValues = {
            ...formikValues,
            subject: '',
            message: '',
            isOpen: true,
            category: '',
            designation: '',
            company_name: '',
            no_of_employee: '',
            industry: '',
            project_type: '',
            name_of_the_registry: '',
            projectid_issued_by_registry: '',
            vintage_years_of_the_credits: '',
            stage_of_the_project: '',
            no_of_credits_issued: '',
            company_url: '',
            type_of_organisation_represent: '',
        };
        formik.setValues(newFormValues);
    };

    return (
        <section className="px-5 pb-10 lg:px-[95px] md:mt-[57px] mt-[45px] lg:pb-[132px]">
            <h4 className="text-[#4C4C4C] text-xl md:text-2xl font-semibold mb-9">
                Please let us know how we can help you :
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-[68px]">
                {contactTypes.map((type) => (
                    <React.Fragment key={type.value}>
                        <input
                            type="radio"
                            name="category"
                            id={type.value}
                            value={type.value}
                            checked={category === type.value}
                            onChange={(e) => {
                                handleResetValues();
                                setFieldValue('category', e.target.value);
                                setSelectedType(e.target.value);
                            }}
                            className="hidden"
                        />
                        <label
                            htmlFor={type.value}
                            className={`text-xl leading-[1.375rem] font-semibold py-2 w-full text-white rounded border ${category === type.value ? 'border-[#2F5738] bg-[#2F5738]' : 'border-[#5D7C68] bg-[#5D7C68]'} cursor-pointer text-center`}
                        >
                            {type.label}
                        </label>
                    </React.Fragment>
                ))}
            </div>
            {selectedType && (
                <div className="md:mt-[76px] mt-[56px]">
                    {selectedType === 'individual' && (
                        <Individual
                            setFieldValue={setFieldValue}
                            formikValues={formikValues}
                        />
                    )}
                    {selectedType === 'business' && (
                        <Business
                            setFieldValue={setFieldValue}
                            formikValues={formikValues}
                            formik={formik}
                        />
                    )}
                    {selectedType === 'media-press' && (
                        <MediaPress
                            setFieldValue={setFieldValue}
                            formikValues={formikValues}
                            formik={formik}
                        />
                    )}
                    {selectedType === 'partner' && (
                        <Partnership
                            setFieldValue={setFieldValue}
                            formikValues={formikValues}
                            formik={formik}
                        />
                    )}
                    {selectedType === 'project-developer' && (
                        <ProjectDeveloper
                            setFieldValue={setFieldValue}
                            formikValues={formikValues}
                            formik={formik}
                        />
                    )}
                    <div className="flex justify-center mt-10 md:mt-20">
                        <button
                            type="submit"
                            className=" text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-[400px] text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                        >
                            Submit
                        </button>
                    </div>

                    <div className="mt-10 md:mt-[76px]">
                        <Link
                            className="flex gap-3 items-center text-xl leading-[1.375rem] font-medium py-2 text-[#666666] rounded border border-[#666666] bg-white cursor-pointer text-center px-6 md:px-14 py-3 w-full md:w-[400px]"
                            href="/faq"
                        >
                            <span>Still have questions? Go to FAQ’s</span>
                            <Image
                                loading="lazy"
                                src="/arrow-right-gray.svg"
                                alt=""
                                height={28}
                                width={20}
                            />
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactType;

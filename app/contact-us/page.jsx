'use client';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../components/header/Header';
// import Toast from '../../components/common/Toast';
import ContactForm from '../../components/contact-us/ContactForm';
import ContactType from '../../components/contact-us/ContactType';
import axiosInstance from '../../utils/service';
import './../../styles/contact.css';
import { toast } from 'react-toastify';
import Footer from '@/components/footer/Footer';

export default function ContactUs() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);
    const [selectedType, setSelectedType] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
            isOpen: true,
            category: '',
            designation: '',
            company_name: '',
            company_url: '',
            no_of_employee: '',
            industry: '',
            project_type: '',
            name_of_the_registry: '',
            projectid_issued_by_registry: '',
            vintage_years_of_the_credits: '',
            stage_of_the_project: '',
            no_of_credits_issued: '',
            type_of_organisation_represent: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phoneNumber: Yup.string()
                .matches(/^[0-9]+$/, 'Must be only digits')
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axiosInstance.post(
                    '/contact-us/create',
                    values
                );
                if (response.status === 201) {
                    toast.success('Created successful!');
                    // handelWholeFormReset();
                    setSelectedType('');
                    formik.resetForm();
                }
            } catch (error) {
                console.error(error);
                toast.error('Failed!');
            }
        },
    });

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="contact-bg">
                <form onSubmit={formik.handleSubmit}>
                    <ContactForm formik={formik} />
                    <ContactType
                        setFieldValue={formik.setFieldValue}
                        formikValues={formik.values}
                        formik={formik}
                        setSelectedType={setSelectedType}
                        selectedType={selectedType}
                    />
                </form>
            </div>
            {/* <Toast
                type={toast.type}
                message={toast.message}
                isOpen={toast.isOpen}
                closeToast={closeToast}
            /> */}
            <Footer />
        </>
    );
}

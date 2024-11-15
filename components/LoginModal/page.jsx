'use client';
import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { loginToggle } from '@/redux/slices/loginToggleSlice';
import axiosInstance from '@/utils/service';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const fields = [
    {
        name: 'email',
        label: 'User ID',
        type: 'text',
        placeholder: 'Enter your User ID',
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
    },
];

const initialValue = {
    emailID: '',
    password: '',
};

const validation = Yup.object({
    email: Yup.string().email('Invalid UserId').required('UserId is required'),
    password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('password is required'),
});

const LoginModal = () => {
    // const [showModal, setShowModal] = React.useState(true);
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.loginToggle.value);
    const [cookies, setCookie] = useCookies(['user']);
    const router = useRouter();
    const handelSubmit = async (values, { setsubmitting, setErrors }) => {
        try {
            const response = await axiosInstance.post('/business-user/login', {
                email: values.email,
                password: values.password,
            });
            console.log('Login successful', response.data.response);
            toast.success('Login Successful !');
            setCookie('user', JSON.stringify(response.data.response));
            let businessId = response.data.response.businessId;
            // if (businessId) {
            //     let businessData = await axiosInstance.get(
            //         '/business/businessId/' + businessId
            //     );
            //     setCookie(
            //         'business',
            //         JSON.stringify(businessData.data.response)
            //     );
            // }

            dispatch(loginToggle());
            router.push('/business/dashboard');
        } catch (error) {
            console.error('Login error', error);
            // Handle error (e.g., show error message)
            toast.error(error?.message || 'Failed');
            setErrors({ api: 'Invalid credentials. Please try again.' });
        } finally {
            setsubmitting(false);
        }
    };
    return (
        <div>
            <Modal
                setShowModal={() => dispatch(loginToggle())}
                showModal={showModal}
                divClass="inline-block align-bottom bg-[#FCFDFA] rounded-xl text-left overflow-hidden  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                <div>
                    <div className="flex justify-center py-7">
                        <h1 className="text-[#33496F] font-bold text-[36px]">
                            Login
                        </h1>
                    </div>

                    <div className="relative p-6 sm:p-6 md:p-6 pt-6 flex-auto ">
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validation}
                            onSubmit={handelSubmit}
                        >
                            {({ isSubmitting, errors }) => (
                                <Form>
                                    {fields.map((field) => {
                                        return (
                                            <div
                                                key={field.name}
                                                className="mb-8"
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
                                                    className="w-full outline-none px-4 py-2 rounded  border text-[20px]"
                                                />
                                                <br />
                                                <ErrorMessage
                                                    name={field.name}
                                                    className="text-[#BD3C3C] text-lg font-semibold"
                                                    component="div"
                                                />
                                            </div>
                                        );
                                    })}
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="w-[90%] py-2 rounded-lg bg-[#2F5738] hover:bg-[#FEFEFD] hover:text-[#2F5738] text-[#FEFEFD] font-semibold hover:font-semibold  text-2xl mt-6 mb-2 flex justify-center items-center"
                                            style={{
                                                border: '1px solid #2F5738',
                                            }}
                                            disabled={isSubmitting}
                                        >
                                            {/* Login{' '} */}
                                            {isSubmitting
                                                ? 'Logging in...'
                                                : 'Login'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default LoginModal;

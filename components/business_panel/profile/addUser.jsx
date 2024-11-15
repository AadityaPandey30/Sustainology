import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const AddUserModal = ({
    isOpen,
    fetchUsers,
    onSubmit,
    onClose,
    selectedUsers,
    type,
}) => {
    if (!isOpen) return null;

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        onSubmit?.({
            setSubmitting,
            resetForm,
            values,
            onClose,
            type,
        });
    };

    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'Enter your first name',
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Enter your last name',
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email',
        },
        {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Select Designation',
        },
    ];

    const passwordFields = [
        {
            name: 'createPassword',
            label: 'Create Password',
            type: 'password', // Changed to password type
            placeholder: 'Create Password',
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password', // Changed to password type
            placeholder: 'Confirm Password',
        },
    ];

    const initialValue = {
        firstName: selectedUsers?.firstName || '',
        lastName: selectedUsers?.lastName || '',
        email: selectedUsers?.email || '',
        designation: selectedUsers?.designation || '',
        createPassword: '',
        confirmPassword: '',
    };

    const validation = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First name is required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        designation: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Designation is required'),
        ...(type === 'add' && {
            createPassword: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Create Password is required'),
            confirmPassword: Yup.string()
                .oneOf(
                    [Yup.ref('createPassword'), null],
                    'Passwords must match'
                )
                .max(15, 'Must be 15 characters or less')
                .required('Confirm Password is required'),
        }),
    });

    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div
                className={`bg-white rounded-md  ${type == 'add' ? '' : ''}`}
                style={{ borderRadius: '16px' }}
            >
                <div className="flex px-6 justify-between py-4 items-center bg-[#101010]">
                    <h2 className="font-semibold text-[28px] text-white">
                        {type === 'add' ? 'Add New User' : 'Update User'}
                    </h2>
                    <button type="button" onClick={onClose}>
                        <RxCross1 className="text-[white] text-xl" />
                    </button>
                </div>

                <Formik
                    initialValues={initialValue}
                    validationSchema={validation}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="flex  flex-col  justify-between ">
                                <div
                                    className={`grid  grid-cols-1 md:grid-cols-2 gap-3 mx-5 py-6 ${type === 'add' ? 'h-[70%]' : ''}`}
                                >
                                    {fields.map((field) => (
                                        <div key={field.name} className="mb-3">
                                            <label className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C]">
                                                {field.label}
                                            </label>
                                            <Field
                                                name={field.name}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className="w-full outline-none px-4 py-2 rounded border"
                                            />
                                            <ErrorMessage
                                                name={field.name}
                                                component="div"
                                                className="text-[#BD3C3C] text-lg font-semibold"
                                            />
                                        </div>
                                    ))}
                                    {type === 'add' &&
                                        passwordFields.map((field) => (
                                            <div
                                                key={field.name}
                                                className="mb-3"
                                            >
                                                <label className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C]">
                                                    {field.label}
                                                </label>
                                                <Field
                                                    name={field.name}
                                                    type={field.type}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    className="w-full outline-none px-4 py-2 rounded border"
                                                />
                                                <ErrorMessage
                                                    name={field.name}
                                                    component="div"
                                                    className="text-[#BD3C3C] text-lg font-semibold"
                                                />
                                            </div>
                                        ))}
                                </div>

                                <div className="px-4">
                                    <button
                                        type="submit"
                                        className="w-full  mb-5  py-2 rounded bg-[#2F5738] text-[#FEFEFD] font-semibold text-2xl mt-6 flex items-center justify-center"
                                        disabled={isSubmitting}
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddUserModal;

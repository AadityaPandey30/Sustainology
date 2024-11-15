import React from 'react';
import Modal from '../common/Modal.jsx';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa6';
import * as Yup from 'yup';

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
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'text',
        placeholder: 'Enter your phone number',
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
    },
];

const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
};

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validation = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('first name is required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('email is required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('phone number is required'),
});

const UserInformationForm = ({ setShowModal, showModal, handelSubmit }) => {
    return (
        <Modal
            setShowModal={setShowModal}
            showModal={showModal}
            divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
            {/*content*/}
            <div className="bg-white px-4 pt-5 pb-4  sm:pb-4">
                {/*header*/}
                <div className="flex items-start justify-between md:p-5">
                    <div className="flex justify-center w-full">
                        <div className=" mt-12  md:w-3/4">
                            <h3 className="text-4xl leading-[3rem] text-[#33496F] font-bold text-center">
                                Please Fill the Details
                            </h3>
                            <p className="mt-2 text-center font-medium text-lg leading-6 text-[#666666]">
                                Before proceeding, Please fill the details All
                                fields are mandatory
                            </p>
                        </div>
                    </div>
                    {/* <button
                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <IoMdCloseCircleOutline className="text-[#BD3C3C]" />
                        </span>
                    </button> */}
                </div>
                {/*body*/}
                <div className="relative md:p-6 pt-6 flex-auto ">
                    <Formik
                        initialValues={initialValue}
                        validationSchema={validation}
                        onSubmit={handelSubmit}
                    >
                        <Form>
                            {fields.map((field) => {
                                return (
                                    <div key={field.name} className="mb-3">
                                        <label className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C]">
                                            {field.label}
                                        </label>
                                        <br />
                                        <Field
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full outline-none px-4 py-2 rounded  border"
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

                            <button
                                type="submit"
                                className="w-full py-2 rounded bg-[#2F5738] text-[#FEFEFD] font-semibold text-2xl mt-6 mb-2 flex items-center justify-center"
                            >
                                Proceed{' '}
                                <FaArrowRight className="text-lg ml-2 mt-1" />
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Modal>
    );
};

export default UserInformationForm;

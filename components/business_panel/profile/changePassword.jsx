// import React, { useState } from 'react';
// import axiosInstance from '@/utils/service';
// import { toast } from 'react-toastify';

// const ChangePassword = () => {
//     const [currentPassword, setCurrentPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleUpdatePassword = async (e) => {
//         e.preventDefault();
//         setErrorMessage('');
//         setSuccessMessage('');

//         if (newPassword !== confirmPassword) {
//             setErrorMessage('New password and confirm password do not match.');
//             return;
//         }

//         try {
//             const response = await axiosInstance.post(
//                 '/business-user/reset-password',
//                 {
//                     currentPassword,
//                     newPassword,
//                 }
//             );

//             if (response.status === 200) {
//                 setSuccessMessage('Password updated successfully.');
//                 toast.success('Password update successfully!');
//                 setCurrentPassword('');
//                 setNewPassword('');
//                 setConfirmPassword('');
//             }
//         } catch (error) {
//             setErrorMessage('Failed to update password. Please try again.');
//             toast.error(error?.message || 'Failed');
//         }
//     };

//     return (
//         <div
//             className="pr-[59px] mx-5 mb-20 bg-white shadow-md flex "
//             style={{ borderRadius: '8px' }}
//         >
//             <div className="py-6 px-14 text-[20px] font-semibold grid grid-row-3 gap-7 items-center text-[#333333]">
//                 <label>
//                     Current Password
//                     <br />
//                     <input
//                         type="password"
//                         placeholder="Enter your current password"
//                         className="px-5"
//                         style={{
//                             border: '1px solid #C9C9CB',
//                             borderRadius: '8px',
//                             width: '552px',
//                             height: '54px',
//                         }}
//                         value={currentPassword}
//                         onChange={(e) => setCurrentPassword(e.target.value)}
//                     />
//                 </label>

//                 <label>
//                     Create Password
//                     <br />
//                     <input
//                         type="password"
//                         placeholder="Create new password"
//                         className="px-5"
//                         style={{
//                             border: '1px solid #C9C9CB',
//                             borderRadius: '8px',
//                             width: '552px',
//                             height: '54px',
//                         }}
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                     />
//                 </label>

//                 <label>
//                     Confirm Password
//                     <br />
//                     <input
//                         type="password"
//                         placeholder="Confirm password"
//                         className="px-5"
//                         style={{
//                             border: '1px solid #C9C9CB',
//                             borderRadius: '8px',
//                             width: '552px',
//                             height: '54px',
//                         }}
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                 </label>

//                 {errorMessage && (
//                     <div className="text-red-500">{errorMessage}</div>
//                 )}
//                 {successMessage && (
//                     <div className="text-green-500">{successMessage}</div>
//                 )}

//                 <div
//                     className="w-[166px] h-[44px] flex ml-96 justify-center text-[white] bg-[#2F5738]"
//                     style={{ borderRadius: '8px' }}
//                 >
//                     <button onClick={handleUpdatePassword}>
//                         Update Password
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChangePassword;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '@/utils/service';
import { toast } from 'react-toastify';

const ChangePassword = () => {
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required(
                'Current password is required'
            ),
            newPassword: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('New password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await axiosInstance.post(
                    '/business-user/reset-password',
                    {
                        currentPassword: values.currentPassword,
                        newPassword: values.newPassword,
                    }
                );

                if (response.status === 200) {
                    toast.success('Password updated successfully!');
                    resetForm();
                }
            } catch (error) {
                toast.error(
                    error?.message ||
                        'Failed to update password. Please try again.'
                );
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div
            className="pr-[59px] mx-5 mb-20 bg-white shadow-md flex "
            style={{ borderRadius: '8px' }}
        >
            <form
                onSubmit={formik.handleSubmit}
                className="py-6 px-14 text-[20px] w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] font-semibold grid grid-row-3 gap-7 items-center text-[#333333]"
            >
                <label>
                    Current Password
                    <br />
                    <input
                        type="password"
                        placeholder="Enter your current password"
                        className="px-5 w-full py-2"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '552px',
                            // height: '54px',
                        }}
                        {...formik.getFieldProps('currentPassword')}
                    />
                    {formik.touched.currentPassword &&
                    formik.errors.currentPassword ? (
                        <div className="text-red-500">
                            {formik.errors.currentPassword}
                        </div>
                    ) : null}
                </label>

                <label>
                    Create Password
                    <br />
                    <input
                        type="password"
                        placeholder="Create new password"
                        className="px-5 w-full py-2"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '552px',
                            // height: '54px',
                        }}
                        {...formik.getFieldProps('newPassword')}
                    />
                    {formik.touched.newPassword && formik.errors.newPassword ? (
                        <div className="text-red-500">
                            {formik.errors.newPassword}
                        </div>
                    ) : null}
                </label>

                <label>
                    Confirm Password
                    <br />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="px-5 w-full py-2"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px ',
                            // width: '552px',
                            // height: '54px',
                        }}
                        {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                        <div className="text-red-500">
                            {formik.errors.confirmPassword}
                        </div>
                    ) : null}
                </label>

                <div className="flex w-full justify-end  ">
                    <button
                        className="bg-[#2F5738] text-[white] px-4 py-2 rounded-lg "
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        {' '}
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;

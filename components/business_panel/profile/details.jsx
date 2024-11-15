'use client';
import UserDetails from './userDetails';
import React, { useEffect, useState } from 'react';
import PlanDetails from './planDeatils';
import ChangePassword from './changePassword';
import axiosInstance from '@/utils/service';
import { toast } from 'react-toastify';
import AddUserModal from './addUser';
import { FiPlusCircle } from 'react-icons/fi';
import { useCookies } from 'react-cookie';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const labels = [
    { label: 'User Details', value: 0 },
    { label: 'Plan Details', value: 1 },
    { label: 'Change Password', value: 2 },
];

const Details = () => {
    const [selectedLabel, setSelectedLabel] = useState(labels[0].value);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUserForDelete, setSelectedUserForDelete] = useState(null);

    const [cookies] = useCookies(['user']);
    const businessId = cookies.user?.businessId;
    const parentUser = cookies.user?._id;

    useEffect(() => {
        if (!isModalOpen) {
            setSelectedUser(null);
        }
    }, [isModalOpen]);

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get(
                `/business-user/all?parentUser=${parentUser}`
            );
            if (response.data) {
                setUsers(response.data.response);
            } else {
                throw new Error('No data received');
            }
            setLoading(false);
        } catch (error) {
            toast.error(error?.message || 'Failed');
            setLoading(false);
        }
    };

    const handleIconClick = (user, action, indexNumber) => {
        switch (action) {
            case 'edit':
                setSelectedUser(users[indexNumber]);
                setIsUpdateModalOpen(true);
                setIsModalOpen(true);
                break;
            case 'delete':
                setSelectedUserForDelete(user);
                setIsDeleteModalOpen(true);
                break;
            default:
                break;
        }
    };

    const renderContent = () => {
        switch (selectedLabel) {
            case 0:
                return (
                    <div>
                        <UserDetails
                            fetchUsers={fetchUsers}
                            users={users}
                            onIconClick={handleIconClick}
                        />
                    </div>
                );
            case 1:
                return (
                    <div>
                        <PlanDetails />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <ChangePassword />
                    </div>
                );
            default:
                return <div>Select a label to view details</div>;
        }
    };

    const addUsers = async function ({
        setSubmitting,
        resetForm,
        values,
        onClose,
        type,
    }) {
        try {
            const body = {
                businessId: businessId,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                designation: values.designation,
                parentUser: parentUser,
                password: values.createPassword,
            };
            let response;
            if (type == 'add') {
                response = await axiosInstance.post(
                    `/business-user/register`,
                    body
                );
                toast.success('user added successfully');
            } else {
                const userId = selectedUser._id;
                delete body.businessId;
                delete body.parentUser;
                delete body.password;
                response = await axiosInstance.put(
                    `business-user/update/${userId}`,
                    body
                );
                toast.success('User update successfully!');
            }
            resetForm();
            onClose();
            fetchUsers();
        } catch (error) {
            toast.error(error?.message || 'Failed');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteConfirm = async () => {
        try {
            const userId = selectedUserForDelete._id;
            await axiosInstance.delete(`business-user/delete/${userId}`);
            toast.success('User deleted successfully!');
            fetchUsers();
            setIsDeleteModalOpen(false); // Close the delete modal
        } catch (error) {
            toast.error('Failed to delete user.');
        }
    };

    const DeleteModal = ({ isOpen, onClose, onDelete }) => {
        if (!isOpen) return null;
        return (
            <div
                className="fixed inset-0 z-[9999] overflow-y-auto"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex min-h-screen items-center justify-center text-center sm:block">
                    <div
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        aria-hidden="true"
                        onClick={onClose}
                    ></div>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                            <button onClick={onClose}>
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    <IoMdCloseCircleOutline className="text-[#BD3C3C]" />
                                </span>
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="mt-2 text-center text-[24px] text-[#4C4C4C] font-semibold">
                                Are you sure you want to delete User Detail?
                            </p>
                            {/* <div className="flex justify-between">
                                <button
                                    type="button"
                                    className=" justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-green  sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={onDelete}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </div> */}
                            <div className="flex justify-between px-10 py-6">
                                <button
                                    className=" w-[25%] h-[40px] rounded-lg text-[#2F5738]  bg-[#FFFFFF]"
                                    onClick={onClose}
                                    style={{ border: '1px solid gray' }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className=" w-[25%] h-[40px] text-[#FFFFFF] bg-[#2F5738]  rounded-lg "
                                    onClick={onDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="px-6 py-8 flex justify-between text-[20px] font-semibold text-[#808080]">
                <div className="flex gap-4 items-center">
                    {labels.map((item) => (
                        <label
                            key={item.value}
                            onClick={() => setSelectedLabel(item.value)}
                            className={`cursor-pointer ${
                                selectedLabel === item.value
                                    ? 'text-[#2F5738] underline'
                                    : 'text-[#808080]'
                            }`}
                        >
                            {item.label}
                        </label>
                    ))}
                </div>
                <div
                    className="w-[168px] h-[44px] bg-[#2F5738] text-white flex items-center justify-center"
                    style={{ borderRadius: '8px' }}
                >
                    <button
                        className="flex items-center justify-center gap-3"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <FiPlusCircle />
                        <span>Add User</span>
                    </button>
                </div>
            </div>
            <div>{renderContent()}</div>
            <AddUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addUsers}
                type={selectedUser ? 'update' : 'add'}
                selectedUsers={selectedUser}
            />
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onDelete={handleDeleteConfirm}
            />
        </>
    );
};

export default Details;

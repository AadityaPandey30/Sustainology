import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axiosInstance from '@/utils/service';
import AddUserModal from './addUser';
import Table from '../../common/Table';
// import fetchData from '../../common/fetchData';

const UserDetails = ({ fetchUsers, users, onIconClick, indexNumber }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(users);

    useEffect(() => {
        fetchUsers();
    }, []);

    const tableHeaderData = [
        {
            label: 'Name',
            value: 'name',
        },
        {
            label: 'Email',
            value: 'email',
        },
        {
            label: 'Designation',
            value: 'designation',
        },
        {
            label: 'Action',
            value: 'action',
        },
    ];

    const tableBodyData = users.map((user) => ({
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        designation: user.designation,
        _id: user._id,

        // action: (
        //     <button
        //         onClick={() => deleteUser(user._id)}
        //         className="text-red-500"
        //     >
        //         Delete
        //     </button>
        // ),
    }));

    console.log(fetchUsers);

    const testfunction = () => {
        fetchUsers();
    };
    // const deleteUser = async (userId) => {
    //     try {
    //         await axiosInstance.delete(`/business-user/${userId}`);
    //         toast.success('User deleted successfully!');
    //         fetchUsers(); // Refresh the user list
    //     } catch (error) {
    //         console.error('Error deleting user:', error);
    //         toast.error('Failed to delete user.');
    //     }
    // };

    return (
        // Render Prop
        <div>
            <Table
                tableHeaderData={tableHeaderData}
                tableBodyData={tableBodyData}
                onIconClick={onIconClick}
                indexNumber={indexNumber}
            />
            <AddUserModal
                fetchUsers={() => testfunction()}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default UserDetails;

import React from 'react';
import Modal from './Modal';

const DeleteModal = ({ user, onClose, onDelete }) => {
    if (!isOpen) return null;
    const handleDeleteClick = async (user) => {
        try {
            console.log(user, 'hhhhh');
            const userId = user._id;
            await axiosInstance.delete(`business-user/delete/${userId}`);
            toast.success('User deleted successfully!');
            fetchUsers();
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user.');
        }
    };
    return (
        <div>
            <Modal
                // Pass the showModal state to determine if the modal should be shown
                divClass="inline-block align-bottom bg-[#FCFDFA] rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
                {/* Your modal content goes here */}

                <p className="text-center text-[24px] text-[#4C4C4C] font-semibold py-5">
                    Are you sure you want to delete Customer Detail?
                </p>
                <div className="flex justify-between px-10 py-5">
                    <button
                        className=" w-[25%] h-[40px] text-[#2F5738] rounded-lg bg-[#FFFFFF]"
                        style={{ border: '1px solid gray' }}
                        onClick={onDelete}
                    >
                        Delete
                    </button>

                    <button
                        className=" w-[25%] h-[40px] rounded-lg text-[#FFFFFF] bg-[#2F5738]"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default DeleteModal;

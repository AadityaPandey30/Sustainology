import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { headersAction } from '@/redux/slices/headersSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { sidebarToggle } from '@/redux/slices/sidebarToggleSlice';

import Modal from './Modal'; // Import the Modal component here

export default function BusinessHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control logout modal visibility
    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    const businessData = useSelector((state) => state?.businessData?.value);
    console.log(businessData, 'uuuu');
    const profileImage = businessData?.logo
        ? businessData?.logo
        : '/images/founders/Avtar.png';
    // const [profileImage] = useState(
    //     businessData?.logo ? businessData?.logo : '/images/founders/Avtar.png'
    // );
    const header = useSelector((state) => state.headers.value);
    const dispatch = useDispatch();
    const router = useRouter();
    const toggleSidebar = () => {
        dispatch(sidebarToggle());
    };

    const handleLogout = () => {
        removeCookie('user');
        removeCookie('business');
        router.push('/');
    };

    const handleCancel = () => {
        setShowLogoutModal(false); // Close the modal
    };

    return (
        <>
            <header className="flex justify-between items-center py-4 md:pr-[59px] px-5  text-[#101010] bg-[#FFFFFF] border border-[#E8E8E8] h-[74px] ">
                <div className="flex items-center gap-5">
                    <button
                        className="max-lg:block hidden"
                        onClick={toggleSidebar}
                    >
                        <RxHamburgerMenu className="text-3xl mt-1 text-[#49454E]" />
                    </button>
                    <h1 className="text-3xl leading-[40.68px] font-semibold">
                        {header}
                    </h1>
                </div>
                <div className="relative">
                    <button
                        className="focus:outline-none flex items-center gap-2 "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="h-9 w-9 rounded-full overflow-hidden">
                            <Image
                                loading="lazy"
                                src={profileImage}
                                alt="profile"
                                height={35}
                                width={35}
                                sizes={'100vw'}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div>
                            <IoMdArrowDropdownCircle className="text-xl" />
                        </div>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <ul className="py-1">
                                <li>
                                    <Link
                                        href="/business/profile"
                                        className="block hover:bg-gray-200 px-4 py-2 text-gray-800"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        href="/settings"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Settings
                                    </Link>
                                </li> */}
                                <li>
                                    <a
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        onClick={() => setShowLogoutModal(true)} // Set showModal to true when Logout is clicked
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>
            <Modal
                setShowModal={setShowLogoutModal} // Pass setShowLogoutModal to handle modal visibility
                showModal={showLogoutModal} // Pass the showModal state to determine if the modal should be shown
                divClass="inline-block align-bottom bg-[#FCFDFA] rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[75%]  sm:max-w-lg sm:w-full"
            >
                {/* Your modal content goes here */}

                <p className="text-center text-[24px] text-[#4C4C4C] font-semibold py-5">
                    Are you sure you want to logout?
                </p>
                <div className="flex justify-between px-10 py-5">
                    <button
                        className=" w-[25%] h-[40px] text-[#2F5738] rounded-lg bg-[#FFFFFF]"
                        onClick={handleCancel}
                        style={{ border: '1px solid gray' }}
                    >
                        Cancel
                    </button>

                    <button
                        className=" w-[25%] h-[40px] rounded-lg text-[#FFFFFF] bg-[#2F5738]"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </Modal>
        </>
    );
}

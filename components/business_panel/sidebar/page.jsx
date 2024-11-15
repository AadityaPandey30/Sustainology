'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoHomeSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { headersAction } from '@/redux/slices/headersSlice';
import { IoHomeOutline } from 'react-icons/io5';
import { BsChatDotsFill } from 'react-icons/bs';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { FaRegUser } from 'react-icons/fa';
import { FaHeadphones } from 'react-icons/fa6';
import { sidebarToggle } from '@/redux/slices/sidebarToggleSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useCookies } from 'react-cookie';
import { businessDataAction } from '@/redux/slices/businessDataSlice';
import axiosInstance from '@/utils/service';
const navItems = [
    {
        name: 'Dashboard',
        id: 'dashboard',
        icon: IoHomeOutline,
        path: '/business/dashboard',
    },
    {
        name: 'Customer Details',
        id: 'customerDetails',
        icon: BsChatDotsFill,
        path: '/business/customerDetails',
    },
    {
        name: 'Transcation',
        id: 'trancation',
        icon: PiArrowsLeftRightBold,
        path: '/business/transcation',
    },
    {
        name: 'Invoice Status',
        id: 'invoiceStatus',
        icon: LiaFileInvoiceDollarSolid,
        path: '/business/invoiceStatus',
    },
    {
        name: 'Contact Us',
        id: 'contactUs',
        icon: FaHeadphones,
        path: '/business/contactUs',
    },
    {
        name: 'Profile',
        id: 'profile',
        icon: FaRegUser,
        path: '/business/profile',
    },
];

const Sidebar = () => {
    const [active, setActive] = useState('dashboard');
    const [cookies] = useCookies(['user']);
    const [businessId] = useState(cookies?.user?.businessId);
    useEffect(() => {
        const fetchBusinessData = async () => {
            if (businessId) {
                let response = await axiosInstance.get(
                    '/business/businessId/' + businessId
                );
                dispatch(businessDataAction(response.data.response)); // Dispatch the action with the item name as payload)
            }
        };

        fetchBusinessData();
    }, [businessId]);
    const isSidebarOpen = useSelector((state) => state?.sideBarToggle?.value);
    const businessData = useSelector((state) => state?.businessData?.value);
    console.log(businessData, 'businessData');

    const dispatch = useDispatch();

    const businessName = businessData?.name;
    const profileImage = businessData?.logo
        ? businessData?.logo
        : '/images/founders/Avtar.png';

    const toggleSidebar = () => {
        dispatch(sidebarToggle());
    };
    return (
        <div className="overflow-hidden  py-5">
            <div className="flex  items-center justify-between mb-5  ">
                {/* Sidebar Toggle Button for small screens */}
                <div className="flex  justify-end lg:hidden ml-4  ">
                    <button onClick={toggleSidebar} className="">
                        <RxHamburgerMenu className="text-3xl text-[#49454E] " />
                    </button>
                </div>
                <div className="flex items-center  gap-5 px-10">
                    <Image
                        loading="lazy"
                        src={profileImage}
                        alt=""
                        width={40}
                        height={41}
                    ></Image>
                    <h1 className="text-[28px] font-bold text-[#333333]">
                        {businessName}
                    </h1>
                </div>
            </div>
            {/* <ul>
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={` flex items-center  gap-3 text-[20px] font-bold  p-4 px-7 text-[#666666] cursor-pointer ml-3 ${
                            active === item.id
                                ? 'bg-[#2F5738] text-[#FFFFFF] rounded-lg flex items-center h-[48px] w-[70%]'
                                : ''
                        }`}
                        onClick={() => setActive(item.id)}
                    >
                        <Image loading="lazy"
                            src={item.icon}
                            alt={item.name}
                            width={18}
                            height={18}
                        />
                        {item.name}
                    </li>
                ))}
            </ul> */}
            <ul>
                {navItems.map((item) => (
                    <li key={item.id} className="ml-3">
                        <Link href={item.path} legacyBehavior>
                            <div
                                className={`flex items-center gap-3 text-[20px] font-bold p-4 px-7 mr-3 text-[#666666] cursor-pointer ${
                                    active === item.id
                                        ? 'bg-[#2F5738] text-[#FFFFFF] rounded-lg  '
                                        : ''
                                }`}
                                onClick={() => {
                                    setActive(item.id);
                                    dispatch(headersAction(item.name)); // Dispatch the action with the item name as payload)
                                    toggleSidebar();
                                }}
                                // onClick={() => handleItemClick(item)}
                            >
                                {/* <Image loading="lazy"
                                    src={item.icon}
                                    alt={item.name}
                                    width={18}
                                    height={18}
                                    // className={
                                    //     active === item.id ? 'bg' : 'green'
                                    // }
                                /> */}
                                <item.icon className="text-lg font-bold" />
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="fixed lg:bottom-5 max-lg:bottom-20 text-[16px] px-8 gap-3 font-semibold flex items-center">
                <Image
                    loading="eager"
                    src="https://res.cloudinary.com/deels6aft/image/upload/v1720017397/logo_2_ivnkog.png"
                    alt=""
                    width={40}
                    height={39}
                ></Image>
                <p className=" text-[#666666] leading-4">
                    {' '}
                    Powered By <br />
                    <span className="text-[black] font-bold]">
                        SUSTAINOLOGY{' '}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;

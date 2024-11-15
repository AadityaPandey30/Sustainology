'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { BiSolidEdit } from 'react-icons/bi';
import axiosInstance from '@/utils/service';
import { useSelector } from 'react-redux';
import { businessDataAction } from '@/redux/slices/businessDataSlice';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
    const [cookie, setCookie] = useCookies(['user']);
    const businessData = useSelector((state) => state?.businessData?.value);
    const [trigger, setTrigger] = useState(false);
    const dispatch = useDispatch();
    console.log(businessData);
    const businessId = cookie?.user?.businessId;
    const profileImage = businessData?.logo
        ? businessData?.logo
        : '/images/founders/Avtar.png';
    useEffect(() => {
        const fetchBusinessData = async () => {
            if (businessId) {
                let response = await axiosInstance.get(
                    '/business/businessId/' + businessId
                );
                dispatch(businessDataAction(response.data.response));
                console.log(response.data.response);
            }
        };

        fetchBusinessData();
    }, [businessId, trigger]);

    const handleImageChange = async (e) => {
        console.log(handleImageChange, 'isss');
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files, 'hhhh', cookie);
            const formData = new FormData();
            formData.append('csv', e.target.files[0]);
            await axiosInstance.post(`/business/logo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookie?.user?.token}`,
                },
            });
            setTrigger(!trigger);

            // Update the state
        }
    };

    // return (
    //     <div className="py-4 pr-[59px] px-5 bg-white rounded-xl shadow-md w-[95%] ml-5 mt-6 flex gap-8">
    //         <div className="flex items-center relative">
    //             <div className="w-[123px] rounded-full overflow-hidden">
    //                 <Image loading="lazy"
    //                     src={profileImage}
    //                     alt="profile"
    //                     height={123}
    //                     width={123}
    //                     sizes={'100vh'}
    //                     className="h-full w-full object-cover"
    //                 />
    //             </div>
    //             <div
    //                 className="absolute left-[95px] top-[90px] rounded-full h-[40px] w-[40px] shadow-2xl bg-[#FFFFFF] cursor-pointer"
    //                 onClick={() => document.getElementById('fileInput').click()}
    //             >
    //                 <BiSolidEdit className="text-[#747279] ml-2 mt-2 text-2xl" />
    //             </div>
    //             <input
    //                 id="fileInput"
    //                 type="file"
    //                 accept="image/*"
    //                 className="hidden"
    //                 onChange={handleImageChange}
    //             />
    //         </div>
    //         <div className="text-[20px] font-semibold grid xl:grid-cols-2 max-xl:grid-rows-2 gap-x-7 items-center">
    //             <label>
    //                 Full Name
    //                 <br />
    //                 <input
    //                     type="text"
    //                     placeholder="Enter your name"
    //                     className="px-4"
    //                     value={`${cookie?.user?.firstName || ''} ${cookie?.user?.lastName || ''}`}
    //                     disabled
    //                     style={{
    //                         border: '1px solid #C9C9CB',
    //                         borderRadius: '8px',
    //                         width: '300px',
    //                         height: '44px',
    //                     }}
    //                 />
    //             </label>

    //             <label>
    //                 Email ID
    //                 <br />
    //                 <input
    //                     type="text"
    //                     disabled
    //                     placeholder="Enter your EmailId"
    //                     className="px-4"
    //                     value={cookie?.user?.email || ''}
    //                     style={{
    //                         border: '1px solid #C9C9CB',
    //                         borderRadius: '8px',
    //                         width: '300px',
    //                         height: '44px',
    //                     }}
    //                 />
    //             </label>
    //         </div>
    //     </div>
    // );
    console.log(profileImage, 'ram');
    return (
        <div className="py-4 pr-[59px] px-5 bg-white rounded-xl shadow-md w-[95%] ml-5 mt-6 flex gap-8">
            <div className="flex items-center relative">
                <div className="w-[123px] rounded-full overflow-hidden">
                    <Image
                        loading="lazy"
                        src={profileImage}
                        alt="profile"
                        height={123}
                        width={123}
                        sizes={'100vh'}
                        className="h-full w-full object-cover"
                    />
                </div>
                <label
                    htmlFor="fileInput"
                    className="absolute left-[95px] top-[90px] rounded-full h-[40px] w-[40px] shadow-2xl bg-[#FFFFFF] cursor-pointer"
                >
                    <BiSolidEdit className="text-[#747279] ml-2 mt-2 text-2xl" />
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            </div>
            <div className="text-[20px] font-semibold w-[100%] sm:w-[90%] md:w-[80%] grid xl:grid-cols-2 max-xl:grid-rows-2 gap-x-7 items-center">
                <label>
                    Full Name
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="px-4 w-full py-2"
                        value={`${cookie?.user?.firstName || ''} ${cookie?.user?.lastName || ''}`}
                        disabled
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '300px',
                            // height: '44px',
                        }}
                    />
                </label>

                <label>
                    Email ID
                    <br />
                    <input
                        type="text"
                        disabled
                        placeholder="Enter your EmailId"
                        className="px-4 w-full py-2"
                        value={cookie?.user?.email || ''}
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '300px',
                            // height: '44px',
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default UserProfile;

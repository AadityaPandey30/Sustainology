// import React from 'react';

// const Box = () => {
//     const boxContents = [
//         { title: 'Total API Calls', value: '260' },
//         { title: 'No of Calls Exhausted', value: '65' },
//         { title: 'Remaining Calls', value: '20' },
//         { title: 'Total Customer', value: '500' },
//         { title: 'Total Carbon Credits', value: '1000' },
//         { title: 'Total Payable Amount', value: '2000' },
//     ];

//     return (
//         <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {boxContents.map((box, index) => (
//                 <div
//                     key={index}
//                     className="w-full h-[137px] leading-9 shadow-xl py-3 px-3 rounded-2xl bg-[#FFFFFF]"
//                 >
//                     <p className="text-[20px] text-[#191919] font-semibold">
//                         {box.title}
//                     </p>
//                     <p className="text-[43px] text-[#191919] font-semibold">
//                         {box.value}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Box;

//
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axiosInstance from '@/utils/service';

const Box = () => {
    const [boxContents, setBoxContents] = useState([
        {
            title: 'Total API Calls',
            value: 'Loading...',
            image: 'phone.png',
        },
        {
            title: 'No of Calls Exhausted',
            value: 'Loading...',
            image: 'phone2.png',
        },
        { title: 'Remaining Calls', value: 'Loading...', image: 'phone3.png' },
        { title: 'Total Customer', value: 'Loading...', image: 'Frame.png' },
        {
            title: 'Total Carbon Credits',
            value: 'Loading...',
            image: 'Frame 7.png',
        },
        {
            title: 'Total Payable Amount',
            value: 'Loading...',
            image: 'money.png',
        },
    ]);

    useEffect(() => {
        axiosInstance
            .get('/business/dashboard')
            .then((response) => {
                const data = response.data.response;
                setBoxContents([
                    {
                        title: 'Total API Calls',
                        value: data.totalApiCalls,
                        image: 'phone.png',
                    },
                    {
                        title: 'No of Calls Exhausted',
                        value: data.numberOfCallsExausted,
                        image: 'phone2.png',
                    },
                    {
                        title: 'Remaining Calls',
                        value: data.availableApiCalls,
                        image: 'phone3.png',
                    },
                    {
                        title: 'Total Customer',
                        value: data.totalCustomers,
                        image: 'Frame.png',
                    },
                    {
                        title: 'Total Carbon Credits',
                        value: data.totalCarbonCredit,
                        image: 'Frame 7.png',
                    },
                    {
                        title: 'Total Payable Amount',
                        value: data.totalPayedAmount,
                        image: 'money.png',
                    },
                ]);
            })
            .catch((error) => {
                console.error('Error fetching dashboard data:', error);
                // Optionally handle the error here by updating the state or showing an error message
            });
    }, []);

    return (
        <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxContents.map((box, index) => (
                <div
                    key={index}
                    className="w-full h-[137px] leading-3 shadow-xl py-3 px-3 rounded-2xl bg-[#FFFFFF]"
                >
                    <div className="flex items-center justify-between">
                        <p className="text-[20px] text-[#191919] font-semibold">
                            {box.title}
                        </p>
                        <div>
                            <Image
                                loading="lazy"
                                src={`/images/${box.image}`}
                                alt={box.title}
                                width={64}
                                height={64}
                                className=""
                            />
                        </div>
                    </div>
                    <p className="text-[43px] text-[#191919] font-semibold">
                        {box.value}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Box;

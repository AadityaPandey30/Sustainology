import React, { useState } from 'react';
import axiosInstance from '@/utils/service.js';
import { toast } from 'react-toastify';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axiosInstance.post(`/newsletter/subscribe`, {
                email,
            });
            console.log(response);
            if (response?.status === 200) {
                console.log(response?.data);
                toast.success(response?.data?.message);
                setEmail('');
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message || 'Failed');
        }
    };

    // Update the state with the new input
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    return (
        <div className="flex justify-center items-center py-10">
            <div className="bg-white p-8 rounded-lg border border-[#E5E5E5] max-w-2xl w-full">
                <h2 className="font-bold text-4xl md:text-[52px] md:leading-[60px] text-[#33496F] text-center mb-4">
                    Subscribe To Our
                    <br />
                    Newsletter
                </h2>
                <p className="text-[#808080] md:text-xl text-lg font-semibold text-center mb-8">
                    Learn about the latest trends in sustainability Subscribe to
                    our newsletter
                </p>
                <form className=" " onSubmit={handleSubmit}>
                    <div className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 flex justify-between gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-md w-full focus:outline-none "
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button
                            type="submit"
                            className=" top-0 right-0 pb-[10px] px-4 py-2 hover:text-[#2F5738] text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738]"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSection;

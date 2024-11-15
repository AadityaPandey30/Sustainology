// Success.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const Success = ({ order, isModalOpen }) => {
    const [certificateUrl, setCertificateUrl] = React.useState('');
    const params = useSearchParams();
    let orderID = order ? order._id : params.get('orderId');
    console.log(orderID, 'orderID', order);
    const [wasModalOpen, setWasModalOpen] = useState(isModalOpen);

    useEffect(() => {
        // If the modal was open and is now closed, reload the page
        if (wasModalOpen && !isModalOpen) {
            window.location.reload();
        }

        // Update the state to the current modal open status
        setWasModalOpen(isModalOpen);
    }, [isModalOpen]);
    useEffect(() => {
        const fetchDetails = async () => {
            let details = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/order/${orderID}`
            );
            // console.log(details.data.response, 'details');
            setCertificateUrl(
                details?.data?.response?.certificateDetails?.credential_url
            );
        };

        fetchDetails();
    }, [orderID]);

    // console.log(order, 'order')
    const handleOpen = () => {
        // Logic to copy the certificate URL to the clipboard
        // navigator.clipboard.writeText(certificateUrl);
        window.open(certificateUrl, '_blank');
    };

    // useEffect(async() => {

    //    let details =await  axios.get(`${process.env.NEXT_PUBLIC_URL}/order/${order?._id}`)
    //     setCertificateUrl(details?.data?.response?.certificateDetails?.certificateUrl)

    // },[order])

    return (
        <div className="modal-content">
            <h2
                className="text-3xl text-center font-bold  mb-4"
                style={{ color: '#33496F' }}
            >
                Congratulations
            </h2>
            <h3
                className="text-xl text-center font"
                style={{ color: '#666666' }}
            >
                Thank you so much for purchasing carbon credits! Your commitment
                to offsetting carbon emissions is truly commendable.{' '}
            </h3>
            <div
                className="video-container"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Insert your image */}
                <img
                    src="/success.png"
                    alt="Success Image"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                    }}
                />
            </div>
            <div className="text-center mt-4">
                <h2
                    className="text-3xl text-center font-bold  mb-4"
                    style={{ color: '#33496F' }}
                >
                    Share Your Certificate
                </h2>
                {/* <a href=`${url}` className="text-blue-500 font-semibold"></a> */}
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-2 px-4 mr-2 w-full"
                        value={certificateUrl}
                        readOnly
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        onClick={handleOpen}
                    >
                        Open
                        {/* <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.8594 9.51172H11.8594C10.7548 9.51172 9.85938 10.4071 9.85938 11.5117V20.5117C9.85938 21.6163 10.7548 22.5117 11.8594 22.5117H20.8594C21.9639 22.5117 22.8594 21.6163 22.8594 20.5117V11.5117C22.8594 10.4071 21.9639 9.51172 20.8594 9.51172Z"
                                stroke="#666666"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5.85938 15.5117H4.85938C4.32894 15.5117 3.82023 15.301 3.44516 14.9259C3.07009 14.5509 2.85938 14.0422 2.85938 13.5117V4.51172C2.85938 3.98129 3.07009 3.47258 3.44516 3.09751C3.82023 2.72243 4.32894 2.51172 4.85938 2.51172H13.8594C14.3898 2.51172 14.8985 2.72243 15.2736 3.09751C15.6487 3.47258 15.8594 3.98129 15.8594 4.51172V5.51172"
                                stroke="#666666"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;

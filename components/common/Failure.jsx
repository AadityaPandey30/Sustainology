// Failure.js
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const Failure = ({ handleTryAgain }) => {
    return (
        <div className="modal-content">
            <h2
                className="text-3xl text-center font-bold text-red-500 mb-4"
                style={{ color: '#33496F' }}
            >
                Payment Failed
            </h2>
            <h3
                className="text-xl text-center font"
                style={{ color: '#666666' }}
            >
                Please try again.
            </h3>
            <div className="">
                <Image
                    src="/failedPayment.png"
                    alt="failed payment"
                    width={100}
                    height={100}
                    className="w-full h-full"
                    sizes="100vw"
                />
            </div>

            <div className="text-center mt-4">
                <Button
                    href="/for-individual"
                    className=" text-[20px] leading-[27.12px] py-[10px] w-full md:w-[70%] rounded-[8px] font-semibold bg-[#2F5738] text-white"
                    onClick={handleTryAgain}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default Failure;

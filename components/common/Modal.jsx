import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export default function Modal({ setShowModal, showModal, children, divClass }) {
    if (!showModal) return null;
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
                    onClick={() => setShowModal(false)}
                ></div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className={divClass}>
                    {/* Cancel icon */}
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                            <IoMdCloseCircleOutline className="text-[#BD3C3C]" />
                        </span>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
}

'use client';
import React from 'react';

export default function Dialog({
    setShowModal,
    showModal,
    children,
    handleCloseModal,
}) {
    if (!showModal) return null;
    return (
        <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 2000 }}
        >
            <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4  sm:pb-4">
                        {/* Close button */}
                        <button
                            className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleCloseModal}
                            style={{ zIndex: 2000 }}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {/* Modal content */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

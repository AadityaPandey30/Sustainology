import React from 'react';

const Toast = ({ type, message, isOpen, closeToast }) => {
    if (!isOpen) return null;

    return (
        <div
            className={`fixed w-[300px] bottom-5 right-5 z-50 transition-transform transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div
                className={`max-w-sm w-full text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 ${
                    type === 'success'
                        ? 'border-l-4 bg-green-500'
                        : 'border-l-4 bg-red-500'
                }`}
            >
                <div className="w-0 flex-1 flex items-center p-4">
                    <div className="w-full">
                        <p className="text-sm font-medium text-white">{type}</p>
                        <p className="mt-1 text-sm text-white">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;

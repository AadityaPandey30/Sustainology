'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function ComponentError({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h2 className="font-bold text-3xl">Something went wrong!</h2>
                <br />
                <button
                    className="font-semibold text-white bg-red-500 px-4 py-2 rounded shadow"
                    onClick={reset}
                >
                    Try again
                </button>
            </div>
        </div>
    );
}

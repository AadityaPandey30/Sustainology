// import React from 'react';
// import { FiDownload } from 'react-icons/fi';
// const Downloads = () => {
//     return (
//         <div className="">
//             <button
//                 className="flex justify-center items-center w-[40px] h-[40px] bg-[#2F5738]"
//                 style={{ border: '1px solid #2F5738', borderRadius: '8px' }}
//                 // onClick={handelDownloadCSV}
//             >
//                 <FiDownload className="text-[white] text-xl " />
//             </button>
//         </div>
//     );
// };
// export default Downloads;

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import axiosInstance from '@/utils/service'; // Adjust the import path as necessary
import { toast } from 'react-toastify';

const Downloads = () => {
    const handleDownloadCSV = async () => {
        try {
            const response = await axiosInstance.get(
                '/business/csv/transactions'
            );
            if (response.status === 200) {
                console.log(response.data, 'jjjjjj');
                const fileUrl = response.data.fileUrl; // Adjust this according to your API response structure
                const link = document.createElement('a');
                link.href = fileUrl;
                link.setAttribute('download', 'filename.csv'); // You can set the filename dynamically if needed
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('Failed to download file:', error);
            toast.error('Failed to download file.');
        }
    };

    return (
        <div>
            <button
                className="flex justify-center items-center w-[40px] h-[40px] bg-[#2F5738]"
                style={{ border: '1px solid #2F5738', borderRadius: '8px' }}
                onClick={handleDownloadCSV}
            >
                <FiDownload className="text-[white] text-xl" />
            </button>
        </div>
    );
};

export default Downloads;

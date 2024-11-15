import React from 'react';

const Status = () => {
    return (
        <>
            <div className=" flex w-full px-2">
                <div
                    className="flex  px-4 w-full h-[44px] rounded-lg items-center gap-2"
                    style={{ border: '1px solid #DCDCDD' }}
                >
                    <input type="checkbox"></input>
                    <label className="text-[14px] text-[#5D7C64] font font-semibold">
                        Complete
                    </label>
                </div>

                <div
                    className="flex ml-10 px-4 w-[100%] h-[44px] rounded-lg items-center gap-2"
                    style={{ border: '1px solid #DCDCDD' }}
                >
                    <input type="checkbox"></input>
                    <label className="text-[14px] text-[#AE3F3F] font font-semibold">
                        Cancel
                    </label>
                </div>
            </div>
            <div
                className="flex ml-2 mt-6 px-4 w-[43%] h-[44px] rounded-lg items-center gap-2"
                style={{ border: '1px solid #DCDCDD' }}
            >
                <input type="checkbox"></input>
                <label className="text-[14px] text-[#33496F] font font-semibold">
                    Pending
                </label>
            </div>

            {/* <div className="px-4 flex items-center justify-between mt-20">
                <button
                    className="text-[#2F5738] h-[40px] rounded-lg w-[30%] text-[16px] font-semibold "
                    style={{ border: '1px solid green' }}
                >
                    ClearAll
                </button>

                <button
                    className="text-[#FFFFFF] bg-[#2F5738] h-[40px] rounded-lg w-[30%] text-[16px] font-semibold "
                    style={{ border: '1px solid green' }}
                >
                    Apply
                </button>
            </div> */}
        </>
    );
};
export default Status;

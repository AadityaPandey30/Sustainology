import React from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

const PlanDetails = () => {
    // const [cookies] = useCookies(['business']);
    // const planName = cookies?.business?.planId?.name;
    // const calls = cookies?.business?.planId?.calls;
    const businessData = useSelector((state) => state?.businessData?.value);
    const planName = businessData?.planId?.name;
    const calls = businessData?.planId?.calls;
    return (
        <div className="pr-[59px] mb-16 mx-5 bg-white shadow-md rounded-xl flex ">
            <div className="py-6 px-14 text-[20px] w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%]  font-semibold grid grid-row-2 gap-7 items-center text-[#333333]">
                <label>
                    Plan Name
                    <br />
                    <div
                        className="px-5 w-full h-[45px]"
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '552px',
                            // height: '54px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 10px',
                        }}
                    >
                        {planName}
                    </div>
                </label>

                <label>
                    Total Calls provided
                    <br />
                    <div
                        className="px-5 w-full h-[45px] "
                        style={{
                            border: '1px solid #C9C9CB',
                            borderRadius: '8px',
                            // width: '552px',
                            // height: '54px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 10px',
                        }}
                    >
                        {calls}
                    </div>
                </label>
            </div>
        </div>
    );
};

export default PlanDetails;

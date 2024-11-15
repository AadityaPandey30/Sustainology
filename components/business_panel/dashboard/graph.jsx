// 'use client';
// import { AreaChart, Card } from '@tremor/react';

// const chartdata = [
//     {
//         date: 'Jan 23',
//         'Route Requests': 289,
//         'Station Requests': 233,
//     },
//     // ...
//     {
//         date: 'Oct 23',
//         'Route Requests': 283,
//         'Station Requests': 247,
//     },
// ];

// export default function Example() {
//     return (
//         <Card className="max-w-4xl ml-10 mb-6">
//             <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
//                 Usage Trend
//             </span>
//             <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
//                 6,568
//             </p>
//             <AreaChart
//                 className="mt-2 h-80"
//                 data={chartdata}
//                 index="date"
//                 categories={['Route Requests', 'Station Requests']}
//                 colors={['indigo', 'rose']}
//                 yAxisWidth={33}
//             />
//         </Card>
//     );
// }

// 'use client';
// import { AreaChart, Card } from '@tremor/react';
// // import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// const chartdata = Array.from({ length: 31 }, (v, i) => ({
//     date: (i + 1).toString(),
//     Increase: Math.floor(Math.random() * 800), // Example random data for 'Increase'
//     Decrease: Math.floor(Math.random() * 800), // Example random data for 'Decrease'
// }));

// export default function Example() {
//     return (
//         <Card className="max-w-4xl ml-10 mb-6 p-4">
//             <div className="flex flex-col items-center">
//                 <div className="flex flex-row items-center justify-between w-full mb-2">
//                     <div className="text-center">
//                         <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
//                             Usage Trend
//                         </span>
//                         <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
//                             6,568
//                         </p>
//                     </div>
//                     <div className="flex flex-row space-x-4">
//                         <span className="text-lg font-medium text-indigo-600">
//                             Increase
//                         </span>

//                         <span className="text-lg font-medium text-rose-600">
//                             Decrease
//                         </span>
//                         {/* <div className="flex items-center bg-green-200 rounded-full px-4 py-2">
//                             <FaArrowUp className="text-black text-lg mr-2" />
//                             <p className="text-black font-medium">Increase</p>
//                         </div>
//                         <div className="flex items-center bg-green-200 rounded-full px-4 py-2">
//                             <FaArrowDown className="text-black text-lg mr-2" />
//                             <p className="text-black font-medium">Decrease</p>
//                         </div> */}
//                     </div>
//                     <div className="mb-4">
//                         <select
//                             // value={selectedOption}
//                             // onChange={handleOptionChange}
//                             className="p-2 rounded "
//                             style={{ border: '1px solid #DBDBDB' }}
//                         >
//                             <option value="Weekly">Weekly</option>
//                             <option value="Monthly">Monthly</option>
//                             <option value="Yearly">Yearly</option>
//                             <option value="CustomDate">Custom Date</option>
//                         </select>
//                     </div>
//                 </div>
//                 <AreaChart
//                     className="mt-2 h-80 w-full"
//                     data={chartdata}
//                     index="date"
//                     categories={['Increase', 'Decrease']}
//                     // colors={['indigo', 'rose']}
//                     yAxisWidth={33}
//                     tickValues={[100, 300, 600, 800]} // Custom tick values for the y-axis
//                 />
//             </div>
//         </Card>
//     );
// }

// 'use client';
// import { useState, useEffect } from 'react';
// import { AreaChart, Card } from '@tremor/react';
// import axiosInstance from '@/utils/service'; // Adjust the path as necessary
// // import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Uncomment if you need icons

// export default function Example() {
//     const [chartData, setChartData] = useState([]);
//     const [selectedOption, setSelectedOption] = useState('Weekly');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axiosInstance.get(
//                     '/business/graph/report',
//                     {
//                         params: { week: true },
//                     }
//                 );
//                 setChartData(response.data.response);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleOptionChange = async (event) => {
//         const option = event.target.value;
//         setSelectedOption(option);

//         let params = {};
//         if (option === 'Weekly') {
//             params.week = true;
//         } else if (option === 'Yearly') {
//             params.year = true;
//         } else if (option === 'CustomDate') {
//             // Add custom date logic here
//             // params.startDate = '...';
//             // params.endDate = '...';
//         }

//         try {
//             const response = await axiosInstance.get('/business/graph/report', {
//                 params,
//             });
//             const transformedData = response.data.response.map((item) => ({
//                 date: params.week
//                     ? item.week
//                     : params.year
//                       ? item.year
//                       : item.month,

//                 // Using 'month' as the date index
//                 Increase: item.totalCalls, // Assuming totalCalls as Increase
//                 Decrease: Math.floor(Math.random() * 800), // Adding dummy Decrease data
//             }));

//             setChartData(transformedData);
//             // setChartData(response.data.response);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <Card className="max-w-4xl ml-10 mb-6 p-4">
//             <div className="flex flex-col items-center">
//                 <div className="flex flex-row items-center justify-between w-full mb-2">
//                     <div className="text-center">
//                         <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
//                             Usage Trend
//                         </span>
//                         {/* <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
//                             6,568
//                         </p> */}
//                     </div>
//                     <div className="flex flex-row space-x-4">
//                         <span className="text-lg font-medium text-indigo-600">
//                             Increase
//                         </span>

//                         <span className="text-lg font-medium text-rose-600">
//                             Decrease
//                         </span>
//                     </div>
//                     <div className="mb-4">
//                         <select
//                             value={selectedOption}
//                             onChange={handleOptionChange}
//                             className="p-2 rounded"
//                             style={{ border: '1px solid #DBDBDB' }}
//                         >
//                             <option value="Weekly">Weekly</option>
//                             <option value="Monthly">Monthly</option>
//                             <option value="Yearly">Yearly</option>
//                             <option value="CustomDate">Custom Date</option>
//                         </select>
//                     </div>
//                 </div>
//                 <AreaChart
//                     className="mt-2 h-80 w-full"
//                     data={chartData}
//                     index="date"
//                     // categories={['Increase', 'Decrease']}
//                     colors={['indigo', 'rose']}
//                     yAxisWidth={33}
//                     tickValues={[100, 300, 600, 800]} // Custom tick values for the y-axis
//                 />
//             </div>
//         </Card>
//     );
// }

'use client';
import { useState, useEffect } from 'react';
import { AreaChart, Card } from '@tremor/react';
import axiosInstance from '@/utils/service'; // Adjust the path as necessary

export default function Example() {
    const [chartData, setChartData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('Monthly');

    // Data transformation function
    const transformData = (data, params) => {
        return data.map((item) => ({
            date: params.week
                ? item.week
                : params.year
                  ? item.year
                  : item.month, // Set date based on params
            Increase: item.totalCalls, // Assuming totalCalls as Increase
            Decrease: Math.floor(Math.random() * 10), // Adding dummy Decrease data
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(
                    '/business/graph/report',
                    {
                        params: { month: true }, // Default to monthly data
                    }
                );
                const transformedData = transformData(
                    response.data.response,
                    {}
                );
                setChartData(transformedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOptionChange = async (event) => {
        const option = event.target.value;
        setSelectedOption(option);

        let params = {};
        if (option === 'Weekly') {
            params.week = true;
        } else if (option === 'Yearly') {
            params.year = true;
        } else if (option === 'CustomDate') {
            // Add custom date logic here
            // params.startDate = '...';
            // params.endDate = '...';
        }

        try {
            const response = await axiosInstance.get('/business/graph/report', {
                params: option === 'Monthly' ? undefined : params,
            });
            const transformedData = transformData(
                response.data.response,
                params
            );
            setChartData(transformedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Card className="max-w-4xl ml-10 mb-6 p-4">
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-between w-full mb-2">
                    <div className="text-center">
                        <span className="text-tremor-default text-[20px]  font-bold text-tremor-content dark:text-dark-tremor-content">
                            Usage Trend
                        </span>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <span className="text-lg font-medium text-[green]">
                            Increase
                        </span>

                        <span className="text-lg font-medium text-rose-600">
                            Decrease
                        </span>
                    </div>
                    <div className="mb-4">
                        <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className="p-2 rounded "
                            style={{ border: '1px solid #DBDBDB' }}
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                            <option value="CustomDate">Custom Date</option>
                        </select>
                    </div>
                </div>
                <AreaChart
                    className="mt-2 h-80 w-full"
                    data={chartData}
                    index="date"
                    categories={['Increase', 'Decrease']}
                    colors={['green', 'red']}
                    yAxisWidth={33}
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} // Custom tick values for the y-axis
                    xScale={{
                        type: 'time',
                        precision: 'month',
                        format: '%Y-%m', // Display format for the x-axis
                    }}
                />
            </div>
        </Card>
    );
}

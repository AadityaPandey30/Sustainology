'use client';

const checkboxes = [
    { id: 1, label: 'Today' },
    { id: 2, label: 'Last 7 days' },
    { id: 3, label: 'Last 15 days' },
    { id: 4, label: 'Last Month' },
    { id: 5, label: 'Last 3 month' },
    { id: 6, label: 'Last 6 month' },
    { id: 7, label: 'Last year' },
    { id: 8, label: 'Anytime' },
];

const Date1 = ({ handleDateFilter, selectedFilter, endDate, startDate }) => {
    return (
        <>
            <div className="flex flex-wrap w-full gap-2 px-2">
                {checkboxes.map((checkbox, index) => (
                    <div
                        key={checkbox.id}
                        // className={`flex px-4 w-full  md:w-[calc(50%-8px)] h-[44px] rounded-lg items-center gap-2 mb-4 ${
                        //     (index + 1) % 2 !== 0 ? 'mr-4' : ''
                        // }`}
                        className={`flex px-4 w-full  md:w-[calc(50%-8px)] h-[44px] rounded-lg items-center  gap-2 mb-4 `}
                        style={{ border: '1px solid #DCDCDD' }}
                    >
                        {selectedFilter ? (
                            <input
                                type="radio"
                                id={`checkbox-${checkbox.id}`}
                                onChange={(e) =>
                                    handleDateFilter(e, checkbox.label)
                                }
                                checked={
                                    selectedFilter &&
                                    (selectedFilter == checkbox.label ||
                                        (selectedFilter == 'fromTime' &&
                                            checkbox.label == 'Anytime') ||
                                        (selectedFilter == 'toTime' &&
                                            checkbox.label == 'Anytime'))
                                        ? true
                                        : false
                                }
                            />
                        ) : (
                            <input
                                type="radio"
                                id={`checkbox-${checkbox.id}`}
                                onChange={(e) =>
                                    handleDateFilter(e, checkbox.label)
                                }
                            />
                        )}

                        <label
                            htmlFor={`checkbox-${checkbox.id}`}
                            className="text-[14px] text-[#5D7C64] font-semibold"
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            {(selectedFilter == 'Anytime' ||
                selectedFilter == 'fromTime' ||
                selectedFilter == 'toTime') && (
                <div>
                    <div className="flex flex-wrap w-full px-2 ">
                        <div
                            className={`flex px-4 w-full md:w-[calc(50%-8px)] h-[44px] rounded-lg items-center gap-2 mb-4 mr-4`}
                            style={{ border: '1px solid #DCDCDD' }}
                        >
                            <input
                                type="date"
                                className="w-full px-4 py-2  rounded-lg"
                                onChange={(e) =>
                                    handleDateFilter(e, 'fromTime')
                                }
                                value={startDate}
                            />
                        </div>
                        <div
                            className={`flex px-4 w-full md:w-[calc(50%-8px)] h-[44px] rounded-lg items-center gap-2 mb-4`}
                            style={{ border: '1px solid #DCDCDD' }}
                        >
                            <input
                                type="date"
                                className="w-full px-4 py-2  rounded-lg"
                                onChange={(e) => handleDateFilter(e, 'toTime')}
                                value={endDate}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Date1;

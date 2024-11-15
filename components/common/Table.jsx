import { ResetTvRounded } from '@mui/icons-material';
import moment from 'moment';
import React, { memo, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Table = ({
    tableHeaderData,
    tableBodyData,
    onIconClick,
    isEdit = true,
    isDelete = true,
}) => {
    // const [isEditOpen, setIsEditOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);

    const handleIconClick = (item, action, indexNumber) => {
        onIconClick(item, action, indexNumber);
    };

    // const getStatusColor = (status) => {
    //     return status === 'Canceled' ? 'text-red-500' : 'text-green-500';
    // };
    const getStatusColor = (status) => {
        if (
            status?.toLowerCase() === 'completed' ||
            status?.toLowerCase() === 'paid'
        ) {
            return 'text-[#5D7C64] font-semibold text-[18px]';
        } else {
            return 'text-[#AE3F3F] font-semibold text-[18px]';
        }
    };
    return (
        <div className=" max-w-[97%] w-[97%]  overflow-x-auto">
            <table className="table-auto divide-y w-full ml-5  divide-gray-200 mb-10">
                <thead className="bg-[#F3F3F3]  shadow-md ">
                    <tr>
                        {tableHeaderData.map((item) => {
                            return (
                                <th
                                    key={item.label}
                                    className="px-4 py-3 text-left text-[20px]  whitespace-nowrap font-semibold text-[#333333] tracking-wider"
                                    // style={{ border: '1px solid red' }}
                                >
                                    {item.label}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200 overflow-x-auto text-[18px] font-medium shadow-md">
                    {tableBodyData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {tableHeaderData.map((subitem) => {
                                    if (subitem.value === 'email') {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-4 py-3"
                                            >
                                                <a
                                                    href={`mailto:${item[subitem.value]}`}
                                                    className="text-blue-600"
                                                >
                                                    {item[subitem.value]}
                                                </a>
                                            </td>
                                        );
                                    }
                                    if (subitem.value == 'action') {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-3 py-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleViewClick(item)
                                                    }
                                                >
                                                    View
                                                </button> */}
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleEditClick(item)
                                                    }
                                                >
                                                    Edit
                                                </button> */}
                                                    {isEdit && (
                                                        <div>
                                                            <CiEdit
                                                                className="h-[20px] w-[20px] cursor-pointer"
                                                                onClick={() =>
                                                                    handleIconClick(
                                                                        item,
                                                                        'edit',
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                    {isDelete && (
                                                        <div>
                                                            <RiDeleteBin6Line
                                                                className="h-[20px] w-[20px] cursor-pointer"
                                                                onClick={() =>
                                                                    handleIconClick(
                                                                        item,
                                                                        'delete'
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                    {/* <button
                                                    className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700"
                                                    onClick={() =>
                                                        handleDeleteClick(item)
                                                    }
                                                >
                                                    Delete
                                                </button> */}
                                                    {/* <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                                    edit
                                                </button>
                                                <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                                    delete
                                                </button> */}
                                                </div>
                                            </td>
                                        );
                                    } else if (
                                        subitem.value === 'receiptUrl' ||
                                        subitem.value === 'certificateUrl'
                                    ) {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-4 py-3 truncate"
                                            >
                                                <a
                                                    href={item[subitem.value]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 underline"
                                                >
                                                    {item[subitem.value]
                                                        ?.length > 30
                                                        ? item[
                                                              subitem.value
                                                          ].slice(0, 30) + '...'
                                                        : item[subitem.value]}
                                                </a>
                                            </td>
                                        );
                                    } else if (
                                        // subitem.value === 'receiptUrl' ||
                                        subitem.value === 'invoiceLink'
                                    ) {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-4 py-3"
                                            >
                                                <a
                                                    href={item[subitem.value]}
                                                    // href="https://d1zqikvhquyes6.cloudfront.net/1717075219751_BusinessTransactions.csv"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 underline"
                                                >
                                                    {/* {item[subitem.value]} */}
                                                    Download
                                                </a>
                                            </td>
                                        );
                                    } else if (
                                        subitem.value
                                            .toLowerCase()
                                            .includes('status')
                                    ) {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className={`px-4 py-3 ${getStatusColor(
                                                    item[subitem.value]
                                                )}`}
                                            >
                                                {item[subitem.value]}
                                            </td>
                                        );
                                    } else if (
                                        subitem?.value
                                            ?.toLowerCase()
                                            ?.includes('date')
                                    ) {
                                        return (
                                            <td
                                                key={subitem.value}
                                                className="px-4 py-3"
                                            >
                                                {moment(
                                                    item[subitem.value]
                                                ).format('LL')}
                                            </td>
                                        );
                                    }
                                    return (
                                        <td
                                            key={subitem.value}
                                            className="px-4 py-3"
                                        >
                                            {item[subitem.value]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}

                    {/* More rows */}
                </tbody>
            </table>
        </div>
    );
};

export default memo(Table);

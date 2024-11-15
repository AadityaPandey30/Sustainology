import React, { useState } from 'react';
import Modal from '@/components/common/Modal';
import Date from './date';
import Status from './status';
import { IoMdArrowDropdown } from 'react-icons/io';

const labels = [
    { label: 'Date', value: 0 },
    { label: 'Status', value: 1 },
];

const Filterss = ({
    handleDateFilter,
    applyFilters,
    showModal,
    setShowModal,
    selectedFilter,
    clearFilter,
    endDate,
    startDate,
}) => {
    const [selectedLabel, setSelectedLabel] = useState(labels[0].value);

    const renderContent = () => {
        switch (selectedLabel) {
            case 0:
                return (
                    <Date
                        handleDateFilter={handleDateFilter}
                        selectedFilter={selectedFilter}
                        endDate={endDate}
                        startDate={startDate}
                    />
                );
            case 1:
                return <Status />;
            default:
                return <div>Select a label to view details</div>;
        }
    };

    return (
        <div className="">
            <button
                onClick={() => setShowModal(true)}
                className="w-[106px] text-[#2F5738] text-[18px] font-semibold h-[40px] flex items-center justify-center"
                style={{ border: '1px solid #2F5738', borderRadius: '8px' }}
            >
                Filters
                <IoMdArrowDropdown className="ml-1 " />
            </button>
            {/* <button
                onClick={toggleModal}
                className="w-[106px] text-[#2F5738] text-[18px] font-semibold h-[40px] flex items-center justify-center"
                style={{ border: '1px solid #2F5738', borderRadius: '8px' }}
            >
                Filters
                <IoMdArrowDropdown className="ml-1 " />
            </button> */}
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                divClass="relative inline-block align-bottom h-[90vh] bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:my-8 sm:align-middle  w-[90%] sm:max-w-xl sm:w-full"
            >
                <div className="  p-4 bg-[#FAFAFB] h-full">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <div className="flex  ">
                        {/* Sidebar */}
                        <div className="flex flex-col w-1/4 space-y-4 h-[80vh]   pr-4 ">
                            {labels.map((item) => (
                                <label
                                    key={item.value}
                                    onClick={() => setSelectedLabel(item.value)}
                                    className={`cursor-pointer px-4 py-2 rounded ${
                                        selectedLabel === item.value
                                            ? 'bg-white text-black '
                                            : 'bg-gray text-black'
                                    }`}
                                >
                                    {item.label}
                                </label>
                            ))}
                        </div>
                        {/* Content */}
                        <div className="w-full flex flex-col justify-between">
                            <>
                                <div>{renderContent()}</div>
                                <div className="flex justify-between px-4 ">
                                    <button
                                        onClick={clearFilter}
                                        className="px-4 py-2 mr-2 bg-[#FFFFFF] h-[40px] w-[46%] sm:w-[25%] md:w-[25%] rounded-lg text-[#2F5738] font-semibold "
                                        style={{ border: '1px solid #2F5738' }}
                                    >
                                        Clear All
                                    </button>
                                    <button
                                        onClick={applyFilters}
                                        className="px-4 py-2 bg-[#2F5738] h-[40px] w-[46%] sm:w-[25%] md:w-[25%] rounded-lg text-white "
                                    >
                                        Apply
                                    </button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Filterss;

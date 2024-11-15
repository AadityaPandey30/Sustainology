import { memo } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const DropDownWithCheckBox = ({
    buttonLabel,
    keyName,
    handelOpenClose,
    isVisible,
    options,
    setFilterValues,
    setPaginationData,
    setIsChecked,
    isChecked,
}) => {
    const handelSelect = (e, value) => {
        if (e.target.checked) {
            setFilterValues((preVal) => {
                preVal[keyName] = [...preVal[keyName], value];
                preVal[keyName] = [...new Set(preVal[keyName])];
                return { ...preVal };
            });
        } else {
            setFilterValues((preVal) => {
                preVal[keyName] = preVal[keyName].filter(
                    (item) => item !== value
                );
                return { ...preVal };
            });
        }
        setIsChecked((preVal) => {
            return { ...preVal, [value]: e.target.checked };
        });
        setPaginationData((preValue) => {
            return { ...preValue, page: 1 };
        });
    };

    return (
        <span className="relative group w-full">
            <div className="block mt-4 lg:inline-block lg:mt-0 cursor-pointer">
                <span className="flex items-center">
                    <button
                        className={`py-3 px-3 sm:px-5 h-[2.25rem] w-full sm:w-[10.75rem] flex items-center justify-between rounded focus:shadow text-center bg-white text-[#2F5738] border border-[#5D7C68] font-semibold text-lg leading-6  `}
                        onClick={() =>
                            handelOpenClose(keyName, !isVisible[keyName])
                        }
                    >
                        <p>{buttonLabel} </p>
                        <p>
                            {isVisible[keyName] ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            )}
                        </p>
                    </button>
                </span>
                <div
                    className={`absolute ${isVisible[keyName] ? 'block' : 'hidden'} bg-white py-2 w-48 rounded-lg shadow-lg z-10 text-[#2F5738]  p-2 max-h-96 overflow-y-auto`}
                    onMouseLeave={() => handelOpenClose(keyName, false)}
                >
                    {options?.map((option) => {
                        return (
                            <div
                                className="mt-1 py-2 rounded text-center   border-b-2 pl-4"
                                key={option}
                            >
                                <div className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        checked={isChecked[option] || false}
                                        onChange={(e) =>
                                            handelSelect(e, option)
                                        }
                                    />
                                    <p className="capitalize">{option}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </span>
    );
};

export default memo(DropDownWithCheckBox);

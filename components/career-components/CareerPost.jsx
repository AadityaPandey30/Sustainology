import React, { useEffect, useState, Fragment } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';
import MapPin from '@/public/map-pin.svg';
import Image from 'next/image';
import axiosInstance from '@/utils/service';
import { useFetchPostType } from '@/hook/postDataOnLoad';
import { calculateReadDays } from '@/utils/utils';
import { FaFilterCircleXmark } from 'react-icons/fa6';

const CareerPost = ({
    setShowModal,
    showModal,
    setSelectedJobDetails,
    scrollRef,
}) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchName, setSearchName] = useState('');
    const [categoryData, setCategoryData] = useState([]);

    const [searchedCategoryData, setSearchedCategoryData] = useState('');
    const jobPostedResponse = useFetchPostType({
        url: '/job-post/all-job-by-category',
        options: { category: searchedCategoryData, search: searchName },
        dependencies: [searchedCategoryData, searchName],
    });
    const jobPostData = jobPostedResponse?.data?.response?.getAlljobPosts;

    useEffect(() => {
        const debounce = setTimeout(() => {
            getCategoryAndJobList();
        }, 300);

        if (!searchKeyword) {
            setSearchedCategoryData('');
        }
        return () => clearTimeout(debounce);
    }, [searchKeyword]);

    const getCategoryAndJobList = async () => {
        try {
            const categoryResponse = await axiosInstance.get(
                `/job-post/get-all-category?search=${searchKeyword}`
            );

            if (categoryResponse.status === 200) {
                const data = categoryResponse?.data?.response?.getAllCategory;
                setCategoryData(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handelSearch = (e) => {
        const word = e?.target?.value || '';
        const firstLetter = word.charAt(0);

        const firstLetterCap = firstLetter.toUpperCase();

        const remainingLetters = word.slice(1);

        const capitalizedWord = firstLetterCap + remainingLetters;
        setSearchKeyword(capitalizedWord);
        setSearchName(capitalizedWord);
    };

    const handelClear = () => {
        setSearchKeyword('');
        setSearchedCategoryData('');
    };

    return (
        <section ref={scrollRef}>
            <div className="post-bg-img pt-8">
                <div className="pt-2 lg:px-[95px] px-2">
                    <h2 className="font-bold text-[2.75rem] leading-[3.728rem] text-[#33496F] text-center capitalize ">
                        Open Roles
                    </h2>
                    <div className="md:mt-28 mt-14 lg:flex lg:gap-20 ">
                        <div className="w-full lg:w-[320px]">
                            <div className="flex justify-between border-[#DCDCDD] border py-3 px-5 bg-white rounded-lg items-center gap-2">
                                <input
                                    type="text"
                                    className="w-full outline-none"
                                    placeholder="Job Categories, Title"
                                    value={searchKeyword}
                                    onChange={handelSearch}
                                />
                                <FiSearch className="text-lg text-[#808080]" />
                            </div>
                            <div className="mt-6 max-h-[464px] lg:max-h-full overflow-y-auto">
                                {categoryData?.map((category) => {
                                    return (
                                        <button
                                            className={`rounded-lg border border-[#DCDCDD] py-3 px-5  flex justify-between items-center mb-3 w-full ${
                                                category?._id ===
                                                searchedCategoryData
                                                    ? 'bg-[#33496F] text-white'
                                                    : 'bg-white text-[#666666] outline-none'
                                            } `}
                                            key={category?._id}
                                            onClick={() => {
                                                setSearchedCategoryData(
                                                    category?._id
                                                );
                                                setSearchName('');
                                            }}
                                        >
                                            <p className="capitalize font-semibold text-xl leading-[1.375rem]  w-[72%] text-start">
                                                {category?._id}
                                            </p>
                                            <p>{category?.count} openings</p>
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                className="bg-white text-[#666666] py-3 px-5  w-full mt-6 rounded-lg  font-semibold text-xl flex justify-center items-centre  border border-[#DCDCDD]"
                                onClick={handelClear}
                            >
                                <FaFilterCircleXmark className="mt-1" />
                                <p className="ml-3">Clear filer</p>
                            </button>
                        </div>
                        <div className="w-full lg:w-[60%] mt-8 lg:mt-0 lg:max-h-[571px] max-lg:h-[300px] overflow-y-auto">
                            {jobPostData?.map((job, index) => {
                                return (
                                    <Fragment key={job?._id}>
                                        <div
                                            className={`bg-white rounded-lg flex justify-between py-5 px-6 ${
                                                index > 0 && 'mt-8'
                                            }`}
                                        >
                                            <div className="w-[85%]">
                                                <div className=" sm:flex justify-between">
                                                    <p className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C]">
                                                        Type:{' '}
                                                        <span className="font-medium text-[#666666]">
                                                            {job?.type}
                                                        </span>
                                                    </p>
                                                    <p className="font-semibold text-xl leading-[1.375rem] text-[#4C4C4C] pr-6 max-sm:mt-2 hidden sm:block">
                                                        Experience:{' '}
                                                        <span className="font-medium text-[#666666]">
                                                            {job?.experience}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="mt-4">
                                                    <h3 className="font-semibold text-2xl sm:text-[1.75rem] leading-[1.57rem] text-[#4C4C4C] capitalize truncate">
                                                        {job?.title}
                                                    </h3>
                                                    <p className="font-medium leading-5 mt-2 text-[#666666]  truncate hidden sm:block">
                                                        {job?.team}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-[10%] flex items-center ">
                                                <FaArrowRight
                                                    className="transition hover:scale-125 duration-700 text-2xl cursor-pointer text-[#33496F]"
                                                    onClick={() => {
                                                        setShowModal(true);
                                                        setSelectedJobDetails(
                                                            job
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full rounded-b-xl bg-[#33496F] text-white py-2 px-6 hidden sm:block">
                                            <div className="sm:flex justify-between w-3/4 text-lg leading-[1.37rem]">
                                                <div className="flex">
                                                    <Image
                                                        loading="lazy"
                                                        src={MapPin}
                                                        height={16}
                                                        width={16}
                                                        className="mr-2"
                                                        alt="map_pin"
                                                    />
                                                    <p className="font-semibold capitalize">
                                                        Location:{' '}
                                                        <span className="font-medium">
                                                            {
                                                                job?.location
                                                                    ?.city
                                                            }
                                                        </span>
                                                    </p>
                                                </div>
                                                <p className="font-semibold max-sm:mt-2 max-sm:ml-5">
                                                    Job Posted:{' '}
                                                    <span className="font-medium">
                                                        {calculateReadDays(
                                                            job?.createdAt
                                                        )}{' '}
                                                        days ago
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerPost;

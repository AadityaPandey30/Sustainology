import React, { useEffect, useState } from 'react';
import DefaultAccordion from './Acrodians.jsx';
import { FiSearch } from 'react-icons/fi';
import Button from '../common/Button.jsx';
import { useFetch } from '@/hook/getDataOnLoad.js';
import axiosInstance from '@/utils/service.js';

const WholePage = () => {
    const [filterData, setFilterData] = useState('');
    const [searchKeywords, setSearchKeywords] = useState('');

    const [searchData, setSearchData] = useState('');
    const [expanded, setExpanded] = useState('');

    const [faqList, setFaqList] = useState([]);

    const categoryData = useFetch({ url: '/faq/category-list' });
    const categoryList = categoryData?.data?.response || [];
    let subCat = 1;
    useEffect(() => {
        if (categoryList?.length > 0 && subCat) {
            setFilterData(categoryList[0]);
            subCat = 0;
        }
    }, [categoryList]);

    let subSearch = 1;
    useEffect(() => {
        if (!searchData && subSearch) {
            setSearchKeywords('');
            subSearch = 0;
        }
    }, [searchData]);

    let sub = 1;
    useEffect(() => {
        if (sub) {
            getFaqList();
            sub = 0;
        }
    }, [filterData, searchKeywords]);

    const getFaqList = async () => {
        try {
            const response = await axiosInstance.get(
                `/faq/faq-list?search=${searchKeywords || ''}&category=${filterData || ''}`
            );
            console.log('faqData', filterData);
            if (response.status === 200) {
                const data = response?.data?.response?.getAllfaqs || [];
                setFaqList(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handelChange = (e) => {
        setSearchData(
            e.target.value.length > 0
                ? e.target.value
                : e.target.value.trim() || ''
        );
    };

    const handelFilterClick = (value) => {
        if (filterData === value) {
            setFilterData('');
        } else {
            setFilterData(value);
        }
    };

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <section className="relative mb-5">
            <div className="top-left"></div>
            <div className="bottom-left"></div>
            <div className="flex flex-col w-full items-center mx-auto max-w-screen-lg">
                <div className="w-full lg:w-[538px]">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-4xl lg:text-[40px] lg:leading-[54.24px] text-[#33496F] mt-20 lg:mt-28">
                            Hello, How Can we Help?
                        </h1>
                    </div>
                    <div className="px-4 md:px-4 flex justify-center mt-6 lg:mt-10">
                        <div className="py-1 px-2 border border-[#CCCCCC] rounded-lg flex w-full lg:w-[538px] justify-between bg-white space-x-4 lg:space-x-7">
                            <div className=" flex items-center w-full">
                                <FiSearch className="text-lg text-[#808080] mr-2" />
                                <input
                                    type="text"
                                    className="outline-none w-full font-normal md:text-xl text-lg"
                                    placeholder="Search a question..."
                                    value={searchData}
                                    onChange={handelChange}
                                />
                            </div>
                            <button
                                className="py-2 px-4 bg-[#5D7C64] rounded-lg font-semibold text-xl text-white"
                                onClick={() => setSearchKeywords(searchData)}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 px-4 md:px-5 lg:mt-10 font-semibold text-lg md:text-xl md:leading-[27.12px] text-[#4C4C4C] max-lg:text-center ">
                        You can choose a category to quickly find the help you
                        need
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:px-[95px]  lg:pr-20 mt-8 lg:mt-12  gap-16 ">
                <div className=" px-4 md:px-4 w-full lg:w-[156.21px] mb-6 lg:mb-0">
                    {categoryList?.map((category, index) => {
                        return (
                            <div key={category}>
                                <Button
                                    className={` w-full lg:w-[156.21px] py-3 px-4 lg:py-[16px] lg:px-[24px] rounded-lg border  font-semibold text-lg  md:leading-[24.41px]
                                    ${category === filterData ? 'bg-[#60718F] border-[#DCE0E7] text-white' : 'bg-white border-[#CCCCCC] text-[#60718F]'}  capitalize ${index > 0 && ' mt-4 lg:mt-10'}`}
                                    onClick={() => handelFilterClick(category)}
                                >
                                    {category}
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full">
                    {faqList?.map((faqs, index) => {
                        return (
                            <DefaultAccordion
                                key={faqs?._id}
                                faqs={faqs}
                                handleChange={handleChange}
                                expand={expanded}
                                expandValue={`panel${index + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WholePage;

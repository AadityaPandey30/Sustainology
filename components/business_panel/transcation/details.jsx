'use client';
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../searchBar/page';
import Table from '@/components/common/Table';
import { toast } from 'react-toastify';
import axiosInstance from '@/utils/service';
import Downloads from './download';
import Pagenation from '../pagenation/page';
import { debounce } from '@/utils/helper';
import Dropdown from '../dropdown/page';
import Filterss from '../filters/page';
import moment from 'moment';

const Details = () => {
    const [search, setSearch] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [tableBodyData, setTableBodyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginationData, setPaginationData] = useState({
        limit: 10,
        page: 1,
        totalPages: 1,
    });
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [getData, setGetData] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const debouncedSearch = useCallback(
        debounce((e) => {
            // This function will be called after 800ms of inactivity
            // console.log("Performing search:", value);
            setPaginationData((previous) => {
                return {
                    ...previous,
                    page: 1,
                };
            });

            setSearchKeyword(e.target.value);

            // Perform your search or any other action here
        }, 800),
        []
    );
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const tableHeaderData = [
        { label: 'Transaction Date', value: 'dateOfPurchase' },
        { label: 'Email', value: 'email' },
        { label: 'Transaction Id', value: 'transactionId' },
        { label: 'Product Id', value: 'productId' },
        // { label: 'InvoiceNo', value: 'invoiceNo' },
        { label: 'Payment Method', value: 'paymentMethod' },
        { label: 'Amount Paid', value: 'amount' },
        { label: 'Status', value: 'status' },
    ];

    const fetchTransactions = async (page) => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/business/customer', {
                params: {
                    page,
                    limit: paginationData.limit,
                    search: searchKeyword,
                    startDate,
                    endDate,
                },
            });
            if (response.status === 200) {
                setTableBodyData(
                    response.data.response.businessCustomerDetails
                );
                setPaginationData((prev) => ({
                    ...prev,
                    totalPages: response.data.response.totalPage,
                    page: page,
                }));
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch transactions.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions(paginationData.page);
    }, [paginationData.page, paginationData.limit, searchKeyword]);

    const handlePageClick = (event) => {
        setPaginationData((prev) => ({
            ...prev,
            page: event.selected + 1,
        }));
    };

    const setItemsPerPage = (itemsPerPage) => {
        setPaginationData((prev) => ({
            ...prev,
            limit: itemsPerPage,
            page: 1, // Reset to first page when changing items per page
        }));
    };

    const applyFilters = () => {
        setGetData(!getData);
        setShowModal(false);
    };

    const handleDateFilter = (filterOption, selectedDay) => {
        const endDate = moment().format('YYYY-MM-DD'); // End date is always the current date

        let startDate = null;
        console.log(
            'asddasd',
            moment().subtract(7, 'days').format('YYYY-MM-DD')
        );
        switch (selectedDay) {
            case 'Today':
                startDate = moment().format('YYYY-MM-DD');
                break;
            case 'Last 7 days':
                startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
                break;
            case 'Last 15 days':
                startDate = moment().subtract(15, 'days').format('YYYY-MM-DD');
                break;
            case 'Last Month':
                startDate = moment().subtract(1, 'months').format('YYYY-MM-DD');
                break;
            case 'Last 3 Month':
                startDate = moment().subtract(3, 'months').format('YYYY-MM-DD');
                break;
            case 'Last 6 Month':
                startDate = moment().subtract(6, 'months').format('YYYY-MM-DD');
                break;
            case 'Last year':
                startDate = moment()
                    .subtract(1, 'years')
                    .startOf('year')
                    .format('YYYY-MM-DD');
                break;
            case 'fromTime':
                setStartDate(
                    moment(filterOption.target.value).format('YYYY-MM-DD')
                );
                break;
            case 'toTime':
                setEndDate(
                    moment(filterOption.target.value).format('YYYY-MM-DD')
                );
                break;
            default:
                // Default to today's date if no valid option is selected
                break;
        }

        if (
            filterOption &&
            selectedDay != 'fromTime' &&
            selectedDay != 'toTime' &&
            selectedDay != 'Anytime'
        ) {
            setStartDate(startDate);
            setEndDate(endDate);
        }
        if (filterOption) {
            setSelectedFilter(selectedDay);
        }
    };

    const clearFilter = () => {
        setStartDate(null);
        setEndDate(null);
        setSelectedFilter(null);
        setGetData(!getData);
        setShowModal(false);
    };
    useEffect(() => {
        fetchTransactions(paginationData.page);
    }, [getData]);

    return (
        <>
            <div className="md:flex md:justify-end max-md:hidden  py-10 px-8 gap-3">
                <Filterss
                    applyFilters={applyFilters}
                    handleDateFilter={handleDateFilter}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    selectedFilter={selectedFilter}
                    clearFilter={clearFilter}
                    endDate={endDate}
                    startDate={startDate}
                />
                <Downloads />
                <SearchBar
                    searchKeyword={search}
                    debouncedSearch={debouncedSearch}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="max-md:block hidden py-5 px-8">
                <SearchBar
                    searchKeyword={search}
                    debouncedSearch={debouncedSearch}
                    handleSearch={handleSearch}
                />
                <div className="flex justify-end mt-3 gap-4">
                    <Dropdown setItemsPerPage={setItemsPerPage} />

                    <Downloads />
                    <Filterss
                        applyFilters={applyFilters}
                        handleDateFilter={handleDateFilter}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        selectedFilter={selectedFilter}
                        clearFilter={clearFilter}
                        endDate={endDate}
                        startDate={startDate}
                    />
                </div>
            </div>
            <Table
                tableHeaderData={tableHeaderData}
                tableBodyData={tableBodyData}
            />
            <div className="flex justify-center gap-4 py-3">
                <Pagenation
                    currentPage={paginationData.page}
                    totalPages={paginationData.totalPages}
                    onPageChange={handlePageClick}
                />

                <div className="max-md:hidden block">
                    <Dropdown setItemsPerPage={setItemsPerPage} />
                </div>
            </div>
        </>
    );
};

export default Details;

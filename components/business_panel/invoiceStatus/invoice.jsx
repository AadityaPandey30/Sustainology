'use client';
import { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import Filterss from '../filters/page';
import SearchBar from '../searchBar/page';
import Table from '@/components/common/Table';
import { toast } from 'react-toastify';
import { debounce } from '@/utils/helper';
import axiosInstance from '@/utils/service';
import Pagenation from '../pagenation/page';
import Dropdown from '../dropdown/page';

const InvoiceStatus = () => {
    const [search, setSearch] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [tableBodyData, setTableBodyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [getData, setGetData] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [paginationData, setPaginationData] = useState({
        limit: 10,
        page: 1,
        totalPages: 1,
    });

    const debouncedSearch = useCallback(
        debounce((e) => {
            // This function will be called after 800ms of inactivity

            setPaginationData((previous) => {
                return {
                    ...previous,
                    page: 1,
                };
            });
            console.log(e.target, 'hello');

            setSearchKeyword(e.target.value);
            console.log(e.target.value);

            // Perform your search or any other action here
        }, 800),
        []
    );
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const tableHeaderData = [
        {
            label: 'S.no',
            value: 'sno',
        },
        {
            label: 'Date',
            value: 'receiptDate',
        },
        {
            label: 'Invoice no',
            value: 'invoiceNo',
        },
        {
            label: 'Receipt Date',
            value: 'receiptDate',
        },
        {
            label: 'Receipt Url',
            value: 'receiptUrl',
        },
        {
            label: 'Status',
            value: 'status',
        },
        {
            label: 'Invoice Link',
            value: 'invoiceLink',
        },
    ];

    const fetchInvoice = async () => {
        try {
            const response = await axiosInstance.get('/business/invoices', {
                params: {
                    page: paginationData.page,
                    limit: paginationData.limit,
                    search: searchKeyword,
                    startDate,
                    endDate,
                },
            });
            if (response.status === 200) {
                const dataWithSno = response.data.response.businessInvoices.map(
                    (invoice, index) => ({
                        ...invoice,
                        sno: index + 1, // Index starts from 0, so add 1 to start from 1
                    })
                );
                setTableBodyData(dataWithSno);
                setPaginationData((prev) => ({
                    ...prev,
                    totalPages: response.data.response.totalPage,
                }));
            }
        } catch (error) {
            toast.error('Failed to fetch invoiceStatus.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInvoice(paginationData.page);
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
        fetchInvoice(paginationData.page);
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

            <div className="flex justify-center gap-4 py-2">
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
export default InvoiceStatus;

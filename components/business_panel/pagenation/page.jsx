import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// const Pagenation = () => {
//     const [paginationData, setPaginationData] = useState({
//         limit: 5,
//         page: 1,
//     });

//     const handlePageClick = (event) => {
//         setPaginationData((preValue) => {
//             return { ...preValue, page: event.selected + 1 };
//         });
//     };
const Pagenation = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (event) => {
        onPageChange(event);
    };
    return (
        <div className="flex justify-center">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                containerClassName=" max-lg:mt-4 flex md:justify-center item-center w-full"
                previousLinkClassName="text-[#AEADB1]  w-10 h-10  rounded-full flex items-center justify-center mr-2 text-xl"
                pageClassName=" w-10 rounded-full text-[#AEADB1]   h-10 flex items-center justify-center"
                pageLinkClassName="w-8 h-8 rounded-full flex items-center justify-center"
                activeLinkClassName="w-10 rounded-full bg-[#2F5738] text-[#FFFFFF] h-10 flex items-center justify-center"
                disabledLinkClassName="cursor-default"
                nextLinkClassName="text-[#AEADB1] rounded-full   w-10 h-10 flex items-center justify-center ml-2 text-xl "
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                // forcePage={paginationData.page - 1}
            />
        </div>
    );
};

export default Pagenation;

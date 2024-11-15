// import React, { useState, useCallback } from 'react';
// import { BiSearch } from 'react-icons/bi';

// const SearchBar = () => {
//     // const handleInputChange = (event) => {
//     //     setSearchKeyword(event.target.value);
//     // };
//     // {
//     //     setSearchKeyword;
//     // }
//     // const [search, setSearch] = useState('');
//     // const [searchKeyword, setSearchKeyword] = useState('');

//     // const debouncedSearch = useCallback(
//     //     debounce((e) => {
//     //         // This function will be called after 800ms of inactivity
//     //         // console.log("Performing search:", value);
//     //         setPage(1);
//     //         setSearch(e.target.value);

//     //         // Perform your search or any other action here
//     //     }, 800),
//     //     []
//     // );

//     return (
//         <div className="flex items-center border rounded-full px-4 py-0">
//             <input
//                 type="search "
//                 placeholder="Search"
//                 className="outline-none margin-0 rounded-full px-4 py-2"
//                 // onChange={handleInputChange}
//             ></input>
//             {/* <BiSearch className="text-xl" /> */}
//         </div>
//     );
// };
// export default SearchBar;

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { debounce } from '@/utils/helper';

const SearchBar = ({
    onSearch,
    debouncedSearch,
    searchKeyword,
    handleSearch,
}) => {
    // const [searchKeyword, setSearchKeyword] = useState('');

    // const handleInputChange = (event) => {
    //     const { value } = event.target;
    //     setSearchKeyword(value);
    //     onSearch(value);
    // };
    // const debouncedSearch = useCallback(
    //     debounce((e) => {
    //         // This function will be called after 800ms of inactivity
    //         // console.log("Performing search:", value);
    //         setPage(1);
    //         setSearch(e.target.value);

    //         // Perform your search or any other action here
    //     }, 800),
    //     []
    // );
    return (
        <div className="flex items-center justify-between border rounded-full bg-white px-4 py-0">
            <input
                type="search"
                placeholder="Search"
                className="outline-none margin-0 rounded-full w-full px-4 py-2"
                value={searchKeyword}
                onChange={(e) => {
                    // setSearch(e.target.value);
                    debouncedSearch(e);
                    handleSearch(e);
                }}
            />
            <BiSearch className="text-xl cursor-pointer" />
        </div>
    );
};

export default SearchBar;

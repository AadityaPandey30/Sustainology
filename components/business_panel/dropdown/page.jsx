import React from 'react';

const Dropdown = ({ setItemsPerPage }) => {
    const handleSelectChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <select
                onChange={handleSelectChange}
                className=" bg-[#F5F5F5] border rounded px-4 py-2"
                style={{ border: '1px solid #C9C9CB' }}
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="10o">100</option>
            </select>
        </div>
    );
};

export default Dropdown;

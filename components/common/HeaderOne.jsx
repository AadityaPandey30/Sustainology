import React, { memo } from 'react';

const HeaderOne = ({ value, ...headerProps }) => {
    return <h1 {...headerProps}>{value}</h1>;
};

export default memo(HeaderOne);

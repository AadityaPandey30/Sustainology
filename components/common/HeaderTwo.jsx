import React, { memo } from 'react';

const HeaderTwo = ({ value, ...headerProps }) => {
    return <h1 {...headerProps}>{value}</h1>;
};

export default memo(HeaderTwo);

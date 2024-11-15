import React, { memo } from 'react';

const Paragraph = ({ children, ...paragraphProps }) => {
    return <p {...paragraphProps}>{children}</p>;
};

export default memo(Paragraph);

import React, { memo } from 'react';

const LabelComponent = ({ value, ...labelProps }) => {
    return <label {...labelProps}>{value}</label>;
};

export default memo(LabelComponent);

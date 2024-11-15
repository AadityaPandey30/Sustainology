import React, { memo } from 'react';

const Button = ({ children, ...buttonProps }) => {
    return <button {...buttonProps}>{children}</button>;
};

export default memo(Button);

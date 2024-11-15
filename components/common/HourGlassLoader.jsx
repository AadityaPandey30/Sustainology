import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const HourGlassLoader = ({ height, width }) => {
    return (
        <Hourglass
            visible={true}
            height={height || 80}
            width={width || 80}
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#ffffff', '#ffffff']}
        />
    );
};

export default HourGlassLoader;

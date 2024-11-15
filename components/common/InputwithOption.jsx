import React, { useState, useEffect } from 'react';

const InputWithOption = ({ options, onChange }) => {
    const [distanceUnit, setDistanceUnit] = useState(options[0]?.value || '');
    const [distance, setDistance] = useState('');

    const handleUnitChange = (e) => {
        setDistanceUnit(e.target.value);
    };

    const handleDistanceChange = (e) => {
        setDistance(e.target.value);
    };

    useEffect(() => {
        onChange(distanceUnit, distance);
    }, [distanceUnit, distance]);

    return (
        <div className="p-2 bg-white rounded-lg border flex">
            <select
                className="w-20  border-e-2 pr-3 mr-3 outline-none font-normal text-xl leading-[1.375rem] text-[#666666] "
                value={distanceUnit}
                onChange={handleUnitChange}
            >
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <input
                type="tel"
                className="w-full outline-none font-normal text-xl leading-[1.375rem] text-[#666666] "
                placeholder="Enter Distance"
                value={distance}
                onChange={handleDistanceChange}
            />
        </div>
    );
};

export default InputWithOption;

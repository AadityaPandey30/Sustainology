import PhoneInput from '@/components/common/InputwithOption';
import LabelComponent from '@/components/common/LabelComponent';
import SelectComponent from '@/components/common/SelectComponent';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PublicTransportForm = ({ handlePublicTransportDataChange }) => {
    const [distance, setDistance] = useState(null);
    const [distanceUnit, setDistanceUnit] = useState(null);
    const [classType, setClassType] = useState('Motorbike-Size-Small');
    const [formId, setFormId] = useState(null);

    const handleDistanceChange = (unit, distance) => {
        setDistanceUnit(unit);
        setDistance(distance);
    };
    const handleFormSubmit = () => {
        if (distance && distanceUnit && classType) {
            let id = formId;
            if (!id) {
                id = uuidv4();
                setFormId(id);
            }

            handlePublicTransportDataChange({
                id: id, // use the id variable here instead of calling uuidv4() again
                type: 'publicTransport',
                classType: classType,
                distance: distance,
                distanceUnit: distanceUnit,
            });
        }
    };
    useEffect(() => {
        handleFormSubmit();
    }, [classType, distance, distanceUnit]);

    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    value="Add your means of transport"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem] capitalize"
                />
                <br />
                <SelectComponent
                    options={[
                        {
                            id: 1234,
                            label: 'Small Size Motorbike',
                            value: 'Motorbike-Size-Small',
                        },
                        {
                            id: 2345,
                            label: 'Medium Size Motorbike',
                            value: 'Motorbike-Size-Medium',
                        },
                        {
                            id: 3456,
                            label: 'Large Size Motorbike',
                            value: 'Motorbike-Size-Large',
                        },
                        {
                            id: 4567,
                            label: 'Average Size Motorbike',
                            value: 'Motorbike-Size-Average',
                        },
                        {
                            id: 5678,
                            label: 'Local Average Bus',
                            value: 'Bus-LocalAverage',
                        },
                        {
                            id: 6789,
                            label: 'Coach Bus',
                            value: 'Bus-Coach',
                        },
                        { id: 8910, label: 'Local Taxi', value: 'Taxi-Local' },
                        {
                            id: 8911,
                            label: 'National Train',
                            value: 'Train-National',
                        },
                        {
                            id: 8912,
                            label: 'Local Train',
                            value: 'Train-Local',
                        },
                        {
                            id: 8913,
                            label: 'Tram Train',
                            value: 'Train-Tram',
                        },
                    ]}
                    onChange={(value) => setClassType(value)}
                    className="p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none bg-[#ffffff]"
                />
            </div>

            <div className="mt-4">
                <LabelComponent
                    value="What Distance Did You Travel?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem]"
                />
                <PhoneInput
                    options={[{ value: 'km', label: 'Km' }]}
                    onChange={handleDistanceChange}
                />
            </div>
        </>
    );
};

export default PublicTransportForm;

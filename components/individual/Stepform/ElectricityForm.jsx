import React from 'react';
import { useEffect, useState } from 'react';
import LabelComponent from '@/components/common/LabelComponent';
import SelectComponent from '@/components/common/SelectComponent';
import SearchDropdown from '@/components/common/SearchDropdown';
import { v4 as uuidv4 } from 'uuid';
const CalculatorUrl =
    process.env.NEXT_PUBLIC_CALCULATOR_API ||
    'https://sustainology-dev.fracxn.com/api/';

const ElectricityForm = ({ handleElectricityDataChange }) => {
    const [country, setCountry] = useState([]);
    const [consumption, setConsumption] = useState(null);
    const [countryId, setCountryId] = useState(null);
    const [renewable, setRenewable] = useState('yes');
    const [formId, setFormId] = useState(null);

    const handleFormSubmit = () => {
        if (consumption && countryId && renewable) {
            let id = formId;
            if (!id) {
                id = uuidv4();
                setFormId(id);
            }

            handleElectricityDataChange({
                id: id, // use the id variable here instead of calling uuidv4() again
                renewable: renewable,
                type: 'electricity',
                country: countryId,
                consumption: consumption,
                unit: 'kwh',
            });
        }
    };
    useEffect(() => {
        handleFormSubmit();
    }, [consumption, countryId, renewable]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(
                    `${CalculatorUrl}v1/estimates/options/electricity`,
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                        },
                    }
                );
                const data = await response.json();
                // console.log(data.data.countries, 'countries');
                setCountry(data.data.countries);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = (country) => {
        setCountryId(country);
    };

    const handleRenewableChange = (value) => {
        // new handler for renewable energy
        setRenewable(value);
    };

    const handleConsumptionChange = (event) => {
        // new handler for consumption
        setConsumption(event.target.value);
    };

    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    value="did you receive 100% of renewable energy?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem] capitalize"
                />
                <SelectComponent
                    options={[
                        { id: 1, value: 'yes', label: 'Yes' },
                        { id: 2, value: 'no', label: 'No' },
                    ]}
                    onChange={handleRenewableChange}
                    className="p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none bg-[#ffffff]"
                    defaultValue="yes"
                />
            </div>
            <div className="mt-4">
                <LabelComponent
                    value="add your consumption (Unit-KWH) "
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem] capitalize"
                />
                <input
                    type="text"
                    onChange={handleConsumptionChange}
                    className="p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none"
                    placeholder="Enter consumption"
                />
            </div>
            <div className="mt-4">
                <LabelComponent
                    value="Select country"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem] capitalize"
                />
                <SearchDropdown
                    options={country}
                    onChange={handleCountryChange}
                    className="p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none"
                />
            </div>
        </>
    );
};

export default ElectricityForm;

import React, { useState } from 'react';

const Individual = ({ setFieldValue, formikValues }) => {
    const { subject, message } = formikValues;
    const [selectedQueryType, setSelectedQueryType] = useState('');

    const queryOptions = [
        'Our Technology',
        'Our Projects',
        'Emission Calculation',
        'Offset Carbon Footprints',
        'Other',
    ];
    return (
        <div>
            <p className="text-[#666666] text-xl font-semibold mb-9">
                What is your query about? (Please select) :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {queryOptions.map((option) => (
                    <React.Fragment key={option}>
                        <input
                            type="radio"
                            name="subject"
                            id={option}
                            value={option}
                            checked={subject === option}
                            onChange={(e) => {
                                setFieldValue('subject', option);
                                setSelectedQueryType(e.target.value);
                            }}
                            className="hidden"
                        />
                        <label
                            htmlFor={option}
                            className={`text-md md:text-xl leading-[1.375rem] font-semibold py-2 w-full rounded border ${subject === option ? 'border-[#2F5738] bg-[#2F5738] text-[#ffffff] ' : 'border-[#5D7C68] bg-[#ffffff] text-[#5D7C68] '} cursor-pointer text-center`}
                        >
                            {option}
                        </label>
                    </React.Fragment>
                ))}
            </div>
            {selectedQueryType && (
                <div className="mt-12 md:mt-[76px]">
                    <p className="text-[#666666] text-xl font-semibold mb-9">
                        Please write your Query
                    </p>
                    <textarea
                        rows={5}
                        name="message"
                        id="message"
                        onChange={(e) => {
                            setFieldValue('message', e.target.value);
                        }}
                        value={message}
                        placeholder="Write here..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    />
                </div>
            )}
        </div>
    );
};

export default Individual;

import React, { useEffect } from 'react';
import LabelComponent from '@/components/common/LabelComponent';
import SelectComponent from '@/components/common/SelectComponent';
import { Backdrop, IconButton, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const countries = [
    { country: 'Australia', code: 'au' },
    { country: 'Belgium', code: 'be' },
    { country: 'Brazil', code: 'br' },
    { country: 'Canada', code: 'ca' },
    { country: 'Chile', code: 'cl' },
    { country: 'China', code: 'cn' },
    { country: 'Colombia', code: 'co' },
    { country: 'Costa Rica', code: 'cr' },
    { country: 'Egypt', code: 'eg' },
    { country: 'France', code: 'fr' },
    { country: 'Germany', code: 'de' },
    { country: 'Hong Kong', code: 'hk' },
    { country: 'India', code: 'in' },
    { country: 'Indonesia', code: 'id' },
    { country: 'Italy', code: 'it' },
    { country: 'Japan', code: 'jp' },
    { country: 'Jordan', code: 'jo' },
    { country: 'Korea', code: 'kr' },
    { country: 'Malaysia', code: 'my' },
    { country: 'Maldives', code: 'mv' },
    { country: 'Mexico', code: 'mx' },
    { country: 'Netherlands', code: 'nl' },
    { country: 'Oman', code: 'om' },
    { country: 'Philippines', code: 'ph' },
    { country: 'Portugal', code: 'pt' },
    { country: 'Qatar', code: 'qa' },
    { country: 'Russian Federation', code: 'ru' },
    { country: 'Saudi Arabia', code: 'sa' },
    { country: 'Singapore', code: 'sg' },
    { country: 'South Africa', code: 'za' },
    { country: 'Spain', code: 'es' },
    { country: 'Switzerland', code: 'ch' },
    { country: 'Thailand', code: 'th' },
    { country: 'Turkey', code: 'tr' },
    { country: 'United Arab Emirates', code: 'ae' },
    { country: 'United Kingdom', code: 'gb' },
    { country: 'United States of America', code: 'us' },
    { country: 'Vietnam', code: 'vn' },
];

const HotelForm = ({ handleHotelDataChange }) => {
    const [formData, setFormData] = useState({
        formId: null,
        hotel_rating: '2',
        number_of_nights: '',
        number_of_rooms: '',
        city_name: '',
        country_code: '',
    });

    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [error, setError] = useState({
        hotel_rating: false,
        number_of_nights: false,
        number_of_rooms: false,

        country_code: false,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        handleFormSubmit();
    }, [formData]);

    const handleFormSubmit = () => {
        if (
            formData?.country_code &&
            formData.number_of_nights &&
            formData?.number_of_rooms &&
            formData?.hotel_rating
        ) {
            let id = formData.formId;
            if (!id) {
                id = uuidv4();
                setFormData((preVal) => {
                    return { ...preVal, formId: id };
                });
            }
            // console.log(id, 'inside flight handle submit');
            let body = JSON.parse(JSON.stringify(formData));
            delete body.formId;
            handleHotelDataChange({
                id: id,
                ...body,
            });
        }
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    color="#33496F"
                    value="Add you hotel stay info to see emission estimates:"
                    className="text-[#33496F] font-semibold text-lg leading-[1.375rem]"
                />
                <IconButton onClick={handleToggle} size="small">
                    <InfoIcon />{' '}
                </IconButton>
                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    open={open}
                    onClick={handleToggle}
                >
                    <img
                        src={
                            isMobile
                                ? '/images/hotel-info-mobile.png'
                                : '/images/hotel-info.png'
                        }
                        alt="Backdrop"
                        className="md:w-[70%] w-[90%]"
                    />
                </Backdrop>
            </div>
            <div className="mt-4">
                <LabelComponent
                    value="What Class of hotel did you stay in?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem] capitalize"
                />
                <br />
                <SelectComponent
                    options={[
                        {
                            id: 23456,
                            value: '2',
                            label: '2 Star',
                        },
                        {
                            id: 34567,
                            value: '3',
                            label: '3 Star',
                        },
                        {
                            id: 45678,
                            value: '4',
                            label: '4 star',
                        },
                        {
                            id: 56789,
                            value: '5',
                            label: '5 star',
                        },
                    ]}
                    onChange={(value) =>
                        setFormData((preVal) => {
                            return { ...preVal, hotel_rating: value };
                        })
                    }
                    className={`p-2 w-full border rounded bg-[#ffffff]   text-[#666666] outline-none font-[500] text-[20px] leading-[22px] ${error?.hotel_rating ? 'border-2 border-red' : ''}`}
                    optionClassName={' text-[#666666] bg-[#ffffff]'}
                />
            </div>
            <div className="mt-4 md:flex justify-between">
                <div className="w-[48%] max-md:w-full">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={countries}
                                error={error?.country_code}
                                onChange={(event, value) => {
                                    setFormData((preVal) => {
                                        return {
                                            ...preVal,
                                            country_code: value?.code || '',
                                        };
                                    });
                                }}
                                sx={{ width: '100%' }}
                                getOptionLabel={(option) => option.country}
                                renderOption={(props, option) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                        <Box
                                            key={key}
                                            component="li"
                                            sx={{
                                                fontFamily:
                                                    '"Darker Grotesque", sans-serif',
                                                fontSize: '14px',
                                                // fontWeight: '500',
                                                lineHeight: '20px',
                                            }}
                                            {...optionProps}
                                        >
                                            {option.country} ({option.code})
                                        </Box>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Country*"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </FormControl>
                    </Box>
                </div>
                <div className="w-[48%] max-md:w-full max-md:mt-[16px]">
                    <TextField
                        id="combo-box-destination"
                        label="City Name"
                        value={formData?.city_name}
                        sx={{ width: '100%' }}
                        onChange={(e) => {
                            setFormData((preVal) => {
                                return { ...preVal, city_name: e.target.value };
                            });
                        }}
                    />
                </div>
            </div>
            <div className="mt-4 md:flex justify-between">
                <div className="w-[48%] max-md:w-full">
                    <TextField
                        required
                        // id="outlined-required"
                        type="number"
                        label="No. of Rooms"
                        value={formData?.number_of_rooms}
                        error={error?.number_of_rooms}
                        sx={{ width: '100%' }}
                        onChange={(e) =>
                            setFormData((preVal) => {
                                const value = e.target.value;

                                if (value > 0 || !value) {
                                    return {
                                        ...preVal,
                                        number_of_rooms: value,
                                    };
                                } else {
                                    return preVal;
                                }
                            })
                        }
                    />
                </div>
                <div className="w-[48%] max-md:w-full max-md:mt-4">
                    <TextField
                        required
                        type="number"
                        // id="outlined-required"
                        label="No. of Nights"
                        sx={{ width: '100%' }}
                        value={formData?.number_of_nights}
                        error={error?.number_of_nights}
                        onChange={(e) =>
                            setFormData((preVal) => {
                                const value = e.target.value;

                                if (value > 0 || !value) {
                                    return {
                                        ...preVal,
                                        number_of_nights: value,
                                    };
                                } else {
                                    return preVal;
                                }
                            })
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default HotelForm;

import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from '@/components/common/InputwithOption';
import LabelComponent from '@/components/common/LabelComponent';
import SelectComponent from '@/components/common/SelectComponent';
import { country } from '@/utils/constants';
import { InputAdornment, TextField } from '@mui/material';
import SearchDropdown from '@/components/common/SearchDropdown';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { AccountCircle } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Person3Icon from '@mui/icons-material/Person3';
import InfoIcon from '@mui/icons-material/Info';
import { Backdrop, IconButton } from '@mui/material';
import { date } from 'yup';

const FlightForm = ({ handleFlightDataChange }) => {
    const [distance, setDistance] = useState(null);
    const [distanceUnit, setDistanceUnit] = useState(null);
    const [classType, setClassType] = useState('economy');
    // const [origin, setOrigin] = useState('');
    // const [destination, setDestination] = useState('');
    const [formId, setFormId] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [carrierCode, setCarrierCode] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [passenger, setPassenger] = useState(1);
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [day, setDay] = useState(null),
        [month, setMonth] = useState(null),
        [year, setYear] = useState(null);
    // let flightCity = country
    //     .map((item) => `${item.Code} ${item.Airport} ${item.Country}`)
    //     .sort();
    let flightCity = country;
    const defaultProps = {
        options: country,
        getOptionLabel: (option) => option,
    };
    console.log(
        origin,
        destination,
        flightNumber,
        carrierCode,
        passenger,
        day,
        month,
        year,
        'state'
    );

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

    const handleDistanceChange = (unit, distance) => {
        // console.log(unit, distance, 'data');
        setDistanceUnit(unit);
        setDistance(distance);
    };
    const handleDateChange = (newValue) => {
        console.log(date);
        if (newValue && dayjs(newValue).isValid()) {
            const formattedDate = dayjs(newValue).toDate();
            console.log(
                formattedDate.getDate(), // Day of the month
                formattedDate.getMonth() + 1, // Month (0-indexed, so add 1)
                formattedDate.getFullYear(), // Year
                'kk'
            );
            setDay(formattedDate.getDate());
            setMonth(formattedDate.getMonth() + 1);
            setYear(formattedDate.getFullYear());
            setDepartureDate(dayjs(newValue));
        } else {
            console.error('Invalid date');
        }
    };
    const handleFormSubmit = () => {
        if (
            origin &&
            destination &&
            classType &&
            flightNumber &&
            carrierCode &&
            passenger &&
            day &&
            month &&
            year
        ) {
            let id = formId;
            if (!id) {
                id = uuidv4();
                setFormId(id);
            }
            // console.log(id, 'inside flight handle submit');
            handleFlightDataChange({
                id: id, // use the id variable here instead of calling uuidv4() again
                type: 'Flight',
                classType: classType,
                origin,
                destination,
                flightNumber,
                carrierCode,
                passenger,
                day,
                month,
                year,
            });
        }
    };
    const handleModalChange = () => {};
    useEffect(() => {
        handleFormSubmit();
    }, [
        classType,
        origin,
        destination,
        flightNumber,
        carrierCode,
        passenger,
        day,
        month,
        year,
    ]);
    const containerStyle = {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
    };

    const itemStyle = {
        width: '300px',
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    color="#33496F"
                    value="Add you flight info to see emission estimates per passenger :"
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
                                ? '/images/backdrop_origin_mobile.png'
                                : '/images/backdrop_origin.png'
                        }
                        alt="Backdrop"
                        className="md:w-[70%] w-[90%]"
                    />
                </Backdrop>
                <br />

                <LabelComponent
                    value="What Class Did You Go With?"
                    className="text-[#666666] font-semibold text-lg leading-[1.375rem]"
                />
                <br />
                <SelectComponent
                    options={[
                        {
                            id: 123456,
                            value: 'economy',
                            label: 'Economy',
                        },
                        {
                            id: 234567,
                            value: 'premiumEconomy',
                            label: 'Premium Economy',
                        },
                        {
                            id: 345678,
                            value: 'business',
                            label: 'Business Class',
                        },
                        {
                            id: 456789,
                            value: 'first',
                            label: 'First Class',
                        },
                    ]}
                    onChange={(value) => setClassType(value)}
                    className="mt-2 p-2 w-full border rounded text-xl leading-[1.375rem] text-[#666666] outline-none bg-[#ffffff]"
                />
            </div>
            <br />
            <div className="md:flex gap-[16px] items-center">
                <div>
                    <TextField
                        required
                        id="combo-box-destination"
                        label="Origin"
                        value={origin}
                        sx={{ width: '100%' }}
                        onChange={(e) => {
                            if (e.target.value) {
                                setOrigin(e.target.value.toUpperCase());
                            } else {
                                setOrigin('');
                            }
                        }}
                    />
                    {/* <Autocomplete
                        disablePortal
                        id="combo-box-origin"
                        {...defaultProps}
                        value={origin}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setOrigin(newValue.split(' ')[0]);
                            } else {
                                setOrigin(' ');
                            }
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Origin" />
                        )}
                    /> */}
                </div>
                <div className="max-md:mt-[16px]">
                    <TextField
                        required
                        id="combo-box-destination"
                        label="Destination"
                        sx={{ width: '100%' }}
                        value={destination}
                        onChange={(e) => {
                            if (e.target.value) {
                                setDestination(e.target.value.toUpperCase());
                            } else {
                                setDestination('');
                            }
                        }}
                    />
                    {/* <Autocomplete
                        disablePortal
                        id="combo-box-destination"
                        {...defaultProps}
                        value={destination}
                        onChange={(event, newValue) => {
                            if (newValue) {
                                setDestination(newValue.split(' ')[0]);
                            } else {
                                setDestination(' ');
                            }
                        }}
                        onInputChange={(event, newValue) => {
                            console.log(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Destination" />
                        )}
                    /> */}
                </div>
            </div>
            <br />
            <div className="md:flex gap-[16px] items-center">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Flight Number"
                        sx={{ width: '100%' }}
                        value={flightNumber}
                        onChange={(e) =>
                            setFlightNumber(e.target.value.toUpperCase())
                        }
                    />
                </div>
                <div className="max-md:mt-[16px]">
                    <TextField
                        required
                        id="outlined-required"
                        label="Carrier Code"
                        sx={{ width: '100%' }}
                        value={carrierCode}
                        onChange={(e) =>
                            setCarrierCode(e.target.value.toUpperCase())
                        }
                    />
                </div>
            </div>
            <br />
            <div className="md:flex gap-[16px] items-center">
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Departure Date"
                            required
                            value={departureDate}
                            onChange={handleDateChange}
                            sx={{ width: '100%' }}
                            renderInput={(params) => (
                                <TextField {...params} type="date" />
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div className="max-md:mt-[16px]">
                    <TextField
                        id="outlined-number"
                        label="Passenger"
                        required
                        type="number"
                        defaultValue={passenger}
                        sx={{ width: '100%' }}
                        value={passenger}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    color="#2F5738"
                                    position="start"
                                >
                                    <Person3Icon color="#2F5738" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => setPassenger(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default FlightForm;

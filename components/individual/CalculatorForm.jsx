import React, { useState, Fragment, useEffect } from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { MdDirectionsBus } from 'react-icons/md';
import Button from '../common/Button';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Dialog from '../common/Dialog';
import VehicleForm from './Stepform/VehicleForm';
import FlightForm from './Stepform/FlightForm';
import ElectricityForm from './Stepform/ElectricityForm';
import PublicTransportForm from './Stepform/PublicTransportForm';
import axios from 'axios';
import Success from '../common/Success'; // Import your Success component
import Failure from '../common/Failure';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { CircularProgress } from '@mui/material';
import HotelForm from './Stepform/HotelForm';
import HourGlassLoader from '../common/HourGlassLoader';
const CalculatorUrl =
    process.env.NEXT_PUBLIC_CALCULATOR_API ||
    'https://sustainology-dev.fracxn.com/api/';

const API_KEY =
    process.env.NEXT_PUBLIC_FLIGHT_API_KEY ||
    'AIzaSyAOJ5AK-FjHI7P-qilcPrsl8seqSMwrm2o';

const rapidCalculatorURL = 'https://carbonsutra1.p.rapidapi.com';

const rapidCalculatorKey = 'a42a3fb996msh8a3b86f735f0741p1e8d13jsnb2946ecd2aca';
const rapidCalculatorToken =
    'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx';

function loadScriptR(src) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
const CalculatorForm = ({
    setShowModal,
    userDetail,
    sectionRefs,
    isClickProceed,
    setIsClickProceed,
}) => {
    const [buttonState, setButtonState] = useState([
        {
            vehicle: true,
            flight: false,
            electricity: false,
            transport: false,
            hotel: false,
        },
    ]);
    const [commonState, setCommonState] = useState([]);
    const [country, setCountry] = useState('');
    const [project, setProject] = useState({});
    const [currency, setCurrency] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showRazorpayOption, setShowRazorpayOption] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [showLoader, setLoader] = useState(false);
    const [commonCalcuateState, setCommonCalculateState] = useState([]);
    const [order, setOrder] = useState(null);
    const [formIndexState, setFormIndexState] = useState([0]);
    const [showProgress, setShowProgress] = useState(false);
    const params = useSearchParams();

    // console.log(commonState, 'commonState');
    useEffect(() => {
        if (isClickProceed) {
            handelProceedClick();
        }
    }, [isClickProceed]);

    const handelProceedClick = () => {
        if (country === 'India') {
            handleShowRazorpay();
        } else {
            handlePaymentModalOpen();
        }
    };
    useEffect(() => {
        if (params.get('success') == 'true') {
            // console.log("true ...")
            setShowSuccessModal(true);
            setIsClickProceed(false);
        } else if (params.get('success') == 'false') {
            // console.log("false ...")

            setShowFailureModal(true);
            setIsClickProceed(false);
        }
        const fetchCountryData = async () => {
            try {
                // const response = await axios.get(
                //     process.env.NEXT_PUBLIC_LOCATION_URL
                // );
                // const apiKey = 'c607fa4743144f748ae039964fded729';
                const ipResponse = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                console.log('Geolocation', ipResponse?.data);
                if (
                    ipResponse?.data &&
                    ipResponse?.data.country_name === 'India'
                ) {
                    setCountry('India');
                }
            } catch (error) {
                toast.error(' Something went wrong. Please try again later');
                //  console.error('Error fetching location data:', error);
            }
        };
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/project-pricing?type=direct'
                );

                setProject(response.data.response);
            } catch (error) {
                // console.error('Error fetching project data:', error)
                toast.error(' Something went wrong. Please try again later');
            }
        };

        const fetchCurrencyData = async () => {
            try {
                let data = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/order/converter'
                );
                setCurrency(data.data.response);
            } catch (error) {
                // console.error('Error fetching location data:', error);
                toast.error('Something went wrong. Please try again later');
            }
        };

        fetchCurrencyData();
        fetchCountryData();
        fetchProjectData();
    }, []);

    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        if (country === '') {
            setShouldFetch(!shouldFetch);
        }
    }, [country]);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                // const apiKey = 'c607fa4743144f748ae039964fded729';
                const ipResponse = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                console.log(ipResponse.data, 'ipResponse');
                if (
                    ipResponse.data &&
                    ipResponse.data.country_name === 'India'
                ) {
                    setCountry('India');
                } else {
                    setCountry('Other');
                }
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        if (shouldFetch) {
            fetchCountryData();
        }
    }, [shouldFetch]);
    const calculatePrice = (credits) => {
        console.log(project, credits, project.pricePerCredit, currency, 'VVVV');
        if (credits !== '') {
            let price = credits * project.pricePerCredit;
            // country == 'India'
            //     ? (credits * project.pricePerCredit) / currency
            //     : credits * project.pricePerCredit;

            return price.toFixed(2);
        } else {
            return 0;
        }
    };

    const handleVehicleDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'vehicle' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],

                    vehicle_type: data.vehicleType,
                    distance_value: data.distance,
                    distance_unit: data.distanceUnit,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'vehicle',
                    id: data.id,

                    vehicle_type: data.vehicleType,
                    distance_value: data.distance,
                    distance_unit: data.distanceUnit,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };
    const handleFlightDataChange = (data) => {
        // console.log(data, 'flightData');
        setCommonState((prevState) => {
            // console.log(prevState, 'prevState');
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'flight' && form.id === data.id
            );
            // console.log(existingFormIndex, 'existingFormIndex');

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    classType: data.classType,
                    origin: data.origin,
                    destination: data.destination,
                    flightNumber: data.flightNumber,
                    carrierCode: data.carrierCode,
                    passenger: data.passenger,
                    day: data.day,
                    month: data.month,
                    year: data.year,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'flight',
                    id: data.id,
                    classType: data.classType,
                    origin: data.origin,
                    destination: data.destination,
                    flightNumber: data.flightNumber,
                    carrierCode: data.carrierCode,
                    passenger: data.passenger,
                    day: data.day,
                    month: data.month,
                    year: data.year,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };
    const handlePublicTransportDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'publicTransport' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    classType: data.classType,
                    distance: data.distance,
                    distanceUnit: data.distanceUnit,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'publicTransport',
                    id: data.id,
                    classType: data.classType,
                    distance: data.distance,
                    distanceUnit: data.distanceUnit,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };
    const handleElectricityDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'electricity' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    country: data.country,
                    consumption: data.consumption,
                    renewable: data.renewable,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'electricity',
                    id: data.id,
                    country: data.country,
                    consumption: data.consumption,
                    renewable: data.renewable,
                    index: prevState.length,
                };

                return [...prevState, newForm];
            }
        });
    };

    const handleHotelDataChange = (data) => {
        setCommonState((prevState) => {
            const existingFormIndex = prevState.findIndex(
                (form) => form.type === 'hotel' && form.id === data.id
            );

            if (existingFormIndex !== -1) {
                // Update the existing form data
                const updatedForm = {
                    ...prevState[existingFormIndex],
                    ...data,
                };

                // Replace the existing form data in the array
                const updatedState = [
                    ...prevState.slice(0, existingFormIndex),
                    updatedForm,
                    ...prevState.slice(existingFormIndex + 1),
                ];

                return updatedState;
            } else {
                // Add new form data
                const newForm = {
                    type: 'hotel',
                    ...data,
                };

                return [...prevState, newForm];
            }
        });
    };

    // const AllForms = [
    //     <VehicleForm
    //         key="VehicleForm"
    //         handleVehicleDataChange={handleVehicleDataChange}
    //         commonState={commonState[formIndexState]}
    //     />,
    //     <FlightForm key="FlightForm" />,
    //     <ElectricityForm key="ElectricityForm" />,
    //     <PublicTransportForm key="PublicTransportForm" />,
    // ];

    const handelToggleButtonState = (name, formIndex, formValue, id) => {
        console.log(formIndex);
        console.log(name);
        setButtonState((preVal) => {
            for (const key in preVal[formIndex]) {
                preVal[formIndex][key] = false;
            }
            preVal[formIndex][name] = true;
            return [...preVal];
        });

        setFormIndexState((preVal) => {
            preVal[formIndex] = formValue;
            return [...preVal];
        });
        // console.log('Indise tggle', formIndex, '%%%', formValue);
        setCommonState((preVal) => {
            return preVal.filter((data, i) => {
                // console.log(data, i, formValue, '333342', formIndex);
                return data.index !== formIndex;
            });
        });
    };

    const renderCurrentForm = (formIndex, index) => {
        // console.log(formIndex, 'formIndex234', index);
        switch (formIndex) {
            case 0:
                return (
                    <VehicleForm
                        key="VehicleForm"
                        handleVehicleDataChange={handleVehicleDataChange}
                    />
                );
            case 1:
                return (
                    <FlightForm
                        key="FlightForm"
                        handleFlightDataChange={handleFlightDataChange}
                    />
                );
            case 2:
                return (
                    <ElectricityForm
                        key="ElectricityForm"
                        handleElectricityDataChange={
                            handleElectricityDataChange
                        }
                    />
                );
            case 3:
                return (
                    <PublicTransportForm
                        key="PublicTransportForm"
                        handlePublicTransportDataChange={
                            handlePublicTransportDataChange
                        }
                    />
                );
            case 4:
                return (
                    <HotelForm
                        key="HotelForm"
                        handleHotelDataChange={handleHotelDataChange}
                    />
                );
            default:
                return <VehicleForm key="VehicleForm" />;
        }
    };

    const handelAddForm = () => {
        setFormIndexState((preVal) => {
            return [...preVal, 0];
        });

        setButtonState((preVal) => {
            return [
                ...preVal,
                {
                    vehicle: true,
                    flight: false,
                    electricity: false,
                    transport: false,
                },
            ];
        });
    };
    const handleRemove = (id) => {
        setCommonCalculateState(
            commonCalcuateState.filter((item) => item.id !== id)
        );
    };
    const handlePaymentSuccess = () => {
        setShowSuccessModal(true);
    };

    const handlePaymentFailure = () => {
        setShowFailureModal(true);
    };

    const handleCalulate = async () => {
        setShowProgress(true);
        // setCommonCalculateState([]);
        console.log('inside calculate hanlde', commonState);
        const authData = await axios.post(
            `${CalculatorUrl}auth/login`,
            {
                email: 'shubham.k@gortnm.in',
                password: 'Dosa@1234',
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        // console.log(commonState, 'flightData');
        // console.log(authData, 'authData');
        let token = authData.data.data?.accessToken;
        if (token) {
            if (commonState.length !== 0) {
                commonState.map(async (data) => {
                    if (data.type === 'vehicle') {
                        try {
                            const body = {
                                ...data,
                            };
                            const options = {
                                method: 'POST',
                                url: `${rapidCalculatorURL}/vehicle_estimate_by_type`,
                                headers: {
                                    'x-rapidapi-key': rapidCalculatorKey,
                                    'x-rapidapi-host':
                                        'carbonsutra1.p.rapidapi.com',
                                    Authorization: rapidCalculatorToken,
                                    // ...body.getHeaders(),
                                },
                                data: body,
                            };
                            axios
                                .request(options)
                                .then((response) => {
                                    let responseData = response.data.data;
                                    // console.log(responseData, 'response');
                                    let price = calculatePrice(
                                        responseData.co2e_mt
                                    );
                                    let obj = {
                                        ...data,
                                        credit: responseData.co2e_mt,
                                        // scope: responseData.response.scope,
                                        // factor: responseData.response.factor,
                                        price: price,
                                    };
                                    setCommonCalculateState((preVal) => {
                                        const existingItemIndex =
                                            preVal.findIndex(
                                                (item) => item.id === obj.id
                                            );

                                        if (existingItemIndex !== -1) {
                                            // If an item with the same id exists, update it
                                            const updatedItems = [...preVal];
                                            updatedItems[existingItemIndex] =
                                                obj;
                                            return updatedItems;
                                        } else {
                                            // If no item with the same id exists, add the new item
                                            return [...preVal, obj];
                                        }
                                    });
                                })
                                .catch((error) => {
                                    toast.error(
                                        'Something went wrong. Please try again later'
                                    );
                                    console.error(error);
                                });
                        } catch (error) {
                            toast.error(
                                'Something went wrong. Please try again later'
                            );
                            console.error(error);

                            setShowProgress(false);
                        }
                    } else if (data.type === 'flight') {
                        console.log(data, 'flightData');
                        let dataBody = {
                            flights: [
                                {
                                    origin: data.origin,
                                    destination: data.destination,
                                    operatingCarrierCode: data.carrierCode,
                                    flightNumber: data.flightNumber,
                                    departureDate: {
                                        year: data.year,
                                        month: data.month,
                                        day: data.day,
                                    },
                                },
                            ],
                        };
                        try {
                            axios
                                .post(
                                    `https://travelimpactmodel.googleapis.com/v1/flights:computeFlightEmissions?key=${API_KEY}`,
                                    dataBody,
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            // Authorization: `Bearer ${token}`,
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                )
                                .then((response) => {
                                    console.log('Success:', response.data);

                                    // let responseData =
                                    //     response.data.data.estimate.flight[
                                    //         response.data.data.estimate.flight
                                    //             .length - 1
                                    //     ];
                                    let responseData =
                                        response.data.flightEmissions[0];

                                    if (
                                        responseData &&
                                        responseData.emissionsGramsPerPax
                                    ) {
                                        console.log('inside');
                                        let co2;
                                        if (data.classType == 'economy') {
                                            co2 =
                                                responseData
                                                    .emissionsGramsPerPax
                                                    .economy / 1000000;
                                        } else if (
                                            data.classType == 'premiumEconomy'
                                        ) {
                                            co2 =
                                                esponseData.emissionsGramsPerPax
                                                    .premiumEconomy / 1000000;
                                        } else if (
                                            data.classType == 'business'
                                        ) {
                                            co2 =
                                                esponseData.emissionsGramsPerPax
                                                    .business / 1000000;
                                        } else if (data.classType == 'first') {
                                            co2 =
                                                esponseData.emissionsGramsPerPax
                                                    .first / 1000000;
                                        }
                                        let totalCo2 = data.passenger * co2;
                                        console.log(totalCo2, 'totalco2');
                                        let price = calculatePrice(totalCo2);
                                        console.log(price, 'pp');
                                        let obj = {
                                            ...data,
                                            credit: totalCo2,
                                            price: price,
                                        };
                                        setCommonCalculateState((preVal) => {
                                            const existingItemIndex =
                                                preVal.findIndex(
                                                    (item) => item.id === obj.id
                                                );

                                            if (existingItemIndex !== -1) {
                                                // If an item with the same id exists, update it
                                                const updatedItems = [
                                                    ...preVal,
                                                ];
                                                updatedItems[
                                                    existingItemIndex
                                                ] = obj;
                                                return updatedItems;
                                            } else {
                                                // If no item with the same id exists, add the new item
                                                return [...preVal, obj];
                                            }
                                        });
                                    } else {
                                        toast.error(
                                            'Please enter valid Flight details'
                                        );
                                    }
                                    // console.log(responseData, 'response');
                                })
                                .catch((error) => {
                                    console.log(error);
                                    if (error.response.status == 400) {
                                        toast.error(
                                            'Please enter valid flight details'
                                        );
                                    } else {
                                        toast.error(
                                            'Something went wrong. Please try again later'
                                        );
                                    }
                                });
                        } catch (error) {
                            console.log(error.response.status);
                            setShowProgress(false);
                            if (error.response.status == 400) {
                                toast.error(
                                    'Please enter valid flight details'
                                );
                            } else {
                                toast.error(
                                    'Something went wrong. Please try again later'
                                );
                            }
                        }
                    } else if (data.type === 'publicTransport') {
                        try {
                            const body = {
                                vehicle_type: data.classType,
                                distance_unit: data.distanceUnit,
                                distance_value: data.distance,
                            };
                            const options = {
                                method: 'POST',
                                url: `${rapidCalculatorURL}/vehicle_estimate_by_type`,
                                headers: {
                                    'x-rapidapi-key': rapidCalculatorKey,
                                    'x-rapidapi-host':
                                        'carbonsutra1.p.rapidapi.com',
                                    Authorization: rapidCalculatorToken,
                                    // ...body.getHeaders(),
                                },
                                data: body,
                            };
                            axios
                                .request(options)
                                .then((response) => {
                                    let responseData = response.data.data;
                                    // console.log(responseData, 'response');
                                    let price = calculatePrice(
                                        responseData.co2e_mt
                                    );
                                    let obj = {
                                        ...data,
                                        credit: responseData.co2e_mt,
                                        // scope: responseData.response.scope,
                                        // factor: responseData.response.factor,
                                        price: price,
                                    };
                                    setCommonCalculateState((preVal) => {
                                        const existingItemIndex =
                                            preVal.findIndex(
                                                (item) => item.id === obj.id
                                            );

                                        if (existingItemIndex !== -1) {
                                            // If an item with the same id exists, update it
                                            const updatedItems = [...preVal];
                                            updatedItems[existingItemIndex] =
                                                obj;
                                            return updatedItems;
                                        } else {
                                            // If no item with the same id exists, add the new item
                                            return [...preVal, obj];
                                        }
                                    });
                                })
                                .catch((error) => {
                                    toast.error(
                                        'Something went wrong. Please try again later'
                                    );
                                    console.error(error);
                                });
                        } catch (error) {
                            setShowProgress(false);
                            toast.error(
                                'Something went wrong. Please try again later'
                            );
                        }
                    } else if (data.type === 'electricity') {
                        try {
                            axios
                                .post(
                                    `${CalculatorUrl}v1/individual-estimates/electricity`,
                                    {
                                        volume: {
                                            value: data.consumption,
                                            unit: 'kWh',
                                        },
                                        country: data.country,
                                        hasRenewable: data.renewable,
                                    },
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            Authorization: `Bearer ${token}`,
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                )
                                .then((response) => {
                                    // console.log('Success:', response.data);
                                    let responseData =
                                        response.data.data.estimate.electricity[
                                            response.data.data.estimate
                                                .electricity.length - 1
                                        ];
                                    // console.log(responseData, 'response');
                                    let price = calculatePrice(
                                        responseData.response.co2
                                    );
                                    let obj = {
                                        ...data,
                                        credit: responseData.response.co2,
                                        scope: responseData.response.scope,
                                        factor: responseData.response.factor,
                                        price: price,
                                    };
                                    // setCommonCalculateState((preVal) => {
                                    //     return [...preVal, obj];
                                    // });

                                    setCommonCalculateState((preVal) => {
                                        const existingItemIndex =
                                            preVal.findIndex(
                                                (item) => item.id === obj.id
                                            );

                                        if (existingItemIndex !== -1) {
                                            // If an item with the same id exists, update it
                                            const updatedItems = [...preVal];
                                            updatedItems[existingItemIndex] =
                                                obj;
                                            return updatedItems;
                                        } else {
                                            // If no item with the same id exists, add the new item
                                            return [...preVal, obj];
                                        }
                                    });
                                })
                                .catch((error) => {
                                    toast.error(
                                        'Something went wrong. Please try again later'
                                    );
                                });
                        } catch (error) {
                            setShowProgress(false);
                            toast.error(
                                'Something went wrong. Please try again later'
                            );
                        }
                    } else if (data.type === 'hotel') {
                        const body = new FormData();
                        const data2 = { ...data };
                        delete data.id;
                        delete data.type;
                        for (const key in data) {
                            body.append([key], data[key]);
                        }

                        const options = {
                            method: 'POST',
                            url: `${rapidCalculatorURL}/hotel_estimate`,
                            headers: {
                                'x-rapidapi-key': rapidCalculatorKey,
                                'x-rapidapi-host':
                                    'carbonsutra1.p.rapidapi.com',
                                Authorization: rapidCalculatorToken,
                                // ...body.getHeaders(),
                            },
                            data: body,
                        };
                        let obj = { ...data2 };
                        try {
                            const response = await axios.request(options);
                            let price = calculatePrice(
                                response.data.data.co2e_mt
                            );

                            obj.credit = response.data.data.co2e_mt;
                            obj.price = price;
                            setCommonCalculateState((preVal) => {
                                const existingItemIndex = preVal.findIndex(
                                    (item) => item.id === obj.id
                                );

                                if (existingItemIndex !== -1) {
                                    // If an item with the same id exists, update it
                                    const updatedItems = [...preVal];
                                    updatedItems[existingItemIndex] = obj;
                                    return updatedItems;
                                } else {
                                    // If no item with the same id exists, add the new item
                                    return [...preVal, obj];
                                }
                            });
                        } catch (error) {
                            console.error(error);
                            toast.error(
                                'Something went wrong. Please try again later'
                            );
                        }
                    }
                });
            }
            setShowProgress(false);
        } else {
            setShowProgress(false);
            toast.error('Something went wrong. Please try again later');
        }
    };

    console.log(commonCalcuateState, 'commonCalcuateState');
    const handelRemoveForm = (index) => {
        formIndexState.splice(index, 1);
        setFormIndexState([...formIndexState]);

        buttonState.splice(index, 1);
        setButtonState([...buttonState]);
    };

    const handleShowRazorpay = () => {
        const isValid = commonCalcuateState.length > 0;
        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                setShowRazorpayOption(true);
            }
        }
    };

    const handlePaymentModalOpen = () => {
        if (!userDetail) {
            setShowModal(true);
        } else {
            const isValid = commonCalcuateState.length > 0;
            if (isValid) {
                setShowPaymentOptions(true);
            }
        }
    };
    const handelForSubmit = async () => {
        // console.log('click', userDetail);
        if (!userDetail) {
            setShowModal(true);
        } else {
            const isValid = commonCalcuateState.length > 0;
            // console.log('falseeee', isValid);
            let price = commonCalcuateState.reduce(
                (acc, item) => acc + item.price,
                0
            );
            let credits = commonCalcuateState.reduce(
                (acc, item) => acc + parseFloat(item.credit),
                0
            );
            // const apiKey = 'c607fa4743144f748ae039964fded729';
            const data = await axios.get(process.env.NEXT_PUBLIC_LOCATION_URL);
            // console.log(data.data, "data")
            if (isValid && data.data && price > 0) {
                if (country == 'India') {
                    // console.log(process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL)
                    const res = await loadScriptR(
                        process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL
                    );

                    if (!res) {
                        console.log('errror');
                        setShowFailureModal(true);
                        return;
                    }

                    let orderResult = await axios.post(
                        process.env.NEXT_PUBLIC_URL + '/order/razorpay',
                        { amount: price, credits: credits }
                    );
                    // console.log('razorpay', orderResult.data)
                    const { id, currency } = orderResult.data.response;

                    let orderDetails = await axios.post(
                        process.env.NEXT_PUBLIC_URL + '/order/',
                        {
                            total: price,
                            credits: credits,
                            paymentMethod: 'razorpay',
                            paymentSource: 'calculator',
                            projectDetails: project,
                            calculatorDetails: {
                                data: commonCalcuateState,
                            },
                            orderId: id,
                            ...userDetail,
                        }
                    );
                    let orderId = orderDetails?.data?.response?._id;
                    let orderData = orderDetails?.data?.response;
                    setOrder({ ...orderData });
                    const razorpayOptions = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                        amount: price * 100, // Amount is in currency subunits. Default currency is INR.
                        currency: currency,
                        order_id: id,
                        name: userDetail.firstName + ' ' + userDetail.lastName,
                        description: 'Test Transaction',
                        handler: async function (response) {
                            try {
                                // Handle Razorpay payment success
                                // console.log('Payment success:', response);
                                const data = {
                                    orderCreationId: id,
                                    razorpayPaymentId:
                                        response.razorpay_payment_id,
                                    razorpayOrderId: response.razorpay_order_id,
                                    razorpaySignature:
                                        response.razorpay_signature,
                                };
                                const responseVerifyPayment = await axios.post(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/verify-razorpay',
                                    data
                                );
                                // console.log(responseVerifyPayment, 'ttt');
                                await axios.put(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/' +
                                        orderId,
                                    {
                                        paymentId: response.razorpay_payment_id,
                                        status: 'success',
                                        paymentDate: new Date(),
                                    }
                                );
                                // this will open the success modal but I want to refresh page before this modal opens
                                // window.location.reload();

                                handlePaymentSuccess();
                                // console.log('done');

                                // setIsLoading(false);
                                // You can perform additional actions here, such as updating the UI or redirecting the user
                            } catch (error) {
                                await axios.put(
                                    process.env.NEXT_PUBLIC_URL +
                                        '/order/' +
                                        orderId,
                                    {
                                        status: 'failure',
                                    }
                                );
                                // console.log('fails', orderId);
                                console.error('Error:', error);
                            }
                        },
                        prefill: {
                            firstname: userDetail.firstName,
                            lastname: userDetail.lastName,
                            email: userDetail.email,
                            contact: userDetail.phoneNumber,
                        },
                        theme: {
                            color: '#61dafb',
                        },
                    };

                    const paymentObject = new window.Razorpay(razorpayOptions);

                    // console.log(paymentObject, 'paymentobject');
                    paymentObject.on(
                        'payment.failed',
                        async function (response) {
                            // console.log('failss');
                            await axios.put(
                                process.env.NEXT_PUBLIC_URL +
                                    '/order/' +
                                    orderId,
                                {
                                    status: 'failed',
                                    paymentDate: new Date(),
                                }
                            );
                            handlePaymentFailure();
                        }
                    );
                    paymentObject.open();

                    paymentObject.on('modal.dismissed', async function () {
                        // console.log('Payment cancelled by user');
                        await axios.put(
                            process.env.NEXT_PUBLIC_URL + '/order/' + orderId,
                            {
                                status: 'failed',
                                paymentDate: new Date(),
                            }
                        );
                        setShowFailureModal(true); // handle the cancellation in your own way
                    });
                }
            }
        }
    };
    const handelStripePayment = async () => {
        setLoader(true);
        let price = commonCalcuateState.reduce(
            (acc, item) => acc + item.price,
            0
        );
        let credits = commonCalcuateState.reduce(
            (acc, item) => acc + item.credit,
            0
        );
        setShowPaymentOptions(false);
        // console.log('stripe', price, credits);
        try {
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY
            );

            let orderDetails = await axios.post(
                process.env.NEXT_PUBLIC_URL + '/order/',
                {
                    total: price,
                    credits: credits,
                    paymentMethod: 'stripe',
                    paymentSource: 'calculator',
                    projectDetails: project,
                    calculatorDetails: {
                        data: commonCalcuateState,
                    },
                    ...userDetail,
                }
            );
            setOrder(orderDetails?.data?.response);
            let orderId = orderDetails?.data?.response?._id;
            const body = {
                amount: price,
                credits: credits ? credits : 0,
                orderId: orderId,
            };
            const headers = {
                'Content-Type': 'application/json',
            };
            // console.log(body)
            const response = await fetch(
                process.env.NEXT_PUBLIC_URL + '/order/stripe',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body),
                }
            );

            const session = await response.json();
            // console.log(session, 'session');
            if (!(session && session.response && session.response.id)) {
                toast.error('Something went wrong. Please try again later');
            }

            //update orderId in order
            await axios.put(process.env.NEXT_PUBLIC_URL + '/order/' + orderId, {
                orderId: session.response.id,
            });
            try {
                const result = await stripe.redirectToCheckout({
                    sessionId: session.response.id,
                });

                if (result?.error) {
                    console.log('Error during payment redirection');
                    handlePaymentFailure();
                    // Exit early if there's an error
                }

                // console.log(result, 'result123');

                const data = await axios.put(
                    process.env.NEXT_PUBLIC_URL + '/order' + orderId,
                    {
                        status: 'completed',
                        paymentDate: new Date(),
                    }
                );

                // console.log('Updated order data:', data.data);
                handlePaymentSuccess();
            } catch (error) {
                setLoader(false);
                console.error('Error during payment process:', error);
                handlePaymentFailure();
            }
        } catch (error) {
            console.log(error, 'catch');
            setLoader(false);
        }
    };

    // const PayPalCheckout = (props) => {
    //     const { onSuccess } = props;
    //     let price = commonCalcuateState.reduce(
    //         (acc, item) => acc + item.price,
    //         0
    //     );
    //     let credits = commonCalcuateState.reduce(
    //         (acc, item) => acc + item.credit,
    //         0
    //     );
    //     let price1 = credits * project.pricePerCredit;
    //     useEffect(() => {
    //         const handleDocumentReady = () => {
    //             console.log(currency, price, price1);
    //             if (currency && price) {
    //                 // Load the PayPal SDK script dynamically
    //                 const script = document.createElement('script');
    //                 script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
    //                 script.async = true;
    //                 script.onload = () => {
    //                     // Render the PayPal button when the script is loaded
    //                     window.paypal
    //                         .Buttons({
    //                             style: {
    //                                 layout: 'horizontal',
    //                                 color: 'black',
    //                                 shape: 'rect',
    //                                 label: 'pay',
    //                             },
    //                             createOrder: (data, actions) => {
    //                                 return actions.order.create({
    //                                     purchase_units: [
    //                                         {
    //                                             amount: {
    //                                                 value: parseFloat(
    //                                                     price1
    //                                                 ).toFixed(2),
    //                                                 currency_code: 'USD',
    //                                             },
    //                                             order_id: new Date().getTime(),
    //                                             description:
    //                                                 'Carbon Credit Purchased',
    //                                         },
    //                                     ],
    //                                 });
    //                             },
    //                             onApprove: (data, actions) => {
    //                                 return actions.order
    //                                     .capture()
    //                                     .then(async (details) => {
    //                                         // console.log(details);
    //                                         let orderDetails = await axios.post(
    //                                             process.env.NEXT_PUBLIC_URL +
    //                                                 '/order/',
    //                                             {
    //                                                 total: price1,
    //                                                 credits: credits,
    //                                                 paymentMethod: 'paypal',
    //                                                 paymentSource: 'calculator',
    //                                                 projectDetails: project,
    //                                                 calculatorDetails: {
    //                                                     data: commonCalcuateState,
    //                                                 },
    //                                                 orderId: details.id,
    //                                                 paymentId: details.id,
    //                                                 ...userDetail,
    //                                             }
    //                                         );
    //                                         let orderId =
    //                                             orderDetails?.data?.response
    //                                                 ?._id;
    //                                         setOrder(
    //                                             orderDetails?.data?.response
    //                                         );
    //                                         if (
    //                                             details.status.toUpperCase() ==
    //                                             'COMPLETED'
    //                                         ) {
    //                                             axios
    //                                                 .put(
    //                                                     process.env
    //                                                         .NEXT_PUBLIC_URL +
    //                                                         '/order/' +
    //                                                         orderId,
    //                                                     {
    //                                                         status: 'completed',
    //                                                         paymentDate:
    //                                                             new Date(),
    //                                                     }
    //                                                 )
    //                                                 .then(() => {
    //                                                     setShowSuccessModal(
    //                                                         true
    //                                                     );
    //                                                     onSuccess();
    //                                                 })
    //                                                 .catch((error) => {
    //                                                     console.log(
    //                                                         'ERROR in PAYPAL PAYMENT PROCESSS',
    //                                                         error
    //                                                     );
    //                                                 });
    //                                         }
    //                                     });
    //                             },
    //                             onError: (err) => {
    //                                 setShowFailureModal(true);

    //                                 console.error('Payment error', err);
    //                             },
    //                             onCancel: (data) => {
    //                                 setShowFailureModal(true);
    //                                 console.log('Payment cancelled', data);
    //                             },
    //                         })
    //                         .render('#paypal-button-container');
    //                 };
    //                 script.onerror = (err) => {
    //                     console.error('Error loading PayPal SDK script:', err);
    //                 };
    //                 document.body.appendChild(script);

    //                 // Cleanup: Remove the script when the component unmounts
    //                 return () => {
    //                     document.body.removeChild(script);
    //                 };
    //             }
    //         };

    //         // Check document readiness
    //         if (document.readyState === 'complete') {
    //             handleDocumentReady();
    //         } else {
    //             document.addEventListener(
    //                 'DOMContentLoaded',
    //                 handleDocumentReady
    //             );
    //         }
    //     }, [currency, price, onSuccess]);

    //     return <div id="paypal-button-container"></div>;
    // };

    const PayPalCheckout = ({ onSuccess }) => {
        let price = commonCalcuateState.reduce(
            (acc, item) => acc + item.price,
            0
        );
        let credits = commonCalcuateState.reduce(
            (acc, item) => acc + item.credit,
            0
        );
        let price1 = credits * project.pricePerCredit;

        let paypalScript;
        useEffect(() => {
            const loadPayPalScript = () => {
                if (currency && price) {
                    // Load the PayPal SDK script dynamically
                    paypalScript = document.createElement('script');
                    paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons`;
                    paypalScript.async = true;
                    paypalScript.onload = () => {
                        if (window.paypal) {
                            window.paypal
                                .Buttons({
                                    style: {
                                        layout: 'horizontal',
                                        color: 'black',
                                        shape: 'rect',
                                        label: 'pay',
                                    },
                                    createOrder: (data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: parseFloat(
                                                            price1
                                                        ).toFixed(2),
                                                        currency_code: 'USD',
                                                    },
                                                    description:
                                                        'Carbon Credit Purchased',
                                                },
                                            ],
                                        });
                                    },
                                    onApprove: async (data, actions) => {
                                        alert(
                                            'Transaction completed by ' +
                                                details.payer.name.given_name
                                        );
                                        try {
                                            const details =
                                                await actions.order.capture();
                                            const orderDetails =
                                                await axios.post(
                                                    `${process.env.NEXT_PUBLIC_URL}/order/`,
                                                    {
                                                        total: price1,
                                                        credits: credits,
                                                        paymentMethod: 'paypal',
                                                        paymentSource:
                                                            'calculator',
                                                        projectDetails: project,
                                                        calculatorDetails: {
                                                            data: commonCalcuateState,
                                                        },
                                                        orderId: details.id,
                                                        paymentId: details.id,
                                                        ...userDetail,
                                                    }
                                                );
                                            const orderId =
                                                orderDetails?.data?.response
                                                    ?._id;
                                            setOrder(
                                                orderDetails?.data?.response
                                            );

                                            if (
                                                details.status.toUpperCase() ===
                                                'COMPLETED'
                                            ) {
                                                await axios.put(
                                                    `${process.env.NEXT_PUBLIC_URL}/order/${orderId}`,
                                                    {
                                                        status: 'completed',
                                                        paymentDate: new Date(),
                                                    }
                                                );
                                                setShowSuccessModal(true);
                                                onSuccess();
                                            }
                                        } catch (error) {
                                            console.error(
                                                'ERROR in PAYPAL PAYMENT PROCESS',
                                                error
                                            );
                                        }
                                    },
                                    onError: (err) => {
                                        setShowFailureModal(true);
                                        console.error('Payment error', err);
                                    },
                                    onCancel: (data) => {
                                        setShowFailureModal(true);
                                        console.log('Payment cancelled', data);
                                    },
                                })
                                .render('#paypal-button-container');
                        }
                    };
                    paypalScript.onerror = (err) => {
                        console.error('Error loading PayPal SDK script:', err);
                    };
                    document.body.appendChild(paypalScript);
                }
            };

            loadPayPalScript();

            return () => {
                console.log('paypalScript', paypalScript);
                if (paypalScript) {
                    // document?.body?.removeChild(paypalScript);
                }
            };
        }, [currency, price, onSuccess]);

        return <div id="paypal-button-container"></div>;
    };

    const handleTryAgain = () => {
        setShowFailureModal(false);
        setShowPaymentOptions(true);
    };

    return (
        <section className="pt-2 lg:pl-[132px] px-2  mt-10">
            <div className="absolute right-0  -z-10">
                <Image
                    loading="lazy"
                    src="/Vector6.svg"
                    alt="shade1"
                    height={452.43}
                    width={613.5}
                />
                <Image loading="lazy" width={584.82} />
            </div>
            <div className="lg:w-3/4">
                <h3 className="text-[#2A3C5B] font-bold md:text-[3.25rem] md:leading-[4.40rem] text-4xl mb-10 max-lg:flex justify-center max-sm:text-center">
                    Your very own Carbon Calculator
                </h3>
                <div className="grid md:grid-cols-2 max-md:grid-rows-2 border rounded">
                    <div className="bg-[#F6F9F2] lg:border lg:border-[#DCE2DD] px-7 py-4 ">
                        <div className="h-[26rem] overflow-y-auto pr-2 ">
                            {formIndexState.map((state, i) => {
                                return (
                                    <Fragment key={i}>
                                        <div
                                            className={`h-fit ${i !== 0 && 'mt-4'} `}
                                        >
                                            <div className="sm:flex justify-between items-center">
                                                <p className="text-xl leading-[1.375rem] font-semibold text-[#33496F]">
                                                    Select Emission Type
                                                </p>
                                                {i !== 0 && (
                                                    <Button
                                                        className="text-red-500 font-medium text-xl leading-[1.375rem] cursor-pointer"
                                                        onClick={() =>
                                                            handelRemoveForm(i)
                                                        }
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                            <div className="sm:flex sm:flex-wrap sm:justify-between mt-2 grid grid-cols-4 max-[375px]:grid-cols-3 grid-row-2 space-y-2 items-end ">
                                                <Button
                                                    className={` font-medium text-[0.875rem] leading-[1.375rem] h-[3.875rem] w-[3.875rem] outline-none border rounded ${
                                                        buttonState[i]?.vehicle
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    }`}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'vehicle',
                                                            i,
                                                            0
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <FaCarAlt
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.vehicle
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            } `}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.vehicle
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64]'
                                                        } `}
                                                    >
                                                        Vehicle
                                                    </span>
                                                </Button>
                                                <Button
                                                    className={`h-[3.875rem] w-[3.875rem] outline-none  font-medium text-[0.875rem] leading-[1.375rem] border rounded ${
                                                        buttonState[i]?.flight
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'flight',
                                                            i,
                                                            1
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <BiSolidPlaneAlt
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.flight
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            }`}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.flight
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Flight
                                                    </span>
                                                </Button>
                                                <Button
                                                    className={` border h-[3.875rem] w-[3.875rem] outline-none font-medium text-[0.875rem] leading-[1.375rem] rounded ${
                                                        buttonState[i]?.hotel
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'hotel',
                                                            i,
                                                            4
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        {buttonState[i]
                                                            ?.hotel ? (
                                                            <Image
                                                                src={
                                                                    '/hotel-white.png'
                                                                }
                                                                alt="hotel-icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={
                                                                    '/hotel-green.png'
                                                                }
                                                                alt="hotel-icon"
                                                                height={21}
                                                                width={21}
                                                            />
                                                        )}
                                                        {/* <RiLightbulbFlashFill
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.hotel
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            } `}
                                                        /> */}
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.hotel
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Hotel
                                                    </span>
                                                </Button>

                                                <Button
                                                    className={` border h-[3.875rem] w-[3.875rem] outline-none font-medium text-[0.875rem] leading-[1.375rem] rounded ${
                                                        buttonState[i]
                                                            ?.electricity
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'electricity',
                                                            i,
                                                            2
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <RiLightbulbFlashFill
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.electricity
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            } `}
                                                        />
                                                    </span>
                                                    <span
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.electricity
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Electricity
                                                    </span>
                                                </Button>

                                                <Button
                                                    className={`h-[3.875rem] w-[3.875rem] outline-none border  font-medium text-[0.75rem] leading-[0.75rem] rounded ${
                                                        buttonState[i]
                                                            ?.transport
                                                            ? 'bg-[#5D7C64]'
                                                            : 'bg-white'
                                                    } `}
                                                    onClick={() =>
                                                        handelToggleButtonState(
                                                            'transport',
                                                            i,
                                                            3
                                                        )
                                                    }
                                                >
                                                    <span className="flex items-center justify-center">
                                                        <MdDirectionsBus
                                                            className={`text-xl ${
                                                                buttonState[i]
                                                                    ?.transport
                                                                    ? 'text-white'
                                                                    : 'text-[#5D7C64] '
                                                            }   `}
                                                        />
                                                    </span>
                                                    <p
                                                        className={` ${
                                                            buttonState[i]
                                                                ?.transport
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    >
                                                        Public Transport
                                                    </p>
                                                    <p
                                                        className={`text-sm ${
                                                            buttonState[i]
                                                                ?.transport
                                                                ? 'text-white'
                                                                : 'text-[#5D7C64] '
                                                        }`}
                                                    ></p>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="text-sm mt-4 pb-10 pt-[0.5rem]">
                                            <p className="mt-1 font-semibold text-[1.25rem] leading-[1.375rem] text-[#5D7C64]">
                                                Add Transport Details :
                                            </p>

                                            {/* {AllForms[formIndexState[i]]} */}

                                            {renderCurrentForm(
                                                formIndexState[i],
                                                i
                                            )}
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                        <Button
                            className="font-semibold text-xl text-[#2F5738] mt-4 outline-none pr-2"
                            onClick={handelAddForm}
                        >
                            <span className="text-4xl">+</span> Add More
                        </Button>
                        <div className="w-full mt-7 pr-2">
                            <Button
                                className={` text-xl font-semibold py-2 text-[#2F5738] w-full hover:text-white rounded bg-[#FCFDFA] border border-[#2F5738]  hover:bg-[#2F5738] pb-[10px]`}
                                onClick={handleCalulate}
                            >
                                {' '}
                                Calculate
                            </Button>
                        </div>
                    </div>

                    <div className="px-7 py-4">
                        <div className="text-[#33496F]  font-semibold ">
                            <p className="text-xl leading-[1.375rem]">
                                Your Carbon
                            </p>
                            <h3 className="text-[2rem] leading-[1.375rem]">
                                Dashboard
                            </h3>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between py-1 border-b-2 ">
                                <p className="mb-2 font-semibold text-lg leading-[1.375rem]">
                                    Total Emission
                                </p>

                                <p className="text-[#666666] font-medium text-xl leading-[1.375rem]">
                                    {commonCalcuateState
                                        .reduce(
                                            (total, item) =>
                                                total + parseFloat(item.credit),
                                            0
                                        )
                                        .toFixed(2)}{' '}
                                    tCO2e
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="h-[270px] overflow-y-auto">
                                {showProgress && <CircularProgress />}
                                {commonCalcuateState.map((item) => (
                                    <div
                                        className="mt-3 grid grid-cols-2"
                                        key={item.id}
                                    >
                                        <div className="text-[#666666]">
                                            <p className="font-semibold text-[1.375rem] leading-[1.375rem] capitalize">
                                                {item.type}
                                            </p>
                                            <p className="font-medium text-xl leading-[1.375rem]">
                                                {item.credits} carbon credits
                                            </p>
                                        </div>
                                        <div className="col-end-4">
                                            <p className="text-[#5D7C64] font-semibold text-xl leading-[1.375rem] ">
                                                {`$ ${item.price}`}
                                            </p>
                                            <p
                                                className="text-red-500 font-medium text-xl leading-[1.375rem] cursor-pointer"
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                            >
                                                Remove
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-16">
                            <p className="font-semibold text-[1.375rem] leading-[1.375rem] ">
                                Total Amount
                            </p>
                            <p className="font-semibold text-xl leading-[1.375rem] text-[#5D7C64]">
                                {`$ ${commonCalcuateState.reduce((total, item) => total + parseFloat(item.price), 0)}`}
                            </p>
                        </div>
                        <div className="col-span-2 flex items-end">
                            {country === 'India' ? (
                                <div className="button-container w-full">
                                    {showRazorpayOption ? (
                                        <div className="payment-options">
                                            <Button
                                                type="button"
                                                onClick={handelForSubmit}
                                                className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] mb-2"
                                            >
                                                Pay with Razorpay
                                            </Button>
                                            <PayPalCheckout />
                                        </div>
                                    ) : (
                                        <Button
                                            type="button"
                                            onClick={handleShowRazorpay}
                                            className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[6px]"
                                        >
                                            Offset Now
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className="button-container w-full">
                                    {showPaymentOptions ? (
                                        <div className="payment-options">
                                            <Button
                                                type="button"
                                                onClick={handelStripePayment}
                                                className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] mb-2"
                                            >
                                                Pay with Stripe
                                            </Button>
                                            <PayPalCheckout></PayPalCheckout>
                                        </div>
                                    ) : (
                                        <Button
                                            type="button"
                                            onClick={handlePaymentModalOpen}
                                            disable={showLoader}
                                            className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[6px] flex justify-center items-center "
                                        >
                                            {showLoader ? (
                                                <HourGlassLoader
                                                    height={20}
                                                    width={20}
                                                />
                                            ) : (
                                                'Offset Now'
                                            )}
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* <div className="w-full mt-3">
                            <Button
                                className={` text-xl leading-[1.375rem] font-semibold py-[11px]   px-3 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738] pb-[13px]`}
                                onClick={() => setShowModal(true)}
                            >
                                Offset Now
                            </Button>
                        </div> */}
                    </div>
                    <Dialog
                        setShowModal={setShowSuccessModal}
                        showModal={showSuccessModal}
                        handleCloseModal={() => {
                            setShowSuccessModal(false);
                            if (typeof window !== 'undefined') {
                                const url = new URL(window.location.href);
                                url.searchParams.delete('success');
                                window.location.replace(url.pathname);
                            }
                        }}
                        // divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        style={{ zIndex: 1000, position: 'relative' }}
                    >
                        <Success order={order} isModalOpen={true} />
                    </Dialog>
                    <Dialog
                        setShowModal={setShowFailureModal}
                        showModal={showFailureModal}
                        // divClass="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        handleCloseModal={() => {
                            setShowSuccessModal(false);
                            if (typeof window !== 'undefined') {
                                const url = new URL(window.location.href);
                                url.searchParams.delete('success');
                                window.location.replace(url.pathname);
                            }
                        }}
                        style={{ zIndex: 1000, position: 'relative' }}
                    >
                        <Failure handleTryAgain={handleTryAgain} />
                    </Dialog>
                </div>
            </div>
        </section>
    );
};

export default CalculatorForm;

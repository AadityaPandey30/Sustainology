// import React, { useEffect, useState } from 'react';
// import SearchDropdown from '@/components/common/SearchDropdown';
// import LabelComponent from '@/components/common/LabelComponent';
// import PhoneInput from '@/components/common/InputwithOption';
// import { v4 as uuidv4 } from 'uuid';
// const CalculatorUrl =
//     process.env.NEXT_PUBLIC_CALCULATOR_API ||
//     'https://sustainology-dev.fracxn.com/api/';

// const VehicleForm = ({ handleVehicleDataChange }) => {
//     const [vehicleMakes, setVehicleMakes] = useState([]);
//     const [vehicleName, setVehicleName] = useState([]);
//     const [vehicleModels, setVehicleModels] = useState([]);
//     const [vehicleModelsName, setVehicleModelsName] = useState([]);
//     const [selectedVehicleMake, setSelectedVehicleMake] = useState(null);
//     const [modalId, setModalId] = useState(null);
//     const [distance, setDistance] = useState(null);
//     const [distanceUnit, setDistanceUnit] = useState(null);
//     const [formId, setFormId] = useState(null);
//     // console.log('emmmeememme', isEmissionChange);
//     // useEffect(() => {
//     //     if (currentState && isEmissionChange) {
//     //         setSelectedVehicleMake(currentState.vehicle);
//     //         setModalId(currentState.modalId);
//     //         setDistance(currentState.distance);
//     //         setDistanceUnit(currentState.distanceUnit);
//     //         setFormId(currentState.id);
//     //     }
//     // }, [currentState, isEmissionChange]);

//     const handleFormSubmit = () => {
//         if (selectedVehicleMake && modalId && distance && distanceUnit) {
//             let id = formId;
//             if (!id) {
//                 id = uuidv4();
//                 setFormId(id);
//             }

//             handleVehicleDataChange({
//                 id: id, // use the id variable here instead of calling uuidv4() again
//                 vehicleMake: selectedVehicleMake,
//                 vehicleModel: modalId,
//                 distance: distance,
//                 distanceUnit: distanceUnit,
//             });
//         }
//     };
//     useEffect(() => {
//         handleFormSubmit();
//     }, [selectedVehicleMake, modalId, distance, distanceUnit]);

//     useEffect(() => {
//         const fetchMakes = async () => {
//             try {
//                 const response = await fetch(
//                     `${CalculatorUrl}v1/estimates/options/vehicle-makes`,
//                     {
//                         method: 'GET',
//                         headers: {
//                             accept: 'application/json',
//                         },
//                     }
//                 );
//                 const data = await response.json();
//                 const formattedMakes = data.data.map((item) => ({
//                     value: item.data.id,
//                     label: item.data.attributes.name,
//                 }));
//                 const formattedModels = data.data.map(
//                     (item) => item.data.attributes.name
//                 );
//                 setVehicleName(formattedModels);
//                 setVehicleMakes(formattedMakes);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchMakes();
//     }, []);

//     useEffect(() => {
//         const fetchModels = async () => {
//             if (selectedVehicleMake) {
//                 try {
//                     const response = await fetch(
//                         `${CalculatorUrl}v1/estimates/options/vehicle-makes/${selectedVehicleMake}/models`,
//                         {
//                             method: 'GET',
//                             headers: {
//                                 accept: 'application/json',
//                             },
//                         }
//                     );
//                     const data = await response.json();
//                     const formattedModels = data.data.map((item) => ({
//                         value: item.data.id,
//                         label: item.data.attributes.name,
//                     }));
//                     const formattedModelsName = data.data.map(
//                         (item) =>
//                             `${item.data.attributes.name}-${item.data.attributes.year}`
//                     );
//                     setVehicleModelsName(formattedModelsName);
//                     setVehicleModels(formattedModels);
//                 } catch (error) {
//                     console.error('Error:', error);
//                 }
//             }
//         };

//         fetchModels();
//     }, [selectedVehicleMake]);

//     const handleFindVehicle = (value) => {
//         let selectedVehicle = vehicleMakes.find(
//             (vehicle) => vehicle.label === value
//         );
//         setSelectedVehicleMake(selectedVehicle.value);
//         setModalId(null);
//         setVehicleModelsName([]);
//     };

//     const handleModalChange = (value) => {
//         let selectedModel = vehicleModels.find(
//             (model) => model.label === value.split('-')[0]
//         );
//         setModalId(selectedModel.value);
//     };

//     const handleDistanceChange = (unit, distance) => {
//         setDistanceUnit(unit);
//         setDistance(distance);
//     };
//     // console.log(distance, distanceUnit, 'distance', modalId);

//     return (
//         <>
//             <div className="mt-4">
//                 <LabelComponent
//                     value="Find my Vehicle"
//                     className="text-[#666666] font-semibold text-xl leading-[1.375rem]"
//                 />
//                 <SearchDropdown
//                     options={vehicleName}
//                     onChange={handleFindVehicle}
//                 />
//             </div>
//             <div className="mt-4">
//                 <LabelComponent
//                     value="Select a Vehicle Model"
//                     className="text-[#666666] font-semibold text-xl leading-[1.375rem]"
//                 />
//                 <SearchDropdown
//                     options={vehicleModelsName}
//                     onChange={handleModalChange}
//                 />
//             </div>
//             <div className="mt-4">
//                 <LabelComponent
//                     value="Enter distance driven"
//                     className="text-[#666666] font-semibold text-xl leading-[1.375rem]"
//                 />
//                 <PhoneInput
//                     options={[
//                         { value: 'km', label: 'Km' },
//                         { value: 'mi', label: 'Mi' },
//                     ]}
//                     onChange={handleDistanceChange}
//                 />
//             </div>
//         </>
//     );
// };

// export default VehicleForm;

import React, { useEffect, useState } from 'react';
import SearchDropdown from '@/components/common/SearchDropdown';
import LabelComponent from '@/components/common/LabelComponent';
import PhoneInput from '@/components/common/InputwithOption';
import { v4 as uuidv4 } from 'uuid';
const CalculatorUrl =
    process.env.NEXT_PUBLIC_CALCULATOR_API ||
    'https://sustainology-dev.fracxn.com/api/';

const vehicleTypes = [
    {
        label: 'Mini Car',
        value: 'Car-Type-Mini',
    },
    {
        label: 'Supermini Car',
        value: 'Car-Type-Supermini',
    },
    {
        label: 'Lower Medium Car',
        value: 'Car-Type-LowerMedium',
    },
    {
        label: 'Upper Medium Car',
        value: 'Car-Type-UpperMedium',
    },
    {
        label: 'Executive Car',
        value: 'Car-Type-Executive',
    },
    {
        label: 'Luxury Car',
        value: 'Car-Type-Luxury',
    },
    {
        label: 'Sports Car',
        value: 'Car-Type-Sports',
    },
    {
        label: '4X4 Car',
        value: 'Car-Type-4x4',
    },
    {
        label: 'MPV Car',
        value: 'Car-Type-MPV',
    },
    {
        label: 'Small Size Car',
        value: 'Car-Size-Small',
    },
    {
        label: 'Medium Size Car',
        value: 'Car-Size-Medium',
    },
    {
        label: 'Large Size Car',
        value: 'Car-Size-Large',
    },
    {
        label: 'Average Size Car',
        value: 'Car-Size-Average',
    },
];

const VehicleForm = ({ handleVehicleDataChange }) => {
    const [vehicleType, setVehicleType] = useState(null);

    const [distance, setDistance] = useState(null);
    const [distanceUnit, setDistanceUnit] = useState(null);
    const [formId, setFormId] = useState(null);
    // console.log('emmmeememme', isEmissionChange);
    // useEffect(() => {
    //     if (currentState && isEmissionChange) {
    //         setVehcleType(currentState.vehicle);
    //         setModalId(currentState.modalId);
    //         setDistance(currentState.distance);
    //         setDistanceUnit(currentState.distanceUnit);
    //         setFormId(currentState.id);
    //     }
    // }, [currentState, isEmissionChange]);

    const handleFormSubmit = () => {
        if (vehicleType && distance && distanceUnit) {
            let id = formId;
            if (!id) {
                id = uuidv4();
                setFormId(id);
            }

            handleVehicleDataChange({
                id: id, // use the id variable here instead of calling uuidv4() again
                vehicleType: vehicleType,

                distance: distance,
                distanceUnit: distanceUnit,
            });
        }
    };
    useEffect(() => {
        handleFormSubmit();
    }, [vehicleType, distance, distanceUnit]);

    // useEffect(() => {
    //     const fetchMakes = async () => {
    //         try {
    //             const response = await fetch(
    //                 `${CalculatorUrl}v1/estimates/options/vehicle-makes`,
    //                 {
    //                     method: 'GET',
    //                     headers: {
    //                         accept: 'application/json',
    //                     },
    //                 }
    //             );
    //             const data = await response.json();
    //             const formattedMakes = data.data.map((item) => ({
    //                 value: item.data.id,
    //                 label: item.data.attributes.name,
    //             }));
    //             const formattedModels = data.data.map(
    //                 (item) => item.data.attributes.name
    //             );
    //             setVehicleName(formattedModels);
    //             setVehicleMakes(formattedMakes);
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     fetchMakes();
    // }, []);

    // useEffect(() => {
    //     const fetchModels = async () => {
    //         if (vehcleType) {
    //             try {
    //                 const response = await fetch(
    //                     `${CalculatorUrl}v1/estimates/options/vehicle-makes/${vehcleType}/models`,
    //                     {
    //                         method: 'GET',
    //                         headers: {
    //                             accept: 'application/json',
    //                         },
    //                     }
    //                 );
    //                 const data = await response.json();
    //                 const formattedModels = data.data.map((item) => ({
    //                     value: item.data.id,
    //                     label: item.data.attributes.name,
    //                 }));
    //                 const formattedModelsName = data.data.map(
    //                     (item) =>
    //                         `${item.data.attributes.name}-${item.data.attributes.year}`
    //                 );
    //                 setVehicleModelsName(formattedModelsName);
    //                 setVehicleModels(formattedModels);
    //             } catch (error) {
    //                 console.error('Error:', error);
    //             }
    //         }
    //     };

    //     fetchModels();
    // }, [vehcleType]);

    const handleFindVehicle = (value) => {
        setVehicleType(value);
    };

    const handleDistanceChange = (unit, distance) => {
        setDistanceUnit(unit);
        setDistance(distance);
    };
    // console.log(distance, distanceUnit, 'distance', modalId);

    return (
        <>
            <div className="mt-4">
                <LabelComponent
                    value="Find my Vehicle"
                    className="text-[#666666] font-semibold text-xl leading-[1.375rem]"
                />
                <SearchDropdown
                    options={vehicleTypes}
                    onChange={handleFindVehicle}
                />
            </div>

            <div className="mt-4">
                <LabelComponent
                    value="Enter Distance Driven"
                    className="text-[#666666] font-semibold text-xl leading-[1.375rem]"
                />
                <PhoneInput
                    options={[
                        { value: 'km', label: 'Km' },
                        { value: 'mi', label: 'Mi' },
                    ]}
                    onChange={handleDistanceChange}
                />
            </div>
        </>
    );
};

export default VehicleForm;

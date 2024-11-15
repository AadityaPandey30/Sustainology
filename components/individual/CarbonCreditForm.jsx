'use client';
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import LabelComponent from '../common/LabelComponent';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import Dialog from '../common/Dialog';
import { useSearchParams } from 'next/navigation';
import Success from '../common/Success'; // Import your Success component
import Failure from '../common/Failure';

const initialValue = {
    credits: '',
    emission: '',
    price: '',
};

// const validation = Yup.object({
//   credits: Yup.string().nullable(),
//   emission: Yup.string().nullable(),
//   price: Yup.string().required('Price is required'),
// }).test('at-least-one-filled', 'At least one field must be filled.', (values) => {
//   const { credits, emission } = values;

//   if (!credits && !emission) {
//       throw new Yup.ValidationError(
//           'At least one field must be filled.',
//           values,
//           'credits' // or 'emission', choose the field to attach the error to
//       );
//   }
//   return true;
// });

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

const CarbonCreditForm = ({
    setShowModal,
    userDetail,
    sectionRefs,
    isClickProceed,
    setIsClickProceed,
}) => {
    const [country, setCountry] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showRazorpayOption, setShowRazorpayOption] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState(1);
    const [credits, setCredits] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emission, setEmission] = useState('');
    const [project, setProject] = useState({});
    const params = useSearchParams();
    const [order, setOrder] = useState(null);

    const checkValidation = () => {
        if (credits || emission) {
            setErrorMessage('');
            return true;
        } else {
            setErrorMessage('At least one field must be filled.');
            return false;
        }
    };
    useEffect(() => {
        if (isClickProceed) {
            handelProceedClick();
        }
    }, [isClickProceed]);

    // console.log(userDetail, 'userDetail');
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
                // const apiKey = 'c607fa4743144f748ae039964fded729';
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                if (response.data && response.data.country_name === 'India') {
                    setCountry('India');
                } else {
                    setCountry('Other');
                }
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/project-pricing?type=direct'
                );
                // console.log(response.data.response, 'response');
                setProject(response.data.response);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        const fetchCurrencyData = async () => {
            try {
                let data = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/order/converter'
                );
                setCurrency(data.data.response);
                // console.log(data.data.response, 'data');
            } catch (error) {
                console.error('Error fetching location data:', error);
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
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                console.log(response.data, 'response');
                if (response.data && response.data.country_name === 'India') {
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

    const handleShowRazorpay = () => {
        console.log('show razorpay', credits);
        const isValid = checkValidation();
        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                setShowRazorpayOption(true);
            }
        }
    };
    const handlePaymentModalOpen = () => {
        const isValid = checkValidation();

        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                setShowPaymentOptions(true);
            }
        }
    };
    const handlePaymentSuccess = () => {
        setShowSuccessModal(true);
    };

    // Initialize payment provider (Stripe or Razorpay) and handle payment failure
    const handlePaymentFailure = () => {
        setShowFailureModal(true);
    };
    const calculatePrice = (credits, emission) => {
        if (credits !== '') {
            let price =
                country == 'India'
                    ? (credits * project.pricePerCredit) / currency
                    : credits * project.pricePerCredit;
            //sometimes price is nan due to project details missing how to handle this
            if (isNaN(price)) {
                window.location.reload();
            }
            return Math.floor(price);
        } else {
            return 0;
        }
    };

    const handleCreditsChange = (e) => {
        const value = e.target.value;
        setCredits(value);
        setPrice(calculatePrice(value, emission));
    };

    const handleEmissionChange = (e) => {
        const value = e.target.value;
        setEmission(value);
        let credits = value * project.creditsPerTon;
        setCredits(credits);
        setPrice(calculatePrice(credits, value));
    };

    const handelStripePayment = async () => {
        setShowPaymentOptions(false);
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
                    paymentSource: 'direct',
                    projectDetails: project,
                    calculatorDetails: {},
                    ...userDetail,
                }
            );
            setOrder(orderDetails?.data?.response);
            let orderId = orderDetails?.data?.response?._id;
            const body = {
                amount: price,
                credits: credits ? credits : 0,
                emission: emission ? emission : 0,
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
                alert('Something went wrong. Please try again later');
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
                console.error('Error during payment process:', error);
                handlePaymentFailure();
            }
            // stripe.redirectToCheckout({
            //   sessionId: session.response.id
            // }).then(async(result) => {
            //   if (result.error) {
            //     console.log("errrrr")
            //     handlePaymentFailure();
            //   } else {
            //     //update order status
            //     console.log(result,"result123")
            //    let data= await axios.put(process.env.NEXT_PUBLIC_URL + "/order"+orderId, {
            //       status:"completed", paymentDate:new Date()
            //     })
            //     console.log("data.dara",data.data)
            //     handlePaymentSuccess();
            //   }
            // });

            // if (result.error) {
            //   console.log(result.error);
            // }
            // console.log('data.dara');
        } catch (error) {
            console.log(error, 'catch');
        }
    };

    const PayPalCheckout = (props) => {
        const { onSuccess } = props;
        let price1 = credits * project.pricePerCredit;

        useEffect(() => {
            const handleDocumentReady = () => {
                if (currency && price) {
                    // Load the PayPal SDK script dynamically
                    const script = document.createElement('script');
                    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
                    script.async = true;
                    script.onload = () => {
                        // Render the PayPal button when the script is loaded
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
                                                order_id: new Date().getTime(),
                                                description:
                                                    'Carbon Credit Purchased',
                                            },
                                        ],
                                    });
                                },
                                onApprove: (data, actions) => {
                                    return actions.order
                                        .capture()
                                        .then(async (details) => {
                                            console.log(details);
                                            let orderDetails = await axios.post(
                                                process.env.NEXT_PUBLIC_URL +
                                                    '/order/',
                                                {
                                                    total: price1,
                                                    credits: credits,
                                                    paymentMethod: 'paypal',
                                                    paymentSource: 'direct',
                                                    projectDetails: project,
                                                    calculatorDetails: {},
                                                    orderId: details.id,
                                                    paymentId: details.id,
                                                    ...userDetail,
                                                }
                                            );
                                            let orderId =
                                                orderDetails?.data?.response
                                                    ?._id;
                                            setOrder(
                                                orderDetails?.data?.response
                                            );
                                            console.log(
                                                details.status,
                                                'status'
                                            );
                                            if (
                                                details.status.toUpperCase() ==
                                                'COMPLETED'
                                            ) {
                                                axios
                                                    .put(
                                                        process.env
                                                            .NEXT_PUBLIC_URL +
                                                            '/order/' +
                                                            orderId,
                                                        {
                                                            status: 'completed',
                                                            paymentDate:
                                                                new Date(),
                                                        }
                                                    )
                                                    .then(() => {
                                                        console.log(
                                                            'INSIDE PAYPAL PAYMENT PROCESSS'
                                                        );
                                                        setShowSuccessModal(
                                                            true
                                                        );
                                                        onSuccess();
                                                    })
                                                    .catch((error) => {
                                                        console.log(
                                                            'ERROR in PAYPAL PAYMENT PROCESSS',
                                                            error
                                                        );
                                                    });
                                            }
                                        });
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
                    };
                    script.onerror = (err) => {
                        console.error('Error loading PayPal SDK script:', err);
                    };
                    document.body.appendChild(script);

                    // Cleanup: Remove the script when the component unmounts
                    return () => {
                        document.body.removeChild(script);
                    };
                }
            };

            // Check document readiness
            if (document.readyState === 'complete') {
                handleDocumentReady();
            } else {
                document.addEventListener(
                    'DOMContentLoaded',
                    handleDocumentReady
                );
            }
        }, [currency, price, onSuccess]);

        return <div id="paypal-button-container"></div>;
    };

    const handelForSubmit = async () => {
        // console.log('click', userDetail);
        const isValid = checkValidation();

        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                // console.log('falseeee', isValid);
                // return
                // console.log("json", process.env.NEXT_PUBLIC_LOCATION_URL, process.env.NEXT_PUBLIC_URL)
                // const apiKey = 'c607fa4743144f748ae039964fded729';
                const data = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                // console.log(data.data, "data")
                if (isValid && data.data) {
                    setErrorMessage('');
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
                                paymentSource: 'direct',
                                projectDetails: project,
                                calculatorDetails: {},
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
                            name:
                                userDetail.firstName +
                                ' ' +
                                userDetail.lastName,
                            description: 'Test Transaction',
                            handler: async function (response) {
                                try {
                                    // Handle Razorpay payment success
                                    // console.log('Payment success:', response);
                                    const data = {
                                        orderCreationId: id,
                                        razorpayPaymentId:
                                            response.razorpay_payment_id,
                                        razorpayOrderId:
                                            response.razorpay_order_id,
                                        razorpaySignature:
                                            response.razorpay_signature,
                                    };
                                    const responseVerifyPayment =
                                        await axios.post(
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
                                            paymentId:
                                                response.razorpay_payment_id,
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

                        const paymentObject = new window.Razorpay(
                            razorpayOptions
                        );

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
                                process.env.NEXT_PUBLIC_URL +
                                    '/order/' +
                                    orderId,
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
        }
    };

    const handelProceedClick = () => {
        if (country === 'India') {
            // handelForSubmit();
            handleShowRazorpay();
        } else {
            handlePaymentModalOpen();
        }
    };

    return (
        <>
            <div className="w-full max-sm:text-center">
                <h3 className="font-bold md:text-5xl md:leading-[4.0625rem] text-4xl text-[#2A3C5B] ">
                    Offset Your Carbon Footprint - Support Projects
                </h3>
                <p className="mt-2 md:text-2xl text-xl leading-[1.37rem] font-medium text-[#666666]">
                    Join the movement towards a more sustainable planet. Your
                    purchase of carbon credits contribute to sustainability
                    projects worldwide. Each credit represents a step forward in
                    our collective effort to combat climate change.
                </p>
            </div>
            <div className="mt-10">
                <p className="font-semibold text-[#60718F] text-2xl leading-8">
                    Price per Carbon Credit $ {project.pricePerCredit}
                </p>
            </div>

            <Formik
                initialValues={initialValue}
                // validationSchema={validationSchema}
                // onSubmit={handelForSubmit}
                // onSubmit={(values,index) => handelForSubmit(values, index)}
            >
                <Form>
                    <div className="mt-5 grid md:grid-cols-5 md:grid-row-2 grid-row-6 gap-y-8 ">
                        <div className="col-span-2">
                            <LabelComponent
                                value="Enter Carbon Credits (CIT)"
                                className="text-xl leading-[1.375rem] font-semibold lead text-[#4C4C4C]"
                            />
                            <br />
                            <Field
                                type="number"
                                // value="credits"
                                className="py-3 px-5 font-medium text-lg leading-[1.375rem] bg-white border border-[#D5D5D5] rounded-lg w-full outline-none"
                                placeholder="Enter Your Carbon Credits"
                                name="credits"
                                value={credits}
                                onChange={handleCreditsChange}
                            />
                            {errorMessage && (
                                <div className="text-[#BD3C3C] font-bold">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center items-center w-full max-md:col-span-2  ">
                            <p className="text-[#4C4C4C] font-semibold text-[1.75rem] leading-[1.375rem] ">
                                OR
                            </p>
                        </div>
                        <div className="col-span-2">
                            <LabelComponent
                                value="Enter Ton Of Carbon Emissions"
                                className="text-xl leading-[1.375rem] font-semibold lead text-[#4C4C4C]"
                            />
                            <br />
                            <Field
                                type="text "
                                className="py-3 px-5 bg-white border border-[#D5D5D5] rounded-lg w-full outline-none font-medium text-lg leading-[1.375rem]"
                                placeholder="Enter Your Carbon Emissions in Ton"
                                name="emission"
                                value={emission}
                                onChange={handleEmissionChange}
                            />
                            {errorMessage && (
                                <div className="text-red-500">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        <div className="col-span-2">
                            <LabelComponent
                                value="Total Price"
                                className="text-xl leading-[1.375rem] font-medium text-[#33496F]"
                            />
                            <br />
                            <Field
                                type="text"
                                className="py-3 px-5 bg-white border border-[#D5D5D5] rounded-lg w-full outline-none font-medium text-lg leading-[1.375rem]"
                                placeholder="$ 00"
                                value={price}
                                disabled={true}
                                name="price"
                            />
                        </div>
                        <div className="flex justify-center items-center"></div>
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
                                            className="text-2xl font-semibold py-1 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[6px] "
                                        >
                                            Offset Now
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </Form>
            </Formik>
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
                <Failure />
            </Dialog>
        </>
    );
};

export default CarbonCreditForm;

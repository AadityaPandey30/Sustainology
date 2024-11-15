import Button from '../common/Button';
import LabelComponent from '../common/LabelComponent';
import React, { useEffect, useState } from 'react';
import Dialog from '../common/Dialog.jsx';
import Success from '../common/Success'; // Import your Success component
import Failure from '../common/Failure';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';

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
const CreditCarbon = ({
    projectDetails,
    setShowModal,
    userDetail,
    sectionRefs,
    isClickProceed,
    setIsClickProceed,
}) => {
    const [country, setCountry] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [showRazorpayOption, setShowRazorpayOption] = useState(false);
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState(1);
    const [credits, setCredits] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emission, setEmission] = useState('');
    const params = useSearchParams();
    const [order, setOrder] = useState(null);
    console.log(projectDetails, userDetail, 'userDetail');
    const project = {
        pricePerCredit: projectDetails.pricePerCarbonCredit,
        projectId: projectDetails,
    };

    useEffect(() => {
        if (isClickProceed) {
            handelProceedClick();
        }
    }, [isClickProceed]);

    useEffect(() => {
        if (params.get('success') == 'true') {
            // console.log("true ...")
            setShowSuccessModal(true);
        } else if (params.get('success') == 'false') {
            // console.log("false ...")

            setShowFailureModal(true);
        }
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_LOCATION_URL
                );
                if (response.data && response.data.country_name === 'India') {
                    setCountry('India');
                }
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };

        const fetchCurrencyData = async () => {
            try {
                let data = await axios.get(
                    process.env.NEXT_PUBLIC_URL + '/order/converter'
                );
                setCurrency(data.data.response);
                console.log(data.data.response, 'data');
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };

        fetchCurrencyData();
        fetchCountryData();
    }, []);

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

    const handleShowRazorpay = () => {
        // console.log('show razorpay', credits);
        const isValid = checkValidation();
        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                setShowRazorpayOption(true);
            }
        }
    };
    // Initialize payment provider (Stripe or Razorpay) and handle payment failure
    const handlePaymentFailure = () => {
        setShowFailureModal(true);
    };
    const calculatePrice = (credits) => {
        if (credits !== '') {
            let price =
                country == 'India'
                    ? (credits * projectDetails.pricePerCarbonCredit) / currency
                    : credits * projectDetails.pricePerCarbonCredit;
            return Math.floor(price);
        } else {
            return 0;
        }
    };

    const handleCreditsChange = (e) => {
        const value = e.target.value;
        console.log(value, 'value');
        setCredits(value);
        setPrice(calculatePrice(value));
    };

    const checkValidation = () => {
        if (credits) {
            setErrorMessage('');
            return true;
        } else {
            setErrorMessage('Credits must be filled.');
            return false;
        }
    };

    const handelStripePayment = async () => {
        setShowPaymentOptions(false);
        try {
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY
            );

            const headers = {
                'Content-Type': 'application/json',
            };
            let orderDetails = await axios.post(
                process.env.NEXT_PUBLIC_URL + '/order/',
                {
                    total: price,
                    credits: credits,
                    paymentMethod: 'stripe',
                    paymentSource: 'project-overview',
                    projectDetails: project,
                    calculatorDetails: {},
                    ...userDetail,
                }
            );
            setOrder(orderDetails?.data?.response);
            let orderId = orderDetails?.data?.response?._id;
            const body = {
                amount: price,
                credits: credits,
                orderId: orderId,
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
            console.log(session, 'session');
            if (!(session && session.response && session.response.id)) {
                toast.error('Something went wrong. Please try again later');
            }
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

                const data = await axios.put(
                    process.env.NEXT_PUBLIC_URL + '/order' + orderId,
                    {
                        status: 'completed',
                        paymentDate: new Date(),
                    }
                );

                console.log('Updated order data:', data.data);
                handlePaymentSuccess();
            } catch (error) {
                console.error('Error during payment process:', error);
                handlePaymentFailure();
            }
        } catch (error) {
            console.log(error, 'catch');
        }
    };

    const handlePaypalPayment = async () => {
        setShowPaymentOptions(false);
    };
    const PayPalCheckout = (props) => {
        const { onSuccess } = props;

        useEffect(() => {
            const handleDocumentReady = () => {
                if (currency && price) {
                    let price1 = credits * projectDetails.pricePerCarbonCredit;
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
                                                    paymentSource:
                                                        'project-overview',
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
        const isValid = checkValidation();
        if (isValid) {
            if (!userDetail) {
                setShowModal(true);
            } else {
                // console.log("falseeee", isValid)
                // return
                // console.log("json", process.env.NEXT_PUBLIC_LOCATION_URL, process.env.NEXT_PUBLIC_URL)
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
                            toast.error(
                                'Razorpay SDK failed to load. Are you online?'
                            );
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
                                paymentSource: 'project-overview',
                                projectDetails: project,
                                calculatorDetails: {},
                                orderId: id,
                                ...userDetail,
                            }
                        );
                        let orderId = orderDetails?.data?.response?._id;
                        setOrder(orderDetails?.data?.response);
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
                                    console.log('Payment success:', response);
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
                                    console.log(responseVerifyPayment, 'ttt');
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
                                    handlePaymentSuccess();
                                    console.log('done');
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
                                    console.log('fails', orderId);
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
                        // console.log(razorpayOptions, "dddd")
                        const paymentObject = new window.Razorpay(
                            razorpayOptions
                        );
                        console.log(paymentObject, 'paymentobject');
                        paymentObject.on(
                            'payment.failed',
                            async function (response) {
                                console.log('failss');
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
            <div className="w-ful">
                <h3 className="font-bold text-[3.25rem] leading-[4.40rem] text-[#2A3C5B]">
                    Pricing
                </h3>
            </div>
            <div className="mt-10">
                <p className="text-[#4C4C4C] text-[1.75rem]  font-semibold leading-[2.373rem] ">
                    Price per Carbon Credit $
                    {projectDetails?.pricePerCarbonCredit || ''}
                </p>
            </div>
            <div className="mt-5 grid lg:grid-cols-2 max-lg:grid-row-2 grid-row-2 gap-7 lg:gap-y-14 lg:gap-x-10 w-full ">
                <div className="">
                    <LabelComponent
                        value="Enter Carbon Credits"
                        className="text-xl leading-[1.375rem] font-semibold text-[#4C4C4C]"
                    />
                    <br />
                    <input
                        type="text"
                        className="p-2 font-medium text-lg leading-[1.375rem] bg-white border border-[#D5D5D5] rounded w-full outline-none"
                        placeholder="Enter Your Carbon Credits"
                        name="credits"
                        value={isNaN(credits) ? '' : credits}
                        onChange={handleCreditsChange}
                    />
                    <p className="text-sm text-red-600 font-bold">
                        {errorMessage}
                    </p>
                </div>

                <div className="">
                    <LabelComponent
                        value="Total Price"
                        className="text-xl leading-[1.375rem] font-semibold text-[#4C4C4C]"
                    />
                    <br />
                    <input
                        type="text"
                        className="p-2 bg-white border border-[#D5D5D5] rounded w-full outline-none font-medium text-lg leading-[1.375rem]"
                        placeholder="$ 00"
                        value={`${isNaN(price) ? 0 : price}`}
                        disabled={true}
                        name="price"
                    />
                </div>

                <div className=" flex items-end">
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
            >
                <Success order={order} isModalOpen={true} />
            </Dialog>
            <Dialog
                setShowModal={setShowFailureModal}
                showModal={showFailureModal}
                handleCloseModal={() => {
                    setShowSuccessModal(false);
                    if (typeof window !== 'undefined') {
                        const url = new URL(window.location.href);
                        url.searchParams.delete('success');
                        window.location.replace(url.pathname);
                    }
                }}
            >
                <Failure />
            </Dialog>
        </>
    );
};

export default CreditCarbon;

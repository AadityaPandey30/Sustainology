import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../common/Button';
import Link from 'next/link';
import { loginToggle } from '@/redux/slices/loginToggleSlice';

const Navbar = ({ bannerRef, isScrolled, setIsScrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const checkScrollPosition = () => {
            if (bannerRef.current) {
                const { top } = bannerRef.current.getBoundingClientRect();
                if (setIsScrolled) setIsScrolled(top < 0);
            }
        };

        // Call checkScrollPosition initially and add event listener for scrolling
        checkScrollPosition();
        window.addEventListener('scroll', checkScrollPosition);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <nav
            className={`flex items-center justify-between flex-wrap pt-2 lg:px-[95px] px-6  pb-1 backdrop-blur-md fixed w-full font-semibold ${isScrolled ? 'text-[#2F5738]' : 'text-white'} z-[999] `}
        >
            <div className="flex items-center flex-shrink-0  mr-6  ">
                <Link href="/" className="cursor-pointer tracking-tight">
                    <Image
                        loading="eager"
                        src="https://res.cloudinary.com/deels6aft/image/upload/v1720017397/logo_2_ivnkog.png"
                        alt="Logo"
                        height={56}
                        width={56.14}
                    />
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-start px-5 py-3 border rounded ${isScrolled ? 'text-[#2F5738]' : 'text-white'} hover:border-white"
                >
                    <svg
                        className="fill-current h-5 w-5"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    isOpen ? `block` : `hidden`
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className=" lg:flex-grow"></div>
                <div className="lg:space-x-9">
                    <span className="relative group  w-fit">
                        <div className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-xl">
                            <span className="flex items-center">
                                <a
                                    href="/about-us"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    About Us{' '}
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <div
                                className={`absolute hidden lg:group-hover:block   header-gradient   w-[193px] rounded-lg shadow-lg z-10 ${isScrolled ? 'text-[#2F5738]' : 'text-white'} `}
                            >
                                <div className="h-full w-full backdrop-blur-3xl py-1  px-1 rounded-lg">
                                    <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/about-us/#our-values"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 "
                                        >
                                            Our Values
                                        </Link>
                                    </div>
                                    {/* <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                    <Link
                                        href="/about-us/#founders"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 "
                                    >
                                        Founders
                                    </Link>
                                </div> */}
                                    {/* <div clasName="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                    <Link
                                        href="/about-us/#advisors"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 "
                                    >
                                        Advisors
                                    </Link>
                                </div> */}
                                    <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/about-us/#partners"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 "
                                        >
                                            Partners
                                        </Link>
                                    </div>
                                    <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/about-us/#about-technology"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 "
                                        >
                                            Our Technology
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="max-lg:group-hover:block hidden mt-2">
                                <Link
                                    href="/about-us/#our-values"
                                    rel="noopener noreferrer"
                                >
                                    Our Values
                                </Link>
                            </div>

                            <div className="max-lg:group-hover:block hidden mt-2">
                                <Link
                                    href="/about-us/#partners"
                                    rel="noopener noreferrer"
                                >
                                    Partners
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                <Link
                                    href="/about-us/#technology"
                                    rel="noopener noreferrer"
                                >
                                    Our Technology
                                </Link>
                            </div>
                            {/* mobile sub menu ends  */}
                        </div>
                    </span>
                    <span className="relative group w-fit">
                        <div className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-xl">
                            <span className="flex items-center">
                                <Link
                                    href="/for-business"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    For Business{' '}
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <div
                                className={`absolute hidden lg:group-hover:block header-gradient w-[300px] rounded-lg shadow-lg z-10 ${isScrolled ? 'text-[#2F5738]' : 'text-white'}`}
                            >
                                <div className="h-full w-full backdrop-blur-3xl py-1  px-1 rounded-lg">
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/for-business"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            ESG Services
                                        </Link>
                                    </div>
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/business-decarbon"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Decarbonisation Services
                                        </Link>
                                    </div>
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/climate-api"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Climate API Solutions
                                        </Link>
                                    </div>
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/carbon-consultancy"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Carbon Project Consultancy
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile submenu starts */}
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/for-business"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    ESG Services
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/business-decarbon"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Decarbonisation Services
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/climate-api"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Climate API Solutions
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/carbon-consultancy"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Carbon Project Consultancy
                                </Link>
                            </div>

                            {/* Mobile submenu ends */}
                        </div>
                    </span>
                    <span className="relative group w-fit">
                        <div className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-xl">
                            <span className="flex items-center">
                                <Link
                                    href="/for-individual"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    For Individuals{' '}
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <div
                                className={`absolute hidden lg:group-hover:block header-gradient w-[295px] rounded-lg shadow-lg z-10 ${isScrolled ? 'text-[#2F5738]' : 'text-white'}`}
                            >
                                <div className="h-full w-full backdrop-blur-3xl py-1  px-1 rounded-lg">
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/for-individual#carbon-calculator"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Emission Calculator
                                        </Link>
                                    </div>
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/for-individual#support-project"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Support Projects
                                        </Link>
                                    </div>
                                    <div className="mt-1 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="/for-individual#individual-treetology"
                                            target="_self"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2"
                                        >
                                            Treetology
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile submenu starts */}
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/for-individual#carbon-calculator"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Emission Calculator
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/for-individual#support-project"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Support Projects
                                </Link>
                            </div>
                            <div className="max-lg:group-hover:block hidden mt-2">
                                {' '}
                                <Link
                                    href="/for-individual#individual-treetology"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Treetology
                                </Link>
                            </div>

                            {/* Mobile submenu ends */}
                        </div>
                    </span>
                    {/* <Link
                        href="/for-individual"
                        className="block mt-4 lg:inline-block lg:mt-0 text-xl"
                    >
                        For Individual
                    </Link> */}
                    <Link
                        href="/projects"
                        className="block mt-4 lg:inline-block lg:mt-0 text-xl "
                    >
                        Marketplace
                    </Link>
                    <Link
                        href="/contact-us"
                        className="block mt-4 lg:inline-block lg:mt-0 text-xl"
                    >
                        Contact Us
                    </Link>

                    <span className="relative group  w-fit">
                        <div className="block mt-4 lg:inline-block lg:mt-0  cursor-pointer text-xl">
                            <span className="flex items-center">
                                <a
                                    href=""
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    Login{' '}
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <div
                                className={`absolute hidden lg:group-hover:block   header-gradient   w-[193px] rounded-lg shadow-lg z-10 right-0 ${isScrolled ? 'text-[#2F5738]' : 'text-white'} `}
                            >
                                <div className="h-full w-full backdrop-blur-3xl py-1  px-1 rounded-lg">
                                    <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <button
                                            className="px-5 "
                                            onClick={() =>
                                                dispatch(loginToggle())
                                            }
                                        >
                                            Business Login
                                        </button>
                                    </div>

                                    <div className="mt-2 py-2 rounded  hover:bg-[#2F5738] hover:text-white">
                                        <Link
                                            href="https://buyer.sustainology.life/"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2 "
                                        >
                                            Buyer Login
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="max-lg:group-hover:block hidden mt-2">
                                <button onClick={() => dispatch(loginToggle())}>
                                    Business Login
                                </button>
                            </div>

                            <div className="max-lg:group-hover:block hidden mt-2">
                                <Link
                                    href="https://buyer.sustainology.life/"
                                    rel="noopener noreferrer"
                                >
                                    Buyer Login
                                </Link>
                            </div>

                            {/* mobile sub menu ends  */}
                        </div>
                    </span>
                    {/* <Button
                        className="border lg:pt-2 lg:pb-3 pt-0 pb-1 px-4 rounded bg-white block mt-4 lg:inline-block lg:mt-0 text-[#2F5738] text-xl "
                        onClick={() => dispatch(loginToggle())}
                    >
                        Login
                    </Button> */}
                </div>
            </div>
        </nav>
    );
};

export default memo(Navbar);

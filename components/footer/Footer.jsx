'use client';
import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../../styles/footer.css';
import axios from 'axios';

const Footer = () => {
    const [country, setCountry] = useState('');
    const socialMedia = [
        {
            key: 'INSTA',
            link: 'https://www.instagram.com/mysustainology?igsh=MTJsMmx1YW02a2xieQ==.',
            icon: <InstagramIcon />,
        },
        {
            key: 'LINKEDIN',
            link: 'https://www.linkedin.com/company/sustainology/',
            icon: <LinkedInIcon />,
        },
    ];

    const footerLinks = [
        {
            heading: 'Company',
            links: [
                { link: '/about-us', label: 'About Us' },
                { link: '/projects', label: 'Marketplace' },
                { link: '/careers', label: 'Careers' },
            ],
        },
        {
            heading: 'Support',
            links: [
                // { link: '/contact-us', label: 'Chat with Us' },
                { link: '/faq', label: 'FAQs' },
                { link: '/terms-conditions', label: 'Terms & Conditions' },
                { link: '/cookie-policy', label: 'Cookie policy' },
                { link: '/privacy-policy', label: 'Privacy Policy' },
            ],
        },
        {
            heading: 'Links',
            links: [
                { link: '/blog', label: 'Blogs' },
                { link: '/press-events', label: 'Press & Events' },
                { link: '/case-study', label: 'Case Studies' },
                { link: 'http://www.treetology.com/', label: 'Treetology' },
            ],
        },
    ];
    let sub = 1;

    useEffect(() => {
        if (sub) {
            //handelViewCount();
            sub = 0;
        }
    }, []);

    const handelViewCount = async () => {
        try {
            // const apiKey = 'c607fa4743144f748ae039964fded729';
            const ipResponse = await axios.get(
                process.env.NEXT_PUBLIC_LOCATION_URL
            );
            setCountry(ipResponse?.data?.country_name);

            // const ipResponse = await axios.get(
            //     'https://geolocation-db.com/json/'
            // );
            // setCountry(ipResponse?.data?.country_name);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <footer className="text-white footer">
            <div className="footer-bg-img px-5 py-6 lg:px-[95px] lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between">
                    <div className="flex flex-col w-full col-span-1 items-center lg:items-start">
                        <Link href="/">
                            <Image
                                loading="lazy"
                                src="/images/footer_logo.png"
                                alt="Footer Logo"
                                height={150}
                                width={200}
                            />
                        </Link>
                        <p className="text-white text-xs leading-[21px] font-semibold my-3 w-[211px] text-center lg:text-start">
                            {country === 'Dubai' || country === 'India' ? (
                                <>
                                    {' '}
                                    MEZZANINE FLOOR, THE MEYDAN HOTEL, NAD AL
                                    SHEBA, DUBAI - UAE PO BOX - 182421
                                </>
                            ) : (
                                <>
                                    {' '}
                                    16192 Coastal Highway, Lewes, Delaware
                                    19958, Country of Sussex , USA
                                </>
                            )}
                        </p>
                        {/* Social media icons */}
                        <div>
                            <h5 className="text-lg leading-[21px] font-semibold text-center lg:text-start">
                                Follow us
                            </h5>
                            <div className="flex mt-3 gap-3">
                                {socialMedia?.map((media) => (
                                    <Link
                                        href={media.link}
                                        key={media.key}
                                        target="_blank"
                                        aria-label={media.key}
                                    >
                                        {media.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full col-span-3 pt-10 md:pt-20">
                        {footerLinks?.map((footerLink) => (
                            <div
                                className="flex flex-col w-1/2 md:w-1/4 p-4"
                                key={footerLink?.heading}
                            >
                                <h4 className="font-bold mb-4 md:mb-8 leading-[21px] text-2xl md:text-[28px]">
                                    {footerLink?.heading}
                                </h4>
                                <div className="flex flex-col gap-2 md:gap-3">
                                    {footerLink?.links?.map((childLink) => (
                                        <Link
                                            href={childLink?.link}
                                            className="md:text-lg text-sm font-semibold"
                                            key={childLink?.label}
                                        >
                                            {childLink?.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col w-1/2 md:w-1/4 p-4">
                            <h4 className="font-bold mb-8 leading-[21px] text-2xl md:text-[28px]">
                                Contact Us
                            </h4>
                            {/* <Link
                                href="tel:+971 55 88 58754"
                                className="md:text-lg text-sm font-semibold flex items-center gap-2"
                            >
                                <LocalPhoneOutlinedIcon
                                    sx={{ fontSize: '16px' }}
                                />
                                <span>+971 55 88 58754</span>
                            </Link> */}
                            <Link
                                href="mailto:info@sustainology.life"
                                className="md:text-lg text-sm font-semibold flex items-center gap-2"
                            >
                                <span className="flex items-center space-x-1">
                                    <EmailOutlinedIcon
                                        sx={{ fontSize: '16px' }}
                                    />
                                    <p className="pb-1">
                                        info@sustainology.life
                                    </p>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);

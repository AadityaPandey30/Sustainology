'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import './../../styles/staticText.css';
import Footer from '@/components/footer/Footer';

export default function CookiePolicy() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="static-text lg:px-[95px] pb-10 md:pb-10">
                <div className="container mx-auto pt-20 md:pt-32">
                    <h1 className="text-[#33496F] text-center font-extrabold text-4xl md:text-[52px] leading-[70px] md:mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-[#305839] text-center font-bold text-lg md:text-2xl">
                        Last Updated September 13th, 2023
                    </p>
                </div>
                <div className="px-6 sm:px-6 md:px-6 content mt-5 md:mt-5 pt-2">
                    <p className="md:text-xl text-lg">
                        This document informs Users about the technologies that
                        help this Website to achieve the purposes described
                        below. Such technologies allow the Owner to access and
                        store information (for example by using a Cookie) or use
                        resources (for example by running a script) on a
                        User&rsquo;s device as they interact with this Website.
                    </p>
                    <p className="md:text-xl text-lg">
                        For simplicity, all such technologies are defined as
                        &quot;Trackers&quot; within this document &ndash; unless
                        there is a reason to differentiate. For example, while
                        Cookies can be used on both web and mobile browsers, it
                        would be inaccurate to talk about Cookies in the context
                        of mobile apps as they are a browser-based Tracker. For
                        this reason, within this document, the term Cookies is
                        only used where it is specifically meant to indicate
                        that particular type of Tracker.
                    </p>
                    <p className="md:text-xl text-lg">
                        Some of the purposes for which Trackers are used may
                        also require the User&rsquo;s consent, depending on the
                        applicable law. Whenever consent is given, it can be
                        freely withdrawn at any time following the instructions
                        provided in this document.
                    </p>
                    <p className="md:text-xl text-lg">
                        This Website only uses Trackers managed directly by the
                        Owner (so-called &ldquo;first-party&rdquo; Trackers).
                        The validity and expiration periods of first-party
                        Cookies and other similar Trackers may vary depending on
                        the lifetime set by the Owner. Some of them expire upon
                        termination of the User&rsquo;s browsing session.
                    </p>
                    <h2>
                        Activities strictly necessary for the operation of this
                        Website and delivery of the Service
                    </h2>
                    <p className="md:text-xl text-lg">
                        This Website uses so-called &ldquo;technical&rdquo;
                        Cookies and other similar Trackers to carry out
                        activities that are strictly necessary for the operation
                        or delivery of the Service.
                    </p>
                    <h4>First-party Trackers</h4>
                    <p className="md:text-xl text-lg">
                        Storage duration: up to 5 years
                    </p>
                    <h2>
                        How to manage preferences and provide or withdraw
                        consent
                    </h2>
                    <p className="md:text-xl text-lg">
                        There are various ways to manage Tracker related
                        preferences and to provide and withdraw consent, where
                        relevant:
                    </p>
                    <p className="md:text-xl text-lg">
                        Users can manage preferences related to Trackers from
                        directly within their own device settings, for example,
                        by preventing the use or storage of Trackers.
                    </p>
                    <p className="md:text-xl text-lg">
                        Additionally, whenever the use of Trackers is based on
                        consent, Users can provide or withdraw such consent by
                        setting their preferences within the cookie notice or by
                        updating such preferences accordingly via the relevant
                        consent-preferences privacy widget, if available.
                    </p>
                    <p className="md:text-xl text-lg">
                        It is also possible, via relevant browser or device
                        features, to delete previously stored Trackers,
                        including those used to remember the User&rsquo;s
                        initial consent preferences.
                    </p>
                    <p className="md:text-xl text-lg">
                        Other Trackers in the browser&rsquo;s local memory may
                        be cleared by deleting the browsing history.
                    </p>
                    <h2>Locating Tracker Settings</h2>
                    <p className="md:text-xl text-lg">
                        Users can, for example, find information about how to
                        manage Cookies in the most commonly used browsers at the
                        following addresses:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;p=cpn_cookies">
                                    Google Chrome
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&amp;redirectlocale=en-US">
                                    Mozilla Firefox
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                                    Apple Safari
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                                    Microsoft Internet Explorer
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">
                                    Microsoft Edge
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing">
                                    Brave
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="https://help.opera.com/en/latest/web-preferences/#cookies">
                                    Opera
                                </a>
                            </strong>
                        </li>
                    </ul>
                    <p className="md:text-xl text-lg">
                        Users may also manage certain categories of Trackers
                        used on mobile apps by opting out through relevant
                        device settings such as the device advertising settings
                        for mobile devices, or tracking settings in general
                        (Users may open the device settings and look for the
                        relevant setting).
                    </p>
                    <h4>Consequences of denying the use of Trackers</h4>
                    <p className="md:text-xl text-lg">
                        Users are free to decide whether or not to allow the use
                        of Trackers. However, please note that Trackers help
                        this Website to provide a better experience and advanced
                        functionalities to Users (in line with the purposes
                        outlined in this document). Therefore, if the User
                        chooses to block the use of Trackers, the Owner may be
                        unable to provide related features.
                    </p>
                    <h4>Owner and Data Controller</h4>
                    <p className="md:text-xl text-lg">
                        Sustainology Climate Solutions LLC Mezzanine Floor, The
                        Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates
                    </p>
                    <p className="md:text-xl text-lg">
                        Owner contact{' '}
                        <strong>
                            <a href="mailto:legal@sustainology.world">
                                email: legal@sustainology.world
                            </a>
                        </strong>
                    </p>
                    <p className="md:text-xl text-lg">
                        Given the objective complexity surrounding tracking
                        technologies, Users are encouraged to contact the Owner
                        should they wish to receive any further information on
                        the use of such technologies by this Website.
                    </p>
                    <h2>Definitions and legal references</h2>
                    <h4>Personal Data (or Data)</h4>
                    <p className="md:text-xl text-lg">
                        Any information that directly, indirectly, or in
                        connection with other information &mdash; including a
                        personal identification number &mdash; allows for the
                        identification or identifiability of a natural person.
                    </p>
                    <h4>Usage Data</h4>
                    <p className="md:text-xl text-lg">
                        Information collected automatically through this Website
                        (or third-party services employed in this Website),
                        which can include: the IP addresses or domain names of
                        the computers utilized by the Users who use this
                        Website, the URI addresses (Uniform Resource
                        Identifier), the time of the request, the method
                        utilized to submit the request to the server, the size
                        of the file received in response, the numerical code
                        indicating the status of the server&rsquo;s answer
                        (successful outcome, error, etc.), the country of
                        origin, the features of the browser and the operating
                        system utilized by the User, the various time details
                        per visit (e.g., the time spent on each page within the
                        Application) and the details about the path followed
                        within the Application with special reference to the
                        sequence of pages visited, and other parameters about
                        the device operating system and/or the User&rsquo;s IT
                        environment.
                    </p>
                    <h4>User</h4>
                    <p className="md:text-xl text-lg">
                        The individual using this Website who, unless otherwise
                        specified, coincides with the Data Subject.
                    </p>
                    <h4>Data Subject</h4>
                    <p className="md:text-xl text-lg">
                        The natural person to whom the Personal Data refers.
                    </p>
                    <h4>Data Processor (or Processor)</h4>
                    <p className="md:text-xl text-lg">
                        The natural or legal person, public authority, agency or
                        other body which processes Personal Data on behalf of
                        the Controller, as described in this privacy policy.
                    </p>
                    <h4>Data Controller (or Owner)</h4>
                    <p className="md:text-xl text-lg">
                        The natural or legal person, public authority, agency or
                        other body which, alone or jointly with others,
                        determines the purposes and means of the processing of
                        Personal Data, including the security measures
                        concerning the operation and use of this Website. The
                        Data Controller, unless otherwise specified, is the
                        Owner of this Website.
                    </p>
                    <h4>This Website (or this Application)</h4>
                    <p className="md:text-xl text-lg">
                        The means by which the Personal Data of the User is
                        collected and processed.
                    </p>
                    <h4>Service</h4>
                    <p className="md:text-xl text-lg">
                        The service provided by this Website as described in the
                        relative terms (if available) and on this
                        site/application.
                    </p>
                    <h4>European Union (or EU)</h4>
                    <p className="md:text-xl text-lg">
                        Unless otherwise specified, all references made within
                        this document to the European Union include all current
                        member states to the European Union and the European
                        Economic Area.
                    </p>
                    <h4>Cookie</h4>
                    <p className="md:text-xl text-lg">
                        Cookies are Trackers consisting of small sets of data
                        stored in the User&rsquo;s browser.
                    </p>
                    <h4>Tracker</h4>
                    <p className="md:text-xl text-lg">
                        Tracker indicates any technology - e.g Cookies, unique
                        identifiers, web beacons, embedded scripts, e-tags and
                        fingerprinting - that enables the tracking of Users, for
                        example by accessing or storing information on the
                        User&rsquo;s device.
                    </p>
                    <h4>Legal information</h4>
                    <p className="md:text-xl text-lg">
                        This privacy policy relates solely to this Website, if
                        not stated otherwise within this document. Latest
                        update: September 12, 2023
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

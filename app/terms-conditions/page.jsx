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
                        Terms & Conditions
                    </h1>
                    <p className="text-[#305839] text-center font-bold text-[18px] md:text-2xl">
                        Last Updated September 13th, 2023
                    </p>
                </div>
                <div class="max-sm:text-lg px-6 sm:px-6 md:px-6  content mt-5 md:mt-5 pt-2">
                    <p className="md:text-xl text-lg">These Terms govern</p>
                    <ul>
                        <li>the use of this Website, and,</li>
                        <li>
                            any other related Agreement or legal relationship
                            with the Owner
                        </li>
                    </ul>
                    <p>
                        in a legally binding way. Capitalized words are defined
                        in the relevant dedicated section of this document.
                    </p>
                    <p className="md:text-xl text-lg">
                        The User must read this document carefully.
                    </p>
                    <p className="md:text-xl text-lg">
                        This Website is provided by:
                    </p>
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
                    <h2>TERMS OF USE</h2>
                    <p className="md:text-xl text-lg">
                        Unless otherwise specified, the terms of use detailed in
                        this section apply generally when using this Website.
                    </p>
                    <p className="md:text-xl text-lg">
                        Single or additional conditions of use or access may
                        apply in specific scenarios and in such cases are
                        additionally indicated within this document.
                    </p>
                    <p className="md:text-xl text-lg">
                        By using this Website, Users confirm to meet the
                        following requirements:
                    </p>
                    <h2>Content on this Website</h2>
                    <p className="md:text-xl text-lg">
                        Unless where otherwise specified or clearly
                        recognizable, all content available on this Website is
                        owned or provided by the Owner or its licensors.
                    </p>
                    <p className="md:text-xl text-lg">
                        The Owner undertakes its utmost effort to ensure that
                        the content provided on this Website infringes no
                        applicable legal provisions or third-party rights.
                        However, it may not always be possible to achieve such a
                        result.
                    </p>
                    <p className="md:text-xl text-lg">
                        In such cases, without prejudice to any legal
                        prerogatives of Users to enforce their rights, Users are
                        kindly asked to preferably report related complaints
                        using the contact details provided in this document.
                    </p>
                    <h2>Access to external resources</h2>
                    <p className="md:text-xl text-lg">
                        Through this Website Users may have access to external
                        resources provided by third parties. Users acknowledge
                        and accept that the Owner has no control over such
                        resources and is therefore not responsible for their
                        content and availability.
                    </p>
                    <p className="md:text-xl text-lg">
                        Conditions applicable to any resources provided by third
                        parties, including those applicable to any possible
                        grant of rights in content, result from each such third
                        parties’ terms and conditions or, in the absence of
                        those, applicable statutory law.
                    </p>
                    <h2>Acceptable use</h2>
                    <p className="md:text-xl text-lg">
                        This Website and the Service may only be used within the
                        scope of what they are provided for, under these Terms
                        and applicable law.
                    </p>
                    <p className="md:text-xl text-lg">
                        Users are solely responsible for making sure that their
                        use of this Website and/or the Service violates no
                        applicable law, regulations or third-party rights.
                    </p>
                    <h2>Common provisions</h2>
                    <h4>No Waiver</h4>
                    <p className="md:text-xl text-lg">
                        The Owner’s failure to assert any right or provision
                        under these Terms shall not constitute a waiver of any
                        such right or provision. No waiver shall be considered a
                        further or continuing waiver of such term or any other
                        term.
                    </p>
                    <h4>Service interruption</h4>
                    <p className="md:text-xl text-lg">
                        To ensure the best possible service level, the Owner
                        reserves the right to interrupt the Service for
                        maintenance, system updates or any other changes,
                        informing the Users appropriately.
                    </p>
                    <p className="md:text-xl text-lg">
                        Within the limits of law, the Owner may also decide to
                        suspend or discontinue the Service altogether. If the
                        Service is discontinued, the Owner will cooperate with
                        Users to enable them to withdraw Personal Data or
                        information and will respect User&rsquo;s rights
                        relating to continued product use and/or compensation,
                        as provided for by applicable law.
                    </p>
                    <p className="md:text-xl text-lg">
                        Additionally, the Service might not be available due to
                        reasons outside the Owner’s reasonable control, such as
                        “force majeure” events (infrastructural breakdowns or
                        blackouts etc.).
                    </p>
                    <h4>Service reselling</h4>
                    <p className="md:text-xl text-lg">
                        Users may not reproduce, duplicate, copy, sell, resell
                        or exploit any portion of this Website and of its
                        Service without the Owner’s express prior written
                        permission, granted either directly or through a
                        legitimate reselling programme.
                    </p>
                    <h2>Intellectual property rights</h2>
                    <p className="md:text-xl text-lg">
                        Without prejudice to any more specific provision of
                        these Terms, any intellectual property rights, such as
                        copyrights, trademark rights, patent rights and design
                        rights related to this Website are the exclusive
                        property of the Owner or its licensors and are subject
                        to the protection granted by applicable laws or
                        international treaties relating to intellectual
                        property.
                    </p>
                    <p className="md:text-xl text-lg">
                        All trademarks — nominal or figurative — and all other
                        marks, trade names, service marks, word marks,
                        illustrations, images, or logos appearing in connection
                        with this Website are, and remain, the exclusive
                        property of the Owner or its licensors and are subject
                        to the protection granted by applicable laws or
                        international treaties related to intellectual property.
                    </p>
                    <h2>Changes to these Terms</h2>
                    <p className="md:text-xl text-lg">
                        The Owner reserves the right to amend or otherwise
                        modify these Terms at any time. In such cases, the Owner
                        will appropriately inform the User of these changes.
                    </p>
                    <p className="md:text-xl text-lg">
                        Such changes will only affect the relationship with the
                        User from the date communicated to Users onwards.
                    </p>
                    <p className="md:text-xl text-lg">
                        The continued use of the Service will signify the
                        User&rsquo;s acceptance of the revised Terms. If Users
                        do not wish to be bound by the changes, they must stop
                        using the Service and may terminate the Agreement.
                    </p>
                    <p className="md:text-xl text-lg">
                        The applicable previous version will govern the
                        relationship prior to the User&rsquo;s acceptance. The
                        User can obtain any previous version from the Owner.
                    </p>
                    <h2>Assignment of contract</h2>
                    <p className="md:text-xl text-lg">
                        The Owner reserves the right to transfer, assign,
                        dispose of by novation, or subcontract any or all rights
                        or obligations under these Terms, taking the User’s
                        legitimate interests into account. Provisions regarding
                        changes of these Terms will apply accordingly.
                    </p>
                    <p className="md:text-xl text-lg">
                        Users may not assign or transfer their rights or
                        obligations under these Terms in any way, without the
                        written permission of the Owner.
                    </p>
                    <h2>Contacts</h2>
                    <p className="md:text-xl text-lg">
                        All communications relating to the use of this Website
                        must be sent using the contact information stated in
                        this document.
                    </p>
                    <h2>Severability</h2>
                    <p className="md:text-xl text-lg">
                        Should any provision of these Terms be deemed or become
                        invalid or unenforceable under applicable law, the
                        invalidity or unenforceability of such provision shall
                        not affect the validity of the remaining provisions,
                        which shall remain in full force and effect.
                    </p>
                    <h2>Definitions and legal references</h2>
                    <p className="md:text-xl text-lg">
                        This Website (or this Application)
                    </p>
                    <p className="md:text-xl text-lg">
                        The property that enables the provision of the Service.
                    </p>
                    <h4>Agreement</h4>
                    <p className="md:text-xl text-lg">
                        Any legally binding or contractual relationship between
                        the Owner and the User, governed by these Terms.
                    </p>
                    <h4>Owner (or We)</h4>
                    <p className="md:text-xl text-lg">
                        Indicates the natural person(s) or legal entity that
                        provides this Website and/or the Service to Users.
                    </p>
                    <h4>Service</h4>
                    <p className="md:text-xl text-lg">
                        The service provided by this Website as described in
                        these Terms and on this Website.
                    </p>
                    <h4>Terms</h4>
                    <p className="md:text-xl text-lg">
                        All provisions applicable to the use of this Website
                        and/or the Service as described in this document,
                        including any other related documents or agreements, and
                        as updated from time to time.
                    </p>
                    <h4>Credit Retirement Representation Clause</h4>
                    <ol>
                        <li>
                            Authorization: By agreeing to these terms and
                            conditions, the individual or entity (“Client”)
                            hereby authorizes Sustainology to act on its behalf
                            in matters relating to the retirement of
                            environmental credits.
                        </li>
                        <li>
                            Representation: The Client acknowledges and agrees
                            that Sustainology shall retire environmental credits
                            accrued from the Client’s activities or purchases.
                            Such retirement of credits will be recorded under
                            the name of “Sustainology” in the respective
                            registry’s ledger.
                        </li>
                        <li>
                            Transparency and Verification: Sustainology commits
                            to providing the Client with a transparent record of
                            the retired credits, including details of the
                            retirement in the registry’s ledger. This will serve
                            as verification that the credits have been retired
                            on behalf of the Client.
                        </li>
                        <li>
                            No Ownership Transfer: It is understood that the
                            retirement of credits under Sustainology&rsquo;s
                            name does not imply any transfer of ownership or
                            rights over the retired credits to the Client.
                        </li>
                        <li>
                            Purpose: The purpose of this clause is to facilitate
                            the effective and efficient retirement of
                            environmental credits in alignment with regulatory
                            requirements and industry best practices, thereby
                            contributing to the overall goal of environmental
                            sustainability.
                        </li>
                        <li>
                            Confirmation of Retirement: Upon retirement of the
                            credits, Sustainology will provide the Client with a
                            confirmation document, which will serve as proof of
                            retirement and will detail the quantity and type of
                            credits retired on behalf of the Client.
                        </li>
                    </ol>
                    <h4>User (or You)</h4>
                    <p className="md:text-xl text-lg">
                        Indicates any natural person or legal entity using this
                        Website. Latest update: September 12, 2023
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

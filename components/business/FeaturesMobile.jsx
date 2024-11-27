import React from 'react';
import Image from 'next/image';

const FeaturesMobile = () => {
    return (
        <div className="flex flex-col items-center mt-12 pb-8">
            <section id="cu-1">
                <h2 className="text-4xl text-[#33496F] font-bold text-center mb-6">
                    Features
                </h2>
                <Image
                    loading="lazy"
                    src="/images/business/Mobile-feature.png"
                    alt="Features Image"
                    width={220}
                    height={0}
                    // layout="responsive"
                    className="rounded-lg m-auto"
                />
                <div className="grid grid-cols-1 gap-6 px-4">
                    {/* Each Feature */}
                    <div className="p-4 bg-[#C9D6B0] shadow-lg rounded-lg border border-[#0666ff64]">
                        <h3 className="text-lg font-semibold text-[#33496F]">
                            Advanced Reporting Tools
                        </h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Access detailed climate impact reports and integrate
                            them into your business intelligence dashboard.
                        </p>
                    </div>
                    <div className="p-4 bg-[#2f573828] shadow-lg rounded-lg border border-[#0666ff64]">
                        <h3 className="text-lg font-semibold text-[#33496F]">
                            Order Management Integration
                        </h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Sync with your existing order management system to
                            track carbon emissions for every transaction.
                        </p>
                    </div>
                    <div className="p-4 bg-[#f5ff6650] shadow-lg rounded-lg border border-[#0666ff64]">
                        <h3 className="text-lg font-semibold text-[#33496F]">
                            Real-Time Carbon Offsetting
                        </h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Provide real-time carbon offset options to customers
                            at checkout, enhancing your sustainability profile.
                        </p>
                    </div>
                    <div className="p-4 bg-[#87878721] shadow-lg rounded-lg border border-[#0666ff64]">
                        <h3 className="text-lg font-semibold text-[#33496F]">
                            Life Cycle Assessment
                        </h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Tracking the life cycle of your product from
                            Cradle-To-Grave and Cradle-To-Gate
                        </p>
                    </div>
                    <div className="p-4 bg-[#ffd6d65d] shadow-lg rounded-lg border border-[#0666ff64]">
                        <h3 className="text-lg font-semibold text-[#33496F]">
                            Automation of Carbon Tracking
                        </h3>
                        <p className="text-[#666666] text-sm mt-2">
                            Automatically calculate carbon emissions for
                            products, deliveries, or operations without manual
                            work.
                        </p>
                    </div>
                </div>
            </section>
            <h2 className="text-3xl text-[#33496F] font-bold text-center my-6">
                Simple Steps to Integrate Sustainology API
            </h2>
        </div>
    );
};

export default FeaturesMobile;

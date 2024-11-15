'use client';
import BusinessHeader from '@/components/common/Business-header';
import Sidebar from '@/components/business_panel/sidebar/page';
import headersSlice from '@/redux/slices/headersSlice';
import { useSelector, useDispatch } from 'react-redux';

const RootLayout = ({ children }) => {
    const isSidebarOpen = useSelector((state) => state?.sideBarToggle?.value);

    return (
        <div className="grid grid-cols-12 h-screen overflow-y-auto">
            {/* Sidebar */}

            <div
                className={`col-span-12 max-lg:absolute max-lg:z-20 transition-all duration-300 ease-in-out lg:col-span-3 relative border border-[#E8E8E8] bg-gradient-to-b from-[#EAF5DF] to-[#F2EFDE] ${isSidebarOpen ? ' max-lg:left-0' : ' max-lg:-left-96'} lg:block max-lg:h-full`}
            >
                <nav className="overflow-hidden lg:fixed lg:w-[25%]">
                    <Sidebar />
                </nav>
            </div>

            {/* Main Content */}
            <div
                className={`col-span-12 max-lg:h-screen lg:col-span-9 bg-[#FAFAFA] block`}
            >
                <BusinessHeader />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;

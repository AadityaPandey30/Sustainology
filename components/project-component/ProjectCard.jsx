import { useState } from 'react';
import { useFetch } from '../../hook/getDataOnLoad';
import Card from './Cards';
import DropDownWithCheckBox from '../common/DropDownWithCheckBox';
import Button from '../common/Button';
import { useFetchPostType } from '../../hook/postDataOnLoad';
import ReactPaginate from 'react-paginate';

const ProjectCard = ({ setSelectedProjectData, setIsContactModal }) => {
    const [paginationData, setPaginationData] = useState({
        limit: 5,
        page: 1,
    });

    const [filterValues, setFilterValues] = useState({
        region: [],
        type: [],
    });

    const [isChecked, setIsChecked] = useState({});

    const [isVisible, setIsVisible] = useState({
        all: true,
        region: false,
        type: false,
    });

    const projectData = useFetchPostType({
        url: `/project/notTop`,
        options: { ...paginationData, ...filterValues },
        dependencies: [paginationData, filterValues],
    });
    const filterData = useFetch({
        url: '/project/filterData',
    });

    const notIsTopData = projectData?.data;
    const filterDataResponse = filterData?.data;
    const pageCount = Math.ceil(notIsTopData?.length / paginationData?.limit);

    //active and inactive of filters and dropdown
    const handelOpenClose = (keyName, value) => {
        setIsVisible(() => {
            for (const key in isVisible) {
                if (key !== keyName) {
                    isVisible[key] = false;
                }
            }
            return { ...isVisible, [keyName]: value };
        });
    };

    //pagination
    const handlePageClick = (event) => {
        setPaginationData((preValue) => {
            return { ...preValue, page: event.selected + 1 };
        });
    };

    //handel all filter click
    const handelAllClick = () => {
        setPaginationData((preValue) => {
            return { ...preValue, page: 1 };
        });
        setFilterValues({
            region: [],
            type: [],
        });
        setIsChecked({});
    };

    return (
        <section className=" pt-2 lg:px-[95px] px-10 mt-10 md:mt-20">
            {/* filters */}
            <div className="font-semibold text-lg leading-6 text-[#FFFFFF] mb-10 lg:flex items-center ">
                <div className="sm:flex lg:items-center items-end gap-1 md:gap-11 justify-start">
                    <Button
                        className={`sm:py-3  sm:px-[5.1rem] sm:w-[15%] w-full h-[2.25rem] block sm:flex items-center justify-center ${isVisible.all ? 'bg-[#2F5738]' : 'bg-[#5D7C68]'} text rounded focus:shadow text-center`}
                        onFocus={() => handelOpenClose('all', true)}
                        onBlur={() => handelOpenClose('all', false)}
                        onClick={handelAllClick}
                    >
                        <p>All</p>
                    </Button>
                    <div className="flex items-end gap-1 md:gap-11 justify-between">
                        <DropDownWithCheckBox
                            buttonLabel={'Region'}
                            handelOpenClose={handelOpenClose}
                            isVisible={isVisible}
                            options={filterDataResponse?.countryNames}
                            keyName={'region'}
                            setFilterValues={setFilterValues}
                            setPaginationData={setPaginationData}
                            setIsChecked={setIsChecked}
                            isChecked={isChecked}
                        />
                        <DropDownWithCheckBox
                            buttonLabel={'Type'}
                            handelOpenClose={handelOpenClose}
                            options={filterDataResponse?.projectTypes}
                            isVisible={isVisible}
                            keyName={'type'}
                            setFilterValues={setFilterValues}
                            setPaginationData={setPaginationData}
                            setIsChecked={setIsChecked}
                            isChecked={isChecked}
                        />
                    </div>
                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    containerClassName="hidden max-lg:mt-4 sm:flex md:justify-end item-center w-full"
                    previousLinkClassName="text-[#AEADB1]  w-10 h-10 hover:bg-[#DCE0E7] rounded-full flex items-center justify-center mr-2 text-xl"
                    pageClassName=" w-10 rounded-full text-[#AEADB1]   h-10 flex items-center justify-center"
                    pageLinkClassName="w-8 h-8 hover:bg-[#DCE0E7] rounded-full flex items-center justify-center"
                    activeLinkClassName="w-10 rounded-full bg-[#DCE0E7] text-[#33496F] h-10 flex items-center justify-center"
                    disabledLinkClassName="cursor-default"
                    nextLinkClassName="text-[#AEADB1] rounded-full hover:bg-[#DCE0E7]   w-10 h-10 flex items-center justify-center ml-2 text-xl "
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    forcePage={paginationData.page - 1}
                />
            </div>
            {/* card start */}

            {notIsTopData?.length > 0 ? (
                <>
                    {notIsTopData?.map((project) => (
                        <Card
                            key={project?._id}
                            project={project}
                            setSelectedProjectData={setSelectedProjectData}
                            setIsContactModal={setIsContactModal}
                        />
                    ))}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        containerClassName="sm:hidden max-lg:mb-4 flex justify-center item-center w-full"
                        previousLinkClassName="text-[#AEADB1]  w-10 h-10 hover:bg-[#DCE0E7] rounded-full flex items-center justify-center mr-2 text-xl"
                        pageClassName=" w-10 rounded-full text-[#AEADB1]   h-10 flex items-center justify-center"
                        pageLinkClassName="w-8 h-8 hover:bg-[#DCE0E7] rounded-full flex items-center justify-center"
                        activeLinkClassName="w-10 rounded-full bg-[#DCE0E7] text-[#33496F] h-10 flex items-center justify-center"
                        disabledLinkClassName="cursor-default"
                        nextLinkClassName="text-[#AEADB1] rounded-full hover:bg-[#DCE0E7]   w-10 h-10 flex items-center justify-center ml-2 text-xl "
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        forcePage={paginationData.page - 1}
                    />
                </>
            ) : (
                <>
                    {!projectData?.loading && (
                        <div className="w-full flex justify-center font-bold text-lg mb-10 text-[#2F5738]">
                            <p>No project found..!!</p>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default ProjectCard;

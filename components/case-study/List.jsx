import React from 'react';
import Card from './Card';

const List = ({ cases }) => {
    return (
        <div className=" mx-auto px-5  lg:pl-[82px] pb-20">
            <div className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-48">
                <div className="flex-grow flex flex-col gap-16 md:gap-[143px]">
                    {cases
                        ?.filter((e, i) => i % 2)
                        ?.map((e, index) => (
                            <div
                                key={e.id}
                                className={`${index === 0 ? 'mt-0 md:mt-[187px]' : ''} `}
                            >
                                <Card caseStudy={e} />
                            </div>
                        ))}
                </div>
                <div className="flex-grow flex flex-col gap-16 md:gap-[143px]">
                    {cases
                        ?.filter((e, i) => !(i % 2))
                        ?.map((e) => (
                            <div key={e.id}>
                                <Card caseStudy={e} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default List;

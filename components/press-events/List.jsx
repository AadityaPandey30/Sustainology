import React from 'react';
import Card from './Card';

const List = ({ pressEvents }) => {
    return (
        <div className=" mx-auto px-5 lg:pl-[82px] pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  md:gap-48">
                <div className="flex-grow flex flex-col gap-16 md:gap-[143px]">
                    {pressEvents
                        ?.filter((e, i) => i % 2)
                        ?.map((event, index) => (
                            <div
                                key={event.id}
                                className={`${index === 0 ? 'mt-0 md:mt-[187px]' : ''} `}
                            >
                                <Card event={event} />
                            </div>
                        ))}
                </div>
                <div className="flex-grow flex flex-col gap-16 md:gap-[143px]">
                    {pressEvents
                        ?.filter((e, i) => !(i % 2))
                        ?.map((event) => (
                            <div key={event.id}>
                                <Card event={event} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default List;

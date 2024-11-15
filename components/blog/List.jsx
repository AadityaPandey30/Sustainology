import React from 'react';
import Card from './Card';

const List = ({ blogs }) => {
    return (
        <div className=" mx-auto px-5 lg:pl-[82px] pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-48">
                <div className="flex-grow flex flex-col gap-16 lg:gap-[143px]">
                    {blogs
                        ?.filter((e, i) => i % 2)
                        ?.map((blog, index) => (
                            <div
                                key={blog.id}
                                className={`${index === 0 ? 'mt-0 lg:mt-[187px]' : ''} `}
                            >
                                <Card blog={blog} />
                            </div>
                        ))}
                </div>
                <div className="flex-grow flex flex-col gap-16 lg:gap-[143px]">
                    {blogs
                        ?.filter((e, i) => !(i % 2))
                        ?.map((blog) => (
                            <div key={blog.id}>
                                <Card blog={blog} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default List;

// UserProfileCarousel.js
import React, { useState } from 'react';
// import UserProfile from './UserProfile';

const UserProfileCarousel = () => {
    const profiles = [
        {
            name: 'test',
            bio: 'test1',
            image: '/images/founders/ansh-detail.png',
        },
        {
            name: 'test2',
            bio: 'test2',
            image: '/images/founders/ansh-detail.png',
        },
        {
            name: 'test3',
            bio: 'test3',
            image: '/images/founders/ansh-detail.png',
        },
        {
            name: 'test1',
            bio: 'test1',
            image: '/images/founders/ansh-detail.png',
        },
        {
            name: 'test1',
            bio: 'test1',
            image: '/images/founders/ansh-detail.png',
        },
        {
            name: 'test1',
            bio: 'test1',
            image: '/images/founders/ansh-detail.png',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentUser = profiles[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
        );
    };

    return (
        // <div className="user-profile-carousel">
        //     <div className="user-profile">
        //         <img src={currentUser.image} alt={currentUser.name} />
        //         <h3>{currentUser.name}</h3>
        //         <p>{currentUser.bio}</p>
        //     </div>
        //     <button onClick={handlePrevious}>Previous</button>
        //     <button onClick={handleNext}>Next</button>
        // </div>
        <div className=" mt-32 flex justify-center h-1/2">
            {/* <div className="bg-green-500 w-1/2 rounded-t-full"> */}
            <div className="w-24 h-24 rounded-full relative top-3/4 right-64">
                <img src="/images/founders/ansh-detail.png" />
            </div>
            <div className="w-24 h-24 rounded-full relative top-[40%] right-44">
                <img src="/images/founders/ansh-detail.png" />
            </div>
            <div className="w-24 h-24 rounded-full relative top-12 right-10">
                <img src="/images/founders/ansh-detail.png" />
            </div>
            <div className="w-24 h-24 rounded-full relative top-[40%] left-44">
                <img src="/images/founders/ansh-detail.png" />
            </div>
            <div className="w-24 h-24 rounded-full relative top-3/4 left-64">
                <img src="/images/founders/ansh-detail.png" />
            </div>
            {/* </div> */}
        </div>
    );
};

export default UserProfileCarousel;

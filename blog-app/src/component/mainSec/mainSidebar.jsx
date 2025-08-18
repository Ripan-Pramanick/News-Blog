import React from 'react';
import FollowSideBar from './mainSideBar/followSideBar';

const mainSidebar = () => {
    return (
        <div className='w-[30%] lg:w-[25%] bg-white p-4 min-h-screen absolute top-0 right-10'>
            <FollowSideBar/>
        </div>
    )
}

export default mainSidebar;
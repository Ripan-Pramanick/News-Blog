import React from 'react';
import FollowSideBar from './mainSideBar/followSideBar';
import SideRecent from './mainSideBar/sideRecent';
import SideOther from './mainSideBar/sideOther.jsx'

const mainSidebar = () => {
    return (
        <div className='w-[30%] lg:w-[25%] bg-white p-4 min-h-screen absolute top-0 right-10 '>
            <FollowSideBar/>
            <SideRecent/>
            <SideOther/>
        </div>
    )
}

export default mainSidebar;
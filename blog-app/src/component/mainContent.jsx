import React from 'react';
import MainFirst from './mainSec/mainFirst.jsx';
import MainSecond from './mainSec/mainSecond.jsx';
import MainSidebar from './mainSec/mainSidebar.jsx';

const MainContent = () => {
    return (
        <div>
            <div className='flex flex-row w-[70%] lg:flex-row gap-4'>
                <MainFirst />
                <MainSecond />
            </div>
            <MainSidebar />
        </div>
    )
}

export default MainContent;
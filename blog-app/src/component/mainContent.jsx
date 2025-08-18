import React from 'react';
import MainFirst from './mainSec/mainFirst.jsx';
import MainSecond from './mainSec/mainSecond.jsx';
import MainSidebar from './mainSec/mainSidebar.jsx';

const MainContent = () => {
    return (
        <div className='relative'>
            <div className='flex flex-row w-[70%] lg:flex-row gap-4'>
                <MainFirst />
                
            </div>
            <div >
                <MainSecond />
            </div>
            <div>
                <MainSidebar />
            </div>
                
        </div>
    )
}

export default MainContent;
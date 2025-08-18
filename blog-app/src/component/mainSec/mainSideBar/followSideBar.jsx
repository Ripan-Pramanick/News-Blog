import React, { Component } from 'react'

const FollowSideBar = () => {
    return (
        <div className='w-full mx-auto bg-white p-4 min-h-screen absolute top-0 '>
           
                <div className='relative w-full h-full bg-white p-6'>
                    <div>
                        <span className="text-2xl font-semibold  rounded-t-2xl text-white py-1 px-1.5 mb-[1px] bg-gray-700">Follow US</span>
                    </div>
                    <div className='h-[4px] w-full bg-gray-700'></div>
                </div>
            
            <ul className='space-y-2'>
                <li><a href="#" className='text-blue-500 hover:underline'>Facebook</a></li>
                <li><a href="#" className='text-blue-500 hover:underline'>Twitter</a></li>
                <li><a href="#" className='text-blue-500 hover:underline'>Instagram</a></li>
                <li><a href="#" className='text-blue-500 hover:underline'>LinkedIn</a></li>
            </ul>
        </div>
    )
}
export default FollowSideBar;
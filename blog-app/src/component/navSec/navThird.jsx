import { useState } from 'react'
import SearchBar from './navSearchBar.jsx';

function NavThird() {
  return (
    <div>
      <div className='w-full h-14 bg-gray-700 flex items-center justify-between px-4'>
        <div className='flex items-center '>
          <ul className='flex items-center space-x-6 text-white gap-5'>
            <li className='list-none hover:text-gray-300'><a href="#">Home</a></li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">World</a>

              {/* <ul>
              <li><a href="#">National</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">State</a></li>
              <li><a href="#">Local</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Health</a></li>
              <li><a href="#">Science</a></li>
            </ul> */}
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">India</a>

              {/* <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul> */}
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">USA</a></li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">Politics</a></li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">Sports</a></li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">Travel</a></li>
            <span className="text-gray-500 mx-2">|</span>
            <li className='list-none hover:text-gray-300'><a href="#">Entertainment</a></li>

          </ul>
        </div>
        
{/* import a search bar */}
        
          <SearchBar />
        

      </div>
    </div>
  );
}
export default NavThird
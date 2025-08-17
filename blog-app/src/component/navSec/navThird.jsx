import { useState } from 'react'
import SearchBar from './navSearchBar.jsx';

function NavThird() {
  return (
    <div>
      <div className='w-full h-14 bg-gray-700 flex items-center justify-between px-4'>
        
        <div className="flex items-center justify-center  font-inter p-4">
      <nav className="rounded-xl shadow-lg bg-gray-700 ">
        {/* The main navigation list */}
        <ul className="flex items-center space-x-6 text-white text-lg">
          {/* Home Link */}
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">Home</a>
          </li>
          <span className="text-gray-500">|</span>

          {/* World Dropdown Menu */}
          <li className="list-none relative group">
            {/* The main link for the dropdown */}
            <a href="#" className="font-medium hover:text-gray-300 transition-colors">World</a>
            
            {/* The dropdown sub-menu. It's hidden by default and appears on hover. */}
            <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-700 shadow-xl rounded-xl overflow-hidden hidden group-hover:block transition-all duration-300 ease-in-out z-50">
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">National</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">International</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">State</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Local</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Business</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Technology</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Health</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Science</a>
              </li>
            </ul>
          </li>
          <span className="text-gray-500">|</span>

          {/* India Dropdown Menu (with sample items) */}
          <li className="list-none relative group">
            <a href="#" className="font-medium hover:text-gray-300 transition-colors">India</a>
            <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-700 shadow-xl rounded-xl overflow-hidden hidden group-hover:block transition-all duration-300 ease-in-out z-50">
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Politics</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Culture</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">History</a>
              </li>
              <li className="list-none">
                <a href="#" className="block p-3 hover:bg-gray-600 transition-colors">Travel</a>
              </li>
            </ul>
          </li>
          <span className="text-gray-500">|</span>

          {/* Simple Links */}
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">USA</a>
          </li>
          <span className="text-gray-500">|</span>
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">Politics</a>
          </li>
          <span className="text-gray-500">|</span>
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">Sports</a>
          </li>
          <span className="text-gray-500">|</span>
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">Travel</a>
          </li>
          <span className="text-gray-500">|</span>
          <li className="list-none hover:text-gray-300 transition-colors">
            <a href="#" className="font-medium">Entertainment</a>
          </li>
        </ul>
      </nav>
    </div>
        
{/* import a search bar */}
        
          <SearchBar />
        

      </div>
    </div>
  );
}
export default NavThird
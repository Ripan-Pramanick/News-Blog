import { useState } from 'react';

function NavSearchBar() {
    const [count, setCount] = useState(0); 
  return (
    <div className='w-full max-w-[1160px] h-10  flex items-center justify-center px-4 relative right-5 left-0'>
      <div >
          <form

            className="flex items-center bg-white rounded-full shadow-lg p-2 transition-all duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 "
          >
            {/* Search input field */}
            <input
              type="text"


              placeholder="Search..."
              className="w-full px-5 py-1 text-gray-700 leading-tight focus:outline-none placeholder-gray-400 bg-transparent "
            />
            {/* Search button with lucide-react icon */}
            <button
              type="submit"
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              <svg className='h-4 w-4' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.5 3C5.36 3 2 6.36 2 10.5S5.36 18 9.5 18c2.21 0 4.21-.9 5.65-2.35l5.79 5.79L22 20l-5.79-5.79C17.1 14.71 18 12.71 18 10.5c0-4.14-3.36-7.5-7.5-7.5zM9.5 16C6.46 16 4 13.54 4 10.5S6.46 5 9.5 5s5.5 2.46 5.5 5.5S12.54 16 9.5 16z" />
              </svg>
            </button>
          </form>
        </div>
    </div>
  );
}

export default NavSearchBar;
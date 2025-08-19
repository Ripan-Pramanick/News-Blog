import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Array of social media links and their properties
const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: '#',
    color: 'text-blue-600',
    followBtn: 'Like',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: '#',
    color: 'text-gray-800',
    followBtn: 'Follow',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: '#',
    color: 'text-pink-600',
    followBtn: 'Follow',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: '#',
    color: 'text-blue-700',
    followBtn: 'Connect',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: '#',
    color: 'text-red-700',
    followBtn: 'Subscribe',
  },
];

const FollowSideBar = () => {
  return (
    <div className='w-full max-w-sm mx-auto bg-white  overflow-hidden'>
      {/* Sidebar Header */}
      <div className='relative w-full h-full bg-white p-6'>
                <div>
                    <span className="text-2xl font-semibold  rounded-t-2xl text-white py-1 px-1.5 mb-[1px] bg-gray-700">Follow US</span>
                </div>
                <div className='h-[4px] w-full bg-gray-700'></div>
            </div>

      {/* Social Media Links */}
      <ul className='space-y-4 p-6'>
        {socialLinks.map((link, index) => {
          // Use the `group` class for hover effects on the list item
          const IconComponent = link.icon;
          return (
            <li
              key={index}
              className='relative flex items-center justify-between gap-4 p-4 rounded-xl  transition-transform duration-300 hover:shadow-lg transform hover:scale-105 group'
            >
              {/* This inner div and pseudo-elements create a cool hover border effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-gray-700 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-100"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-gray-700 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-100"></div>
              </div>

              <a
                href={link.url}
                className='flex items-center gap-4 w-full h-10'
              >
                {/* Social Media Icon with Tailwind color */}
                <IconComponent className={`w-8 h-8 ${link.color}`} />
                {/* Social Media Name */}
                <span className='text-gray-900 font-medium'>{link.name}</span>
              </a>

              {/* Follow button with dynamic hover state */}
              <a
                href={link.url}
                className={`py-1 px-4 rounded-full text-sm font-semibold text-white transition-colors duration-300
                ${link.color === 'text-blue-600' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                ${link.color === 'text-gray-800' ? 'bg-gray-800 hover:bg-gray-900' : ''}
                ${link.color === 'text-pink-600' ? 'bg-pink-600 hover:bg-pink-700' : ''}
                ${link.color === 'text-blue-700' ? 'bg-blue-700 hover:bg-blue-800' : ''}
                ${link.color === 'text-red-700' ? 'bg-red-700 hover:bg-red-800' : ''}
                `}
              >
                {link.followBtn || 'Follow'}
              </a>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FollowSideBar;


import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="px-6 max-w-7xl mx-auto py-4 flex justify-between items-center border-b border-green-200">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-4">
        <div className="text-lg font-bold">Codemy <span className="text-yellow-400">Qirk</span></div>
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 w-64 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {/* Right: Auth Options */}
      <div className="flex items-center gap-4">
        {/* If logged in */}
        <div className="relative" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <button className="flex items-center gap-2 text-green-900 font-semibold hover:text-green-700 focus:outline-none">
            <img src="/images/user-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-600" />
            <span className="hidden sm:inline">Hello, User</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 text-white border border-green-700">
              <a href="/dashboard" className="block px-4 py-2 text-sm text-green-800 hover:bg-green-100">My Account</a>
              <a onClick={() => alert('Logging out...')} className="block px-4 py-2 text-sm text-green-800 hover:bg-green-100 border-t border-green-200 cursor-pointer">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
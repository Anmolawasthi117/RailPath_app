import React, { useState, useEffect, useRef } from 'react';

const DummyMapComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
        <div className="text-lg font-semibold">Jabalpur Junction</div>

        {/* Hamburger Icon */}
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>Profile</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>Settings</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={closeMenu}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 shadow-md">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for places, facilities, etc."
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>

      {/* Map area */}
      <div className="flex-1 bg-gray-300 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/600x400)' }}>
          {/* Mock marker */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-red-500 text-white p-2 rounded-full">📍</div>
            <div className="mt-1 text-center text-sm">You are here</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-4 flex justify-between items-center border-t border-gray-200">
        <div className="text-sm text-gray-500">Explore nearby</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Start Navigation</button>
      </div>
    </div>
  );
};

export default DummyMapComponent;

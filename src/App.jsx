import React, { useState, useEffect, useRef } from 'react';

const DummyMapComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState('default'); // State to track the selected map
  const dropdownRef = useRef(null);

  const maps = {
    default: 'https://media.discordapp.net/attachments/1071688106190831658/1278443526312693861/default_map.jpg?ex=66d0d2d1&is=66cf8151&hm=d7329c7048c9ac2a422d14537a6b3d3a234d8d59f0fb7300bedf7ad3a135d4b1&=&format=webp&width=328&height=569',
    'Train status': 'https://media.discordapp.net/attachments/1071688106190831658/1278443526547308685/cafeteria_map.jpg?ex=66d0d2d1&is=66cf8151&hm=bbe5785d4101d15ae4006dd7273aee7859a8587013a625e6a6bbdec44ba7453f&=&format=webp&width=305&height=570',
    'Ticket counter': 'https://media.discordapp.net/attachments/1071688106190831658/1278443526811811982/ticket_map.jpg?ex=66d0d2d1&is=66cf8151&hm=d24549cb2261d8deed7384c31bb0e65faddfeb82f296c3c1747fde6130586ff0&=&format=webp&width=298&height=570',
    'Waiting Room': 'https://media.discordapp.net/attachments/1071688106190831658/1278443526811811982/ticket_map.jpg?ex=66d0d2d1&is=66cf8151&hm=d24549cb2261d8deed7384c31bb0e65faddfeb82f296c3c1747fde6130586ff0&=&format=webp&width=298&height=570',
    'Luggage Room': 'https://media.discordapp.net/attachments/1071688106190831658/1278443527558402111/luggage_map.jpg?ex=66d0d2d1&is=66cf8151&hm=90cf0a1a201a5120798075f56240a63cc56f1543c58abdd81221e80924fe8e99&=&format=webp&width=309&height=570',
    'Cafeteria': 'https://media.discordapp.net/attachments/1071688106190831658/1278443527071731763/wheel_map.jpg?ex=66d0d2d1&is=66cf8151&hm=88147ad75ed0fe742069f6f9a4495cd9404835a5a07cc3c5a00cf9bbf2f6a6cc&=&format=webp&width=416&height=570',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (place) => {
    setSelectedMap(place);
    closeMenu();
  };

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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center relative shadow-md">
        <div className="text-lg font-bold">Rail Path</div>

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
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-transform transform opacity-100"
              style={{ transition: 'transform 0.3s ease-out, opacity 0.3s ease-out' }}
            >
              <ul className="list-none text-black p-0 m-0">
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Train status')}>Wheel chair collection</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Ticket counter')}>Ticket counter</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Waiting Room')}>Waiting Room</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Luggage Room')}>Luggage Room</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Cafeteria')}>Cafeteria</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 shadow-md rounded-lg">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${maps[selectedMap]})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl font-bold">
            {selectedMap !== 'default' ? selectedMap : 'Default Map'}
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-4 flex justify-between items-center border-t border-gray-200 shadow-md">
        <div className="text-sm text-gray-500">Explore nearby</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Start Navigation
        </button>
      </div>
    </div>
  );
};

export default DummyMapComponent;

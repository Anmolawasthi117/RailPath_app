// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DummyMapComponent = ({ selectedMap = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const maps = {
    default: 'https://media.discordapp.net/attachments/1071688106190831658/1278443526312693861/default_map.jpg?ex=66d17b91&is=66d02a11&hm=33299ff083ec883679e22aa863043f7c2347522946289fb588f1c2ea98fcf19d&=&format=webp&width=328&height=569',
    'Train status': 'https://media.discordapp.net/attachments/1071688106190831658/1278443526547308685/cafeteria_map.jpg?ex=66d17b91&is=66d02a11&hm=be82484d5158be20ed93971033ed0f07b11d362e8c3066b5971001fda519ee4e&=&format=webp&width=305&height=570',
    'Ticket counter': 'https://media.discordapp.net/attachments/1071688106190831658/1278443526547308685/cafeteria_map.jpg?ex=66d17b91&is=66d02a11&hm=be82484d5158be20ed93971033ed0f07b11d362e8c3066b5971001fda519ee4e&=&format=webp&width=305&height=570',
    'Waiting Room': 'https://media.discordapp.net/attachments/1071688106190831658/1278443527558402111/luggage_map.jpg?ex=66d17b91&is=66d02a11&hm=bc283d8cd8303b0f7d60bb14c387b7024d6c189cbf9a74af26c7eb333c8f1ed6&=&format=webp&width=309&height=570',
    'Luggage Room': 'https://media.discordapp.net/attachments/1071688106190831658/1278443527306608711/waiting_map.jpg?ex=66d17b91&is=66d02a11&hm=a8f317c3520d38587581ca9a3024af29fad0b8d4be498f0af8cb83e45f42a197&=&format=webp&width=371&height=570',
    'Cafeteria': 'https://media.discordapp.net/attachments/1071688106190831658/1278443527071731763/wheel_map.jpg?ex=66d17b91&is=66d02a11&hm=d60f98790d9143df5ed1c967d4453c49e2b14bb61f6da986b421a397163ae4cc&=&format=webp&width=416&height=570',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (place, route) => {
    navigate(route);
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
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Train status', '/train-status')}>Train Status</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Ticket counter', '/ticket-counter')}>Ticket Counter</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Waiting Room', '/waiting-room')}>Waiting Room</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Luggage Room', '/luggage-room')}>Luggage Room</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Cafeteria', '/cafeteria')}>Cafeteria</li>
              </ul>
            </div>
          )}
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
        ></div>
      </div>

      {/* Footer */}
      <div className="bg-white p-4 flex justify-between items-center border-t border-gray-200 shadow-md">
        <div className="text-sm text-gray-500">Explore nearby</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Start Navigation now
        </button>
      </div>
    </div>
  );
};

export default DummyMapComponent;

import React, { useState, useEffect, useRef } from 'react';

const DummyMapComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState('default'); // State to track the selected map
  const dropdownRef = useRef(null);

  const maps = {
    default: 'https://media.discordapp.net/attachments/1135133573620449354/1278435611207925821/IMG-20240828-WA0047.jpg?ex=66d0cb71&is=66cf79f1&hm=74e1a5da1218a6c00a100fa39116984758fa1d04422185fc9bf3c22bc6b08cea&=&format=webp&width=990&height=570',
    'Train status': 'https://media.discordapp.net/attachments/1135133573620449354/1278435610972913755/IMG-20240828-WA0045.jpg?ex=66d0cb71&is=66cf79f1&hm=93355ad4e411659cf7b225e0df33a1e7dda06ea99bbbaab0624003544f44ae64&=&format=webp&width=781&height=570',
    'Ticket counter': 'https://media.discordapp.net/attachments/1135133573620449354/1278435610746687498/IMG-20240828-WA0046.jpg?ex=66d0cb71&is=66cf79f1&hm=2abfe512946fe1dad14095415b12dbdb807ce63612ebefa2957ee4d79d54b142&=&format=webp&width=1089&height=570',
    'Waiting Room': 'https://media.discordapp.net/attachments/1135133573620449354/1278435611774156913/IMG-20240828-WA0051.jpg?ex=66d0cb72&is=66cf79f2&hm=f86e75ebba0d3c095a4d03a3e0fe06fa904a76d9e2f775e0268eee214f920ba3&=&format=webp&width=875&height=570',
    'Luggage Room': 'https://media.discordapp.net/attachments/1135133573620449354/1278435611484618774/IMG-20240828-WA0049.jpg?ex=66d0cb71&is=66cf79f1&hm=a2fb6725fab8a13a745911b407843243a6ae9fa5f7b82db44cbeccce6e78a03f&=&format=webp&width=1049&height=570',
    'Cafeteria': 'https://media.discordapp.net/attachments/1135133573620449354/1278435610520064070/IMG-20240828-WA0052.jpg?ex=66d0cb71&is=66cf79f1&hm=fe83e1529f2f7e1e748a1c8f6bfd301b0427b27944cb9f50a67e1be9e2edc778&=&format=webp&width=1067&height=570',
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
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleMenuClick('Train status')}>Train status</li>
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

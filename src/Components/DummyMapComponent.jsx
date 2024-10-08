import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import cafeicon from "../icons/cafeteria_icon.png";
import luggageicon from "../icons/luggage_room_icon.png";
import stationicon from "../icons/raiway_staion_icon.png";
import ticketicon from "../icons/ticket_count_icon.png";
import waitingicon from "../icons/waiting_room_icon.png";
import wheelicon from "../icons/wheel_chair_icon.png";
import cafeteriamap from "../assets/maps/cafeteriamap.jpg";
import luggagemap from "../assets/maps/luggagemap.jpg";
import stationmap from "../assets/maps/stationmap.jpg";
import ticketmap from "../assets/maps/ticketmap.jpg";
import waitingmap from "../assets/maps/waitingmap.jpg";
import wheelmap from "../assets/maps/wheelmap.jpg";

const DummyMapComponent = ({ selectedMap = "default" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const maps = {
    default: stationmap,
    wheelchair: wheelmap,
    "Ticket counter": ticketmap,
    "Waiting Room": waitingmap,

    "Luggage Room": luggagemap,
    Cafeteria: cafeteriamap,
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex-col h-full bg-gray-100 box-border">
      <div className="bg-[#0C0F47] text-white p-4  flex justify-between items-center h-[8vh] box-border  ">
        <div className="text-3xl font-bold">RAILपथ</div>

        <div className="relative flex">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="focus:outline-none"
          >
            <svg
              className="h-9 w-9 mt-3 "
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

          <div
            className="absolute left-[-82vw] flex top-36  w-[38vh] h-[5vh]    z-50 transition-transform transform opacity-100"
            style={{
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <ul className="list-none text-black p-0 flex m-0 overflow-scroll no-scrollbar">
              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100 "
                onClick={() => handleMenuClick("default", "/")}
              >
                <img
                  src={stationicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0  "
                />
                Station Map
              </li>
              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100  "
                onClick={() => handleMenuClick("wheelchair", "/wheelchair")}
              >
                <img
                  src={wheelicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0 "
                />
                Wheel Chair Collection
              </li>

              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100  "
                onClick={() =>
                  handleMenuClick("Ticket counter", "/ticket-counter")
                }
              >
                <img
                  src={ticketicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0  "
                />
                Ticket Counter
              </li>

              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100  "
                onClick={() => handleMenuClick("Waiting Room", "/waiting-room")}
              >
                <img
                  src={waitingicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0 "
                />
                Waiting Room
              </li>

              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100 "
                onClick={() => handleMenuClick("Luggage Room", "/luggage-room")}
              >
                <img
                  src={luggageicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0 "
                />
                Luggage Room
              </li>

              <li
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold text-[0.5rem] mr-2 rounded-full justify-center items-center bg-white w-[40%] flex-shrink-0  flex border border-red-100 "
                onClick={() => handleMenuClick("Cafeteria", "/cafeteria")}
              >
                <img
                  src={cafeicon}
                  alt=""
                  className="w-[30%] mr-4 flex-shrink-0 "
                />
                Cafeteria
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 h-[10vh] mt-2 w-full z-10 box-border absolute">
        <form className="flex items-center max-w-sm mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5  border border-black "
              placeholder="Search the location"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      <div className="flex h-[84.5vh] bg-gray-300 justify-center box-border ">
        <img
          src={maps[selectedMap]}
          alt="Map"
          className="w-full border border-red-500  h-full object-fill"
          style={{
            zIndex: 1,
          }}
        />

        <div className="absolute top-36 right-2 flex flex-col space-y-2 z-10">
          <button className="p-2 bg-white rounded-[100%] shadow border border-black hover:bg-gray-200 flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/RleXD8IHedCu7KRM40YHjmmHqfH2fnirQrrOoCe7VtQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83MjY5LzcyNjk4/MzIucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
              alt=""
              className="h-8 w-8 "
            />
          </button>
          <button className="p-2 bg-white border border-black rounded-[100%] shadow hover:bg-gray-200 flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/HXaNdXES51uHN3peXeaVMMS_wJ7pHrNhxesOWFTPLj4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbW9iaWxlLXBo/b25lLTQxLzQwMC92/aWJyYXRpb24tMTI4/LnBuZw"
              alt=""
              className="h-8 w-8"
            />
          </button>
          <button className="p-2 bg-white border border-black rounded-[100%] shadow hover:bg-gray-200 flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/1uyX7zc8ElRuDtdfktZ5c-tOtP76FgdirLaAvXEDqqs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYmFzaWMtbmF2/aWdhdGlvbi0yLzI0/L3NyLWNhcHRpb24t/NjQucG5n"
              alt=""
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      <div className="bg-transparent p-4 flex justify-between h-[10vh] items-center absolute bottom-0 z-30  rounded-lg ">
        <button className="bg-[#0C0F47] text-white font-bold px-4 py-2   w-[90vw] text-xl  rounded-xl shadow-md ">
          Start Navigation
        </button>
      </div>
    </div>
  );
};

export default DummyMapComponent;

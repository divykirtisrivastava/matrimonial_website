'use client'

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import UserContext from "../../context/UserContext";

const menuItems = [
  {
    name: 'Home',
    to: '',
  },
  
]

export  default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const menuItems = [
      { name: "Home", to: "/admin" },
      {name: "Add status", to:"/admin/adminstatus"},
      {name: "Users", to:"/admin/users"},
      {name: "Payments", to:"/admin/payments"}
    ];
  
  return (
    <header className="bg-white shadow">
    <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      {/* Logo and Title */}
      <div className="flex items-center">
        {/* <svg
          width="30"
          height="30"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528Z"
            fill="black"
          />
        </svg> */}
        <span className="ml-2 text-xl font-bold">Admin</span>
      </div>

      {/* Menu for larger screens */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="text-sm font-semibold text-gray-800 hover:text-gray-900 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button for larger screens */}
      <div className="hidden lg:block">
        {/* <button
          type="button"
          className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 transition duration-300"
        >
          Button Text
        </button> */}
      </div>

      {/* Menu icon for smaller screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    <Transition
      show={isMenuOpen}
      enter="transition ease-out duration-300 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-200 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="lg:hidden" ref={ref}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
            {/* <button
              type="button"
              className="mt-3 w-full rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/80 transition duration-300"
            >
              Button Text
            </button> */}
          </div>
        </div>
      )}
    </Transition>
  </header>
  )
}

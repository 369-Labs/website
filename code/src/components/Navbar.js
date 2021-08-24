import React, { useState } from 'react'
import { IoIosMenu, IoLogoTwitter, IoLogoGithub } from 'react-icons/io'

const Navbar = ({}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className=" top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
    <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between p-4">
        <a
          href="/"
          className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
        >
          <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
            36NINE
          </h1>
        </a>
        <button
          className="cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
         <IoIosMenu/>
        </button>
      </div>
      <div
        className={
          "md:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <nav className="flex-col flex-grow ">
          <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li>
              <a
                href="/"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
                href="/"
              >
                <span className="justify-center">Create Account</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Navbar
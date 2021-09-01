import React, { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {IoIosMenu } from 'react-icons/io'
import { IoDocumentsOutline, IoCodeOutline, IoNewspaperOutline, IoCloseSharp, IoGitBranchOutline } from 'react-icons/io5'
import { RiBuilding2Line } from 'react-icons/ri'
import { BiPyramid } from 'react-icons/bi'
import { FaGithub, FaTwitter, FaReddit} from 'react-icons/fa'


const solutions = [
  {
    name: 'News',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: IoNewspaperOutline
  },
  {
    name: 'Technologies',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: BiPyramid
  },
  {
    name: 'Open Source',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: IoCodeOutline
  },
  {
    name: 'Documentation',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: IoDocumentsOutline
  },
  {
    name: 'Company',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: RiBuilding2Line
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({}) => {
  return (
  <Popover className="relative bg-white dark:bg-black dark:text-gray-100 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1 ">
        <a href="#" className="font-bold text-2xl tracking-tighter dark:text-white">
          36NINE
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 dark:bg-black dark:text-gray-100">
          <span className="sr-only">Open menu</span>
          <IoIosMenu className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden md:flex space-x-10">
        <a href="#" className="text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
          Security
        </a>
        <a href="#" className="text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
          Integrations
        </a>
        <a href="/news" className="text-base font-sm text-black hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
          News
        </a>
        </Popover.Group>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Link href="">
          <a>
            <FaTwitter  />
          </a>
        </Link>
        <Link href="">
          <a className="pl-4">
            <FaGithub  />
          </a>
        </Link>
      </div>
 
    </div>
  </div>

  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >

    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="filter drop-shadow-md rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <a className="h-8 w-auto font-bold text-3xl tracking-tight">
                36NINE
              </a>
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100">
                <span className="sr-only">Close menu</span>
                <IoCloseSharp className="h-6 w-6"/>
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <item.icon className="flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                  <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
</Popover>
  )
}

export default Navbar
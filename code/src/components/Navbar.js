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
    name: 'Projects',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: IoNewspaperOutline
  },
  {
    name: 'Crypto',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: BiPyramid
  },
  {
    name: 'About',
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
  <Popover className="relative bg-white text-black dark:bg-black dark:text-gray-100 ">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1 ">
      <Link href="/">
        <a className=" text-xl font-extrabold  dark:text-white tracking-tighter">
          36NINE
        </a>
        </Link>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 dark:bg-black dark:text-gray-100">
          <span className="sr-only">Open menu</span>
          <IoIosMenu className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden md:flex space-x-10">
        <Link href="/lab">
        <a className="font-light text-sm text-black hover:text-cyan dark:text-gray-300">
          Lab
        </a>
        </Link>
        <Link href="/cryptoWiki">
        <a className="text-sm font-light text-black hover:text-cyan dark:text-gray-300">
          Crypto
        </a>
        </Link>
        <Link href="/about">
        <a className="font-light text-sm text-black hover:text-cyan dark:text-gray-300">
          About
        </a>
        </Link>
        </Popover.Group>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Link href="https://twitter.com/kv1bv">
          <a className="hover:text-blue-400 text-lg">
            <FaTwitter  />
          </a>
        </Link>
        <Link href="https://github.com/369-Labs">
          <a className="pl-6 text-lg hover:text-purple-400">
            <FaGithub/>
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

<Popover.Panel focus className=" top-0 inset-x-0 p-0 absolute transform transition origin-top-right md:hidden">
      <div className=" rounded-lg bg-white dark:bg-black">
        <div className="pt-5 pb-6 px-6">
          <div className="flex items-center justify-between">
            <div>
              <a className="h-8 w-auto font-semibold text-1xl tracking-tighter">
                Welcome
              </a>
            </div>
            <div>
              <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-black dark:text-white">
            
                <IoCloseSharp className="h-7 w-7"/>
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8 ">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-4 p-3 flex items-center rounded-md"
                >
                  <item.icon className="flex-shrink-0 h-5 w-5 dark:text-white" aria-hidden="true" />
                  <span className="ml-3 text-base font-light dark:text-white">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </Popover.Panel>
  </Transition>
</Popover>
  )
}

export default Navbar
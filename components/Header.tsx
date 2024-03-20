import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  IoAlertCircleOutline,
  IoMailOutline,
  IoMenuSharp,
  IoRibbonOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoLogoLinkedin,
  IoCode,
  IoPersonCircleOutline,
} from 'react-icons/io5';
import DarkToggle from './DarkToggle';

export default function Header() {
  const router = useRouter();
  const [subHeader, setSubHeader] = useState(0);

  const resizeSubHeader = () => {
    if (window.scrollY >= 60) {
      setSubHeader(0);
    } else {
      setSubHeader(1);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', resizeSubHeader);
  }

  return (
    <>
      {/* Mobile Nav Starts */}
      <div
        className="block sticky top-0 lg:hidden h-auto bg-gray-900 dark:bg-black"
        id="header"
      >
        <div className="flex justify-between px-4  py-2 text-white dark:text-white">
          <Menu as="div" className="relative inline-block text-left pt-1">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="focus:outline-none">
                    <IoMenuSharp className="text-3xl" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute left-2 w-60 origin-top-right bg-white dark:bg-black dark:shadow-xl rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <a
                          href="/"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoAlertCircleOutline className="w-5 h-5 mr-2" />
                          Présentation
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/education-skills"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoSchoolOutline className="w-5 h-5 mr-2" />
                          Formations
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/experience"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoBriefcaseOutline className="w-5 h-5 mr-2" />
                          Experiences
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/awards-certification"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoRibbonOutline className="w-5 h-5 mr-2" />
                          Certifications
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                          Mon PortoFolio
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoCode className="text-2xl" />
              <h3 className="text-lg font-bold">Flavienne</h3>
            </div>
          </Link>
          <div className="pt-2">
            <DarkToggle classE="text-white" />
          </div>
        </div>
      </div>
      {/* Mobile Nav Ends */}

      {/* Large Screen Nav Starts */}
      <div
        className="hidden lg:block h-auto bg-gray-900 dark:bg-black"
        id="header"
      >
        <div className="flex flex-row justify-between px-8 py-4 text-white dark:text-white">
          <div>
            <p>Mon PortFolio</p>
          </div>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoPersonCircleOutline className="text-2xl" />
              <h3 className="text-lg font-bold">
                MBAH BOMBA FLAVIENNE CEDRIQUA
              </h3>
            </div>
          </Link>

          <div className="pt-1">
            <div className="text-white text-xl flex gap-5 dark:text-white">
              <Link href="https://www.linkedin.com/in/mbah-flavienne-293a3324b/">
                <IoLogoLinkedin className="hover:text-blue-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Subheader Starts */}
      <div
        className="hidden lg:block sticky top-0 bg-white h-auto border-b dark:bg-gray-800 dark:border-black"
        id="sub-header"
      >
        <div
          className={
            subHeader
              ? 'pt-8 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75'
              : 'pt-2 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75'
          }
        >
          <Link href="/">
            <div
              className={
                router.pathname == '/'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoAlertCircleOutline />
              <h1 className="ml-2">Présentation</h1>
            </div>
          </Link>
          <Link href="/education-skills">
            <div
              className={
                router.pathname == '/education-skills'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoSchoolOutline />
              <h1 className="ml-2">Formations</h1>
            </div>
          </Link>
          <Link href="/experience">
            <div
              className={
                router.pathname == '/experience'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoBriefcaseOutline />
              <h1 className="ml-2">Experiences </h1>
            </div>
          </Link>
          <Link href="/awards-certification">
            <div
              className={
                router.pathname == '/awards-certification'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoRibbonOutline />
              <h1 className="ml-2">Certifications</h1>
            </div>
          </Link>
          <div className="p-2 ">
            <DarkToggle />
          </div>
        </div>
      </div>
      {/* Large Screen Nav Ends */}
    </>
  );
}

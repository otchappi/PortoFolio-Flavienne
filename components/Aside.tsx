import React from 'react';
import {
  IoLogoLinkedin,
  IoMailOutline,
  IoLocationOutline,
  IoPhonePortraitOutline,
  IoArrowDown,
} from 'react-icons/io5';
import Pills from '@/components/Pills';
import Link from 'next/link';

export default function Aside() {
  return (
    <>
      <aside className="bg-gray-50 lg:bg-white pb-4 lg:pb-0 top-0 w-full px-8 sm:px-12 md:px-16 lg:px-0 lg:w-3/12 h-full dark:bg-gray-800 dark:lg:bg-gray-900">
        <img
          src="/assets/img/user.png"
          alt=""
          className="h-48 md:h-56 lg:h-60 my-4 rounded-full"
        />
        <h1 className="text-2xl font-bold">FLAVIENNE MBAH</h1>
        <p className="py-2">
          Recherche d’une alternance Juriste en droit des affaires dès Septembre
          2024
        </p>

        <div className="my-2">
          <a
            href="assets/resume/FLAVIENNE-MBAH.pdf"
            download
            className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
          >
            <IoArrowDown />
            Télécharger mon CV
          </a>
        </div>

        <div className="my-2">
          <h3 className="text-lg font-semibold pt-1">Coordonnées</h3>
          <div className="mt-2 mb-4 text-lg flex flex-col gap-2">
            <div className="flex gap-x-2 items-center">
              <IoLocationOutline className="flex-none text-gray-500" /> Belfort,
              90000
            </div>
            <Link href="mailto:flaviennebomba@gmail.com">
              <div className="flex gap-x-2 items-center">
                <IoMailOutline className="flex-none text-gray-500" />{' '}
                flaviennebomba@gmail.com
              </div>
            </Link>
            <Link href="tel:+33766795140">
              <div className="flex gap-x-2 items-center">
                <IoPhonePortraitOutline className="flex-none text-gray-500" />{' '}
                +33 7 66 79 51 40
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden my-2">
          <h3 className="text-lg font-semibold pt-1">Social</h3>
          <div className="mt-2 mb-4 text-xl flex gap-2">
            <Link href="https://www.linkedin.com/in/mbah-flavienne-293a3324b/">
              <IoLogoLinkedin />
            </Link>
          </div>
        </div>

        <div className="my-2 mb-8">
          <h3 className="text-lg font-semibold pt-1">Atouts</h3>
          <div className="mt-2 flex flex-wrap gap-3">
            <Pills text="Dynamique" cname="bg-red-100 py-1" />
            <Pills text="Qualité redactionnelle" cname="bg-blue-100 py-1" />
            <Pills text="Capacité de synthèse" cname="bg-purple-100 py-1" />
            <Pills
              text="Analyse Jurisprudentielle"
              cname="bg-yellow-100 py-1"
            />
            <Pills
              text="Maitrise du pack office :
            Word, Excel Powerpoint"
              cname="bg-green-100 py-1"
            />
          </div>
        </div>
      </aside>
    </>
  );
}

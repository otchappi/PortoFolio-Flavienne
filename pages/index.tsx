import Head from 'next/head';
import {
  IoBagOutline,
  IoBusinessOutline,
  IoHeadset,
  IoGrid,
  IoEarth,
  IoLibrary,
  IoColorPalette,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    bb: {
      title: 'Bénévolat',
      desc: 'Bénévolat association Alsace-Cameroun : Venir en aide aux orphelins et personnes en précarité du Cameroun. Bénévolat groupe Design invité du jour Instagram',
    },
    pbs: {
      title: 'Peinture art moderne',
      desc: 'Autodidacte',
    },
    tvl: {
      title: 'Piano',
      desc: 'Débutante et autodidacte !',
    },
    pgpy: {
      title: 'Lecture',
      desc: 'Roman, poésie ou conte me passionne !',
    },
  };
  const WDData = {
    wd: {
      title: 'Entreprise commerciale',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    flc: {
      title: 'Entreprise industrielle',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
  };
  return (
    <>
      <Head>
        <title>PortFolio :: Flavienne</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">
          Spécialité : Droit des affaires
        </h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoBusinessOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoBagOutline className="text-green-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Centres d'intérêts</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.bb.title} desc={hobbyData.bb.desc}>
            <IoEarth className="text-red-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoColorPalette className="text-yellow-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoGrid className="text-purple-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pgpy.title} desc={hobbyData.pgpy.desc}>
            <IoLibrary className="text-pink-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}

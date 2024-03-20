import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Head from 'next/head';

export default function education() {
  const eduData = [
    {
      degree: 'MASTER I DROIT DE L’ENTREPRISE',
      major: 'Droit des affaires',
      institute: 'Université de Franche-Comté',
      year: '2023 – Actuellement',
      grade:
        'Droit Fiscal; Financement de l’Entreprise; Économie de l’Entreprise; Droit des Entreprises en Difficulté',
    },
    {
      degree: 'LICENCE DE DROIT',
      major: 'Droit général',
      institute: 'Université de Bourgogne',
      year: '2020 – 2023',
      grade:
        'Droit des sociétés; Régime des obligations; droit des contrats spéciaux;',
    },
    {
      degree: 'BACCALAURÉAT',
      major: 'Spécialité A4 ALLEMAND',
      institute: 'Institut Père Monti',
      year: '2018 – 2019',
      grade: 'MENTION BIEN',
    },
  ];

  return (
    <>
      <Head>
        <title>Formations</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Formations</h3>
        <div className="flex flex-col gap-4">
          {
            eduData.map(e =>(
              <EducationCard
                degree={e.degree}
                major={e.major}
                institute={e.institute}
                year={e.year}
                grade={e.grade}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
}

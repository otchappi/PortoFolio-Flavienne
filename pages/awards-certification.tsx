import React from 'react';
import Layout from '@/components/Layout';
import AwardCard from '@/components/AwardCard';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

export default function awardsAndCertification() {
  const awardData = [
    {
      title: 'PSC1 : Formation secourisme',
      date: '2023',
      place: 'Dijon',
    },
    {
      title: 'PIX : 160 points',
      date: '2022',
      place: 'Dijon',
    },
  ];
  const certData = [
    {
      title: 'Français',
      platform: 'Langue maternelle',
    },
    {
      title: 'Anglais',
      platform: 'Niveau B2',
    },
  ];
  return (
    <>
      <Head>
        <title>Certifications et langues</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Certifications</h3>
        <div className="flex flex-col">
          {awardData.map((a) => (
            <AwardCard title={a.title} date={a.date} place={a.place} />
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-3">Langues</h3>
        <div className="flex flex-col">
          {certData.map((c) => (
            <CertificationCard
              title={c.title}
              platform={c.platform}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

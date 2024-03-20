import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const internData = [
    {
      title: 'Assistante Juridique',
      date: 'Février 2022',
      place: 'SASU CHILD OF SUN ( Paris)',
      desc: 'Missions : Rédiger et vérifier les clauses des contrats; Faire de la recherche juridique et de la veille juridique',
      link: 'https://www.societe.com/societe/child-of-the-sun-847815677.html',
      linkText: 'SASU CHILD OF SUN',
    },
  ];
  const mentData = [
    {
      org: 'Monitrice de Bibliothèque Universitaire',
      date: 'Septembre 2023 - Actuellement',
      desig: 'Bibliothéque universitaire Lucien Febvre (Belfort)',
      desc: 'Missions : Accueillir Les usagers de la bibliothèque; Couvrir et ranger les livres; Gérer les prêts et les retours des livres',
      link: 'https://bu.univ-fcomte.fr/bibliotheques/bu-belfort/',
      linkText: 'Bibliothéque universitaire Lucien Febvre',
    },
    {
      org: 'Service civique',
      date: 'Octobre 2022 - Mars 2023',
      desig: 'Banque alimentaire de Bourgogne (Dijon)',
      desc: "Missions : Rédiger ,envoyer les courriers et classer les documents; Préparer les commandes des associations bénéficières; Organiser et participer aux collectes d'aliments dans diverses villes",
      link: 'https://www.banquealimentaire.org/?mtm_campaign=MARQUE&mtm_source=google&mtm_medium=cpc&gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQNhfvPSzbKGOpHBfXWxYR3RVIOZb19NUP9AP-SSpVFVXZrWCziYCohoCZOQQAvD_BwE',
      linkText: 'Banque alimentaire de Bourgogne',
    },
    {
      org: 'Agent de production',
      date: 'Août 2022',
      desig: 'Société Shaeffler ( Usine,Haguenau )',
      desc: "Missions : Fabriquer des pièces automobiles et emballer; Vérifier l'état des pièces et répondre aux revendications des clients",
      link: 'https://www.schaeffler.fr/fr/',
      linkText: 'Société Shaeffler',
    },
  ];
  const volData = [
    {
      title: 'Association Alsace-Cameroun',
      desig: 'Venir en aide aux orphelins et personnes en précarité du Cameroun',
      year: 'Actuellement',
      place: 'Cameroun',
    },
    {
      title: 'Bénévolat groupe Design invité du jour Instagram',
      desig: 'Organiser les rencontres',
      year: '2023',
      place: 'En ligne, Instagram',
    },
  ];

  return (
    <>
      <Head>
        <title>Expereience :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Stages</h3>
        {internData.map((i) => (
          <InternshipCard
            title={i.title}
            date={i.date}
            place={i.place}
            desc={i.desc}
            link={i.link}
            linkText={i.linkText}
          />
        ))}

        <h3 className="text-lg font-semibold mt-3">Jobs</h3>
        {mentData.map(m => (
          <MentorshipCard
            org={m.org}
            date={m.date}
            desig={m.desig}
            desc={m.desc}
            link={m.link}
            linkText={m.linkText}
          />
        ))}
        <h3 className="text-lg font-semibold mt-3">Bénévolats</h3>
        {
          volData.map(v => (
            <VolunteerCard
          title={v.title}
          desig={v.desig}
          year={v.year}
          place={v.place}
        />
          ))
        }
      </Layout>
    </>
  );
}

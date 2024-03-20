import React from 'react';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">A propos de moi</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p style={{textIndent: '50px', textAlign: 'justify'}}>
          Actuellement en Master 1 droit de l’Entreprise industrielle et
          commerciale à l’université de Franche-Comté, motivée et déterminée je
          suis en quête d‘une alternance d‘une durée d‘un an dans le cadre de
          mon année de Master 2. Je suis passionnée par l'idée de rejoindre une
          entreprise où je pourrai exploiter et renforcer mes compétences tout
          en apportant une valeur ajoutée à l'équipe.
        </p>
      </div>
    </>
  );
}

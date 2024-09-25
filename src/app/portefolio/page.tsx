import React, { Suspense } from "react";
import WhoIAm from "../_components/WhoIAm";
import Techno from "../_components/Techno";
import AccordionDemo from "../_components/AccordionDemo";
import { GET } from "../api/Projet/route";


export const revalidate = 60;

export default async function Portfolio() {
  const response = await GET();

  // Parser la réponse JSON pour obtenir les projets
  const data = await response.json();  // Le NextResponse est converti en JSON ici
  console.log('Données récupérées', data);
  return (
    <>
      <WhoIAm />
      <Techno data={data} />
      <AccordionDemo />
    </>
  );
}

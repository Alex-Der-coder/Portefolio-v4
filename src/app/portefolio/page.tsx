import React, { Suspense } from "react";
import WhoIAm from "../_components/WhoIAm";
import Techno from "../_components/Techno";
import AccordionDemo from "../_components/AccordionDemo";



// Fetching data in a server component
async function fetchData() {
  try {
    const res = await fetch('http://localhost:3000/api/Projet');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
}

interface Resource {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: any;
  etag: string;
  created_by: any;
  uploaded_by: any;
}

// Définition de l'interface pour l'objet principal
interface Results {
  total_count: number;
  time: number;
  resources: Resource[];
}

export default async function Portefolio() {
  const data = await fetchData();
  

  return (
    <>
      <WhoIAm />
      <Techno data={data} />
      <AccordionDemo />
    </>
  );
}

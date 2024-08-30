import React, { Suspense } from "react";
import WhoIAm from "../_components/WhoIAm";
import Techno from "../_components/Techno";
import AccordionDemo from "../_components/AccordionDemo";
import cloudinary from '../../lib/cloudinary';
import ImageProps  from "../../lib/serveur"; 

// Fetching data in a server component
async function fetchData() {
  try {
    const res = await fetch('https://portefoliov3-beta.vercel.app/api/projet', { cache: 'no-store' });
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



 async function getData() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  
console.log(results);
const secureUrls = results.resources.map((resource: Resource) => resource.secure_url);
console.log(secureUrls);


}

getData()



  
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

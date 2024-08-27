
import React from "react";
import MainPhotoview from "../_components/MainPhotoview";
import getData from "../../lib/serveur"

export default async function Photoview() {


  const data = await getData();



  return (
      <MainPhotoview  images={data}/>
  );
}

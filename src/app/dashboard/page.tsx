
import React from "react"
import { Separator } from "../_components/ui/separator"
import Link from "next/link"
import { Button } from "../_components/ui/moving-border";


export default function Home() {

  return (

    <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="mt-[39%]">
      <div className="space-y-1">

      </div>
      <Separator className="my-4 top-[-24%] relative " />
      <div className="top-[-24%] relative flex min-[970px]:h-5 items-center space-x-4 text-sm max-[970px]:flex-col">
        <Button><Link
            href="/dashboard/ProjetCreate"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >Create Portefolio Projet </Link></Button>
        <Separator orientation="vertical" />
        <Button><Link
            href="/dashboard/ProjetUpdate"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank">Update Portefolio Projet</Link></Button>
        <Separator orientation="vertical" />
        <Button><Link
            href="/dashboard/ProjetDelete"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >Delete Portefolio Projet </Link></Button>
      </div>
    </div>
  </div>
  );
}

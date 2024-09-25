"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import  { useState , useEffect } from "react";
import Bridge from "../_components/Icons/Bridge";
import Logo from "../_components/Icons/Logo";
import Modal from "../_components/Modal";
import Image from 'next/image';



interface MainProps {
  images: any[]; 
}

const Main: NextPage<MainProps> = ({ images }) => {

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

 
  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % images.length);
    }
  };

  const showPrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (event.key) {
          case "ArrowRight":
            showNextImage();
            break;
          case "ArrowLeft":
            showPrevImage();
            break;
          case "Escape":
            closeModal();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);


  return (
    <>
      <Head>
        <title>Next.js Photoview 2024 Photos</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">

        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest text-foreground">
              2022 Event Photos
            </h1>
            <p className="max-w-[40ch] text-foreground sm:max-w-[32ch]">
              Our incredible Wedding with my wife !
            </p>
          </div>
          {images.map((url, index) => (
              <Image
              onClick={() => openModal(index)}
              key={index}
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 pb-5 cursor-zoom-in"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
          ))}
          {selectedImage !== null && (
            <Modal onClose={closeModal}>
              <div className="relative bg-black">
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                  onClick={showPrevImage}
                >
                  &#9664;
                </button>
                <Image
                  alt="Selected photo"
                  className="rounded-lg max-h-[480px] object-scale-down"
                  src={images[selectedImage]}
                  width={720}
                  height={480}
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                  onClick={showNextImage}
                >
                  &#9654;
                </button>
                <button className="absolute top-2 right-2 bg-transparent text-white text-xl font-bold w-6 h-6"  onClick={closeModal} >
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
          </button>
              </div>
              <div className="pt-8 flex justify-center gap-2 bg-black">
                  {images.map((url, index) => (
                    <Image
                      key={index}
                      alt="Thumbnail image"
                      onClick={() => setSelectedImage(index)}
                      className={`object-cover cursor-pointer rounded-lg  ${
                        selectedImage === index ? "ring-2 ring-blue-500" : ""
                      }`}
                      src={url}
                      width={75}
                      height={45}
                    />
                  ))}
                </div>
            </Modal>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;

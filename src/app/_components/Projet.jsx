import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import QRCode from 'qrcode.react';


const Project = ({ proj  }) => {
  console.log(proj);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div  className="shadow-[-4px_1px_12px_10px_rgba(0,0,0,0.35)] flex flex-col justify-between max-[970px]:my-[12%] mx-[40px] border-solid border-2 border-white rounded-[10px] max-w-[23rem] w-[28%] h-[23rem] duration-300 hover:scale-[1.1] max-[970px]:w-[80%] max-[640px]:mx-[10px] max-[640px]:h-[25rem] " key={proj && proj.id}>
      <div  style={isFlipped ? { transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' , transition: 'transform .6s'  } : { transformStyle: 'preserve-3d', transition: 'transform .6s'  }} >
        <div className="rotate-0 absolute w-[100%] h-[100%]" style={{WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
            {proj && (
        <h2 data-testid="Titleprojet" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] via-50% to-[#fcb045] items-center rounded-t-lg p-[4px] flex justify-around font-bold text-xl text-center text-foreground">
           {proj.name}
            <FontAwesomeIcon  onClick={toggleQRCode} icon={faQrcode} className="fa-fade" />
          </h2>
          )}
            {proj && (
          <a href={proj.link} >
            <div className="flex m-[10px] justify-center">
              {showQRCode ? (
                <QRCode size={250} value={proj.link} />
              ) : (
                <Image
                  src={`${proj.cover}`}
                  alt={`${proj.name} - ${proj.description}`}
                  width={500} height={500}
                  className="w-[85%] h-[215px] "
                />
              )}
            </div>
          </a>
            )}
             {proj && (
          <p className="p-[2px] text-[13px] text-center h-[50px] max-[640px]:text-[12px] max-[640px]:mt-[10px] max-[640px]:mb-[10px] ">{proj.description}</p>
          )}
          
          <div className="justify-center pt-[15px] mt-[-5%] gap-[15px]   " style={{ display: showQRCode  ? 'none' : 'flex' }}>
          {proj && proj.techno && proj.techno.map((tech, index) => (
            <Image
              key={index}
              src={tech}
              width={25} height={10}
              className="w-[25px] mx-[4px] max-[640px]:hidden "
              alt={`Technologie used in this project: ${tech
                .split('/')
                .pop()
                .split('.')[0]}`}
            />
          ))}
           <button data-testid="readmore" className="flex items-center text-white text-[0.875rem] leading-7 font-medium gap-1 bg-[#0e5d4d] py-[4px] px-[8px] rounded-[4px] h-[31.1833px] transition  border-none  hover:bg-[#fff] hover:text-[#148672] " onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        </div>
        {proj && (
        <div className="absolute flex flex-col justify-between w-[100%] text-center h-[355px] max-[640px]:text-center  " style={{transform: 'rotateY(180deg)' , WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
          <h2 >Contexte :</h2>
          <p>{proj.contexte}</p>
          <h2 className='hidden' >ID:{proj.id}</h2>
          <p>Voir le repos Git <a href={proj.repos} aria-label="Lien du projet présenter"><FontAwesomeIcon icon={faCodeFork} fade style={{color: "#1e3050",}} /></a></p>
          <button className="flex items-center text-white text-[0.875rem] leading-7 font-medium gap-1 bg-[#0e5d4d] py-[4px] px-[8px] rounded-[4px] h-[31.1833px] transition  border-none hover:bg-[#fff] hover:text-[#148672] w-[33%] self-center max-[640px]:w-[45%] max-[640px]:ml-[26%]" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        )}
        </div>
    </div>
    
  );
};

export default Project;
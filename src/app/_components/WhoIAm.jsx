import React from 'react';
import CardAboutMee from './CardAboutMee';

const WhoIAm = () => {

  return (
    <section className="h-[28rem] pt-[7rem] max-[640px]:grid   max-[640px]:justify-center  max-[640px]:h-auto  max-[640px]:w-[90%] min-[640px]:hidden min-[970px]:block" id="whoIAmSection">
      <div className="flex flex-row justify-around max-[640px]:flex-col   max-[640px]:h-[150%]  max-[640px]:items-center ">
      <CardAboutMee />
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: {}, // Return an empty object since there's no dynamic data
    revalidate: 3600 // Add revalidation time if needed
  };
};

export default WhoIAm;

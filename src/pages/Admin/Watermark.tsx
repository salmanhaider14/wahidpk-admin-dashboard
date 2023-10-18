import React from 'react';
import { GoFileMedia } from 'react-icons/go';

const Watermark = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Add Water Mark Picture or Logo
      </h1>{' '}
      <div className="flex flex-col justify-center">
        <div className="md:w-[70%] w-full m-auto h-[300px] bg-white shadow-md border flex p-3 justify-center items-center mt-10">
          <GoFileMedia className="text-8xl" />
        </div>
        <p className=" text-neutral-400 text-xl my-4 font-semibold font-['Poppins'] text-center ">
          eg, Watermark logo or image on all pictures or videos uploaded
        </p>
        <button className="bg-[#00FFE0] m-auto w-[200px] text-black h-[50px] shadow-md text-lg font-bold">
          Upload
        </button>
      </div>
    </>
  );
};

export default Watermark;

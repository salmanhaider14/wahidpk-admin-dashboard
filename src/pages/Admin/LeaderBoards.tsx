import React from 'react';
import { GoFileMedia } from 'react-icons/go';

const LeaderBoards = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Add New Leader Boards
      </h1>{' '}
      <div className="grid md:grid-cols-2 justify-center items-center mt-10 gap-12">
        <div className="flex flex-col gap-2 justify-center ">
          <input
            type="text"
            placeholder="Selecte Page"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-center text-neutral-400 text-[30.26px] font-semibold font-['Poppins'] leading-[87.39px]">
            OR
          </p>
          <input
            type="text"
            placeholder="Page URL"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <div className="w-full h-[80px] bg-white shadow-md border flex p-3 items-center">
            <GoFileMedia className="text-4xl" />
          </div>
          <p className=" text-neutral-400 text-xl font-semibold font-['Poppins'] ">
            eg, Leader Board is like image on top on the header
          </p>
          <button className="bg-[#00FFE0] m-auto w-[200px] text-black h-[50px] shadow-md text-lg font-bold">
            Upload
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <input
            type="text"
            placeholder="Selecte Page"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-center text-neutral-400 text-[30.26px] font-semibold font-['Poppins'] leading-[87.39px]">
            OR
          </p>
          <input
            type="text"
            placeholder="Page URL"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <div className="w-full h-[80px] bg-white shadow-md border flex p-3 items-center">
            <GoFileMedia className="text-4xl" />
          </div>
          <p className=" text-neutral-400 text-xl font-semibold font-['Poppins'] ">
            eg, Leader Board is like image on top on the header
          </p>
          <button className="bg-[#00FFE0] m-auto w-[200px] text-black h-[50px] shadow-md text-lg font-bold">
            Upload
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <input
            type="text"
            placeholder="Selecte Page"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-center text-neutral-400 text-[30.26px] font-semibold font-['Poppins'] leading-[87.39px]">
            OR
          </p>
          <input
            type="text"
            placeholder="Page URL"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <div className="w-full h-[80px] bg-white shadow-md border flex p-3 items-center">
            <GoFileMedia className="text-4xl" />
          </div>
          <p className=" text-neutral-400 text-xl font-semibold font-['Poppins'] ">
            eg, Leader Board is like image on top on the header
          </p>
          <button className="bg-[#00FFE0] m-auto w-[200px] text-black h-[50px] shadow-md text-lg font-bold">
            Upload
          </button>
          <button className="bg-[#FFBA0A] m-auto w-[230px] text-black h-[50px] shadow-md text-lg font-bold">
            Add More Pages
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center ">
          <input
            type="text"
            placeholder="Selecte Page"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-center text-neutral-400 text-[30.26px] font-semibold font-['Poppins'] leading-[87.39px]">
            OR
          </p>
          <input
            type="text"
            placeholder="Page URL"
            className="w-full rounded-lg bg-white shadow-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <div className="w-full h-[80px] bg-white shadow-md border flex p-3 items-center">
            <GoFileMedia className="text-4xl" />
          </div>
          <p className=" text-neutral-400 text-xl font-semibold font-['Poppins'] ">
            eg, Leader Board is like image on top on the header
          </p>
          <button className="bg-[#00FFE0] m-auto w-[200px] text-black h-[50px] shadow-md text-lg font-bold">
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaderBoards;

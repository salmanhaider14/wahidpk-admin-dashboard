import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Package = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        My Packages
      </h1>
      <form className="md:w-[60%]">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-main hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-center items-start gap-6 min-h-[970px]  flex-wrap mt-14">
        <div className="w-[350px] h-[668px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
              <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                Silver
              </div>
              <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                Automatically reach potential customers
              </div>
            </div>
            <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[183px] h-[66px] relative">
                <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] leading-[51.08px]">
                  Rs.19
                  <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                    / mo
                  </span>
                </h1>
              </div>
              <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                Per month, per company, charged annually{' '}
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-zinc-100" />
          <div className="self-stretch h-[265px] flex-col justify-start items-start gap-[15px] flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Listing free
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Quick access to customers
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="green" /> Auto refresh ads
              </div>
            </div>
          </div>
          <div className="self-stretch h-[54px] px-[18px] py-4 text-black bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
              Get started
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[750px] p-[30px]  bg-[#25C55B] text-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
              <div className="text-white text-3xl font-bold font-['Poppins']">
                Platinum
              </div>
              <div className="self-stretch text-white text-sm font-semibold font-['Poppins'] leading-[21px]">
                Automatically reach potential customers
              </div>
            </div>
            <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
              <div className=" relative">
                <h1 className="text-white text-[42.57px] font-bold font-['Poppins'] ">
                  Rs.120
                  <span className="text-white text-[28.38px] font-bold font-['Poppins']">
                    / mo
                  </span>
                </h1>
              </div>
              <div className="w-[299px] text-white text-sm font-normal font-['Poppins'] leading-[21px]">
                Per month, per company, charged annually{' '}
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-zinc-100" />
          <div className="self-stretch h-[370px] flex-col justify-start items-start gap-[15px] flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> VIP listing
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Support 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Quick access to customers
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="w-5 h-5 relative" />
              <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                <FaCheckCircle color="white" /> Auto refresh ads
              </div>
            </div>
          </div>
          <div className="self-stretch h-[54px] px-[18px] text-black py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;

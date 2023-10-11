const BBG = () => {
  return (
    <>
      {' '}
      <h1 className="text-zinc-600 text-4xl text-black font-semibold font-['Poppins'] leading-[100.55px]">
        Beds & Bathroom Control
      </h1>
      <div className="flex flex-col gap-5 text-[#8E8E93]">
        <div className="flex flex-col gap-4 md:w-[60%]">
          {' '}
          <h1 className=" text-neutral-400 md:text-2xl text-xl font-semibold font-['Poppins'] leading-[111.43px]">
            Add Number Of Baths
          </h1>
          <input
            type="text"
            placeholder="Enter Number"
            className="md:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
            Number of baths in vertical foam eg 1 2 3 - - - 10+
          </p>
          <button className="bg-[#FFBA0A] hover:bg-yellow-400 w-[130px] h-[45px] text-lg  font-bold text-white">
            Save
          </button>
        </div>
        <div className="flex flex-col gap-4 md:w-[60%]">
          {' '}
          <h1 className=" text-neutral-400 md:text-2xl text-xl font-semibold font-['Poppins'] leading-[111.43px]">
            Add Number Of Bedrooms
          </h1>
          <input
            type="text"
            placeholder="Enter Number"
            className="md:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
            Number of bedrooms in vertical foam eg 1 2 3 - - - 10+
          </p>
          <button className="bg-[#FFBA0A] hover:bg-yellow-400 w-[130px] h-[45px] text-lg  font-bold text-white">
            Save
          </button>
        </div>
        <div className="flex flex-col gap-4 md:w-[60%]">
          {' '}
          <h1 className=" text-neutral-400 md:text-2xl text-xl font-semibold font-['Poppins'] leading-[111.43px]">
            Add Number Of Garages
          </h1>
          <input
            type="text"
            placeholder="Enter Number"
            className="md:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
            Number of garages in vertical foam eg 1 2 3 - - - 10+
          </p>
          <button className="bg-[#FFBA0A] hover:bg-yellow-400 w-[130px] h-[45px] text-lg  font-bold text-white">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default BBG;

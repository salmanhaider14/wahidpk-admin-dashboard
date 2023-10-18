import React from 'react';

const AddNewAgencPackage = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Add New Agency Package
      </h1>{' '}
      <div className="flex flex-col gap-3">
        <h1 className=" text-neutral-400 text-3xl font-semibold font-['Poppins'] leading-[111.43px]">
          Add New Agency Package
        </h1>
        <input
          required
          type="text"
          placeholder="Package Name"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Description"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Price"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Price Description"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Label"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Select Background Colour"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />

        <input
          required
          type="text"
          placeholder="Features"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <div className="flex gap-4 items-center">
          <button className="bg-main w-[200px] shadow text-white font-bold text-lg h-[50px]">
            Get Started
          </button>
          <button className="bg-[#A2A2A2] w-[200px] shadow text-black font-bold text-lg h-[50px]">
            Button Link
          </button>
        </div>
        <button className="bg-main w-[200px] shadow text-white font-bold text-lg h-[50px]">
          Save
        </button>
      </div>
    </>
  );
};

export default AddNewAgencPackage;

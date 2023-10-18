import React from 'react';

const NewUser = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Add New User
      </h1>{' '}
      <div className="flex flex-col gap-3">
        <h1 className=" text-neutral-400 text-3xl font-semibold font-['Poppins'] leading-[111.43px]">
          Add New User
        </h1>
        <input
          required
          type="text"
          placeholder="Username"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Email"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Full Name"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Phone"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          required
          type="text"
          placeholder="Password"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <p className=" text-zinc-600 text-[20.60px] font-semibold font-['Poppins'] leading-[48.89px]">
          Send User Notification
        </p>
        <p className=" text-zinc-600 text-[20.60px] font-semibold font-['Poppins'] leading-[48.89px]">
          Send the new user an email about their account.
        </p>
        <input
          required
          type="text"
          placeholder="Role"
          className="md:w-[50%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" text-[#585858] text-[25.49px] font-bold font-['Poppins'] leading-[98.24px]">
          Profile Photo
        </h1>
        <div className="w-[250.62px] m-auto h-[250px]  bg-[#DBDBDB] rounded-[33.02px] justify-center items-center inline-flex"></div>
        <button className="bg-yellow-400 m-auto my-2 w-[200px]  text-black h-[50px] shadow-md text-lg font-bold">
          Upload
        </button>
        <button className="bg-main w-[200px] shadow text-white font-bold text-lg h-[50px]">
          Add New User
        </button>
      </div>
    </>
  );
};

export default NewUser;

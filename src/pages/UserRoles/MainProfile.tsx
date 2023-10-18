import React from 'react';

const MainProfile = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        My Profile
      </h1>{' '}
      <div className="flex flex-col gap-2">
        {' '}
        <div className="w-[250.62px]  h-[250px]  bg-[#DBDBDB] rounded-[33.02px] justify-center items-center inline-flex"></div>
        <button className="bg-yellow-400  my-2 w-[200px]  text-black h-[50px] shadow-md text-lg font-bold">
          Upload
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Username
          </h1>

          <input
            type="text"
            placeholder="ahmadasif123"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Email
          </h1>

          <input
            type="text"
            placeholder="ahmadasif123@gmail.com"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Full Name
          </h1>

          <input
            type="text"
            placeholder="Ahmad Asif"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Phone
          </h1>

          <input
            type="text"
            placeholder="Phone"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Password
          </h1>

          <input
            type="text"
            placeholder="Password"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Whatsapp
          </h1>

          <input
            type="text"
            placeholder="Whatsapp"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Website
          </h1>

          <input
            type="text"
            placeholder="Website"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className=" text-green-500 text-[25.83px] font-semibold font-['Poppins'] leading-[88.24px]">
          Social Links:
        </h1>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Facebook
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Instagram
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Youtube
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Twitter
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Email
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Linkedin
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] ">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Add Field
          </h1>

          <input
            type="text"
            placeholder="#"
            className="md:w-[50%] rounded-lg border-[1.5px] shadow-md bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <button className="bg-yellow-400 m-auto  my-2 w-[200px]  text-black h-[50px] shadow-md text-lg font-bold">
          Save
        </button>
      </div>
    </>
  );
};

export default MainProfile;

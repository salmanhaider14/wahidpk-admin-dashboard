import ReactQuill from 'react-quill';
import { useState } from 'react';

const EmailManagement = () => {
  const toolbarOptions = [
    [{ align: [] }], // Add the alignment options to the toolbar
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ];
  const [value, setValue] = useState<string>('');
  return (
    <>
      {' '}
      <h1 className="text-zinc-600 text-4xl text-black font-semibold font-['Poppins'] leading-[100.55px]">
        Email Management
      </h1>
      <div className="flex flex-col gap-5 text-[#8E8E93]">
        <div className="flex flex-col gap-4 md:w-[60%]">
          {' '}
          <h1 className=" text-neutral-400 md:text-2xl text-xl font-semibold font-['Poppins'] leading-[111.43px]">
            Email Management
          </h1>
          <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
            Global variables: %website_url as website url,%website_name as
            website name, %user_email as user_email, %username as username
          </p>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Enable or Disable
            </h1>
          </div>

          <div>
            <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Header Logo
            </h1>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              placeholder="Picture URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <div className="w-[180px]">
              <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <option value="">Upload</option>
                  <option value="">Remove</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Header Background Color
            </h1>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <div className="w-[180px]">
              <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <option value="">Select Color</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#CAFFFF] py-3 px-3 w-full">
          <h1 className=" text-black text-xl font-semibold font-['Poppins'] leading-[52.01px]">
            Email Footer
          </h1>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Enable or Disable
            </h1>
          </div>

          <div>
            <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Footer Background Color
            </h1>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <div className="w-[180px]">
              <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <option value="">Select Color</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Footer Content
            </h1>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <div className="flex flex-col gap-2 w-full ">
              <button className="w-[200px] px-3 py-3 bg-white shadow-md text-black font-bold text-lg">
                Add Media
              </button>
              <div className="bg-white lg:w-[80%]">
                <ReactQuill
                  theme="snow"
                  value={value}
                  modules={{
                    toolbar: {
                      container: toolbarOptions,
                    },
                  }}
                  onChange={setValue}
                />
              </div>
              <button className="bg-main w-[180px] shadow text-white font-bold text-lg h-[50px]">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
          <div className="flex flex-col gap-1  items-start">
            <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
              Social Links
            </h1>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              placeholder="Facebook URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <input
              type="text"
              placeholder="Instagram URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <input
              type="text"
              placeholder="LinkedIn URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <input
              type="text"
              placeholder="Twitter URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <input
              type="text"
              placeholder="Youtube URL"
              className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-main w-[180px] shadow text-white font-bold text-lg h-[50px]">
            Save
          </button>
          <button className="bg-main w-[180px] shadow text-white font-bold text-lg h-[50px]">
            Reset
          </button>
          <button className="bg-main w-[180px] shadow text-white font-bold text-lg h-[50px]">
            Reset All
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailManagement;

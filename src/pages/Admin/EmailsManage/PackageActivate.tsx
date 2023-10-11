import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
const PackageActivate = () => {
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
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        Purchase Activated Packages
      </h1>
      <div className="bg-[#CAFFFF] py-3 px-3 w-full">
        <h1 className=" text-black text-xl font-semibold font-['Poppins'] leading-[52.01px]">
          Purchase Activated Packages
        </h1>
      </div>
      <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
        <div className="flex flex-col gap-1  items-start">
          <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
            Subject
          </h1>
          <p className="text-neutral-400 text-[#8E8E93] text-[14.38px] font-bold font-['Poppins']">
          Email subject for Package Activated
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full ">
          <input
            type="text"
            placeholder="Subject"
            className="lg:w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
        <div className="flex flex-col gap-1  items-start">
          <h1 className="md:w-[250px] text-[#8E8E93] text-[20.16px] font-bold font-['Poppins']">
            Content
          </h1>
          <p className="text-neutral-400 text-[#8E8E93] text-[14.38px] font-bold font-['Poppins']">
          Email content for Package Activated
          </p>
        </div>

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
     
    </>
  );
};

export default PackageActivate;

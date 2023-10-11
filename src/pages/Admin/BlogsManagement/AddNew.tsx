import { useState } from 'react';
import ReactQuill from 'react-quill';

const AddBlog = () => {
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
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Add New Post
      </h1>{' '}
      <input
        type="text"
        placeholder="Blog Title"
        className="lg:w-[60%] shadow-md rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
      <div className="flex flex-col gap-2 w-full mt-10 ">
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
        <div className="flex items-center gap-2">
          {' '}
          <button className="bg-[#FFBB0B] w-[180px] shadow text-white font-bold text-lg h-[50px]">
            Save
          </button>
          <button className="bg-main w-[180px] shadow text-white font-bold text-lg h-[50px]">
            Save & Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBlog;

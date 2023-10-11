import { FaCheckSquare } from 'react-icons/fa';

const AddNewProject = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        Create Project
      </h1>
      <div className="bg-white w-full   shadow-md p-6">
        <h1 className="text-black text-[16.97px] mb-6 font-bold font-['Poppins']">
          Upload Story
        </h1>
        <div className="flex flex-col gap-2 items-center mt-10">
          <img src="/arrowround.png" className="w-[40px]" />
          <button className="bg-main w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
            Upload Story
          </button>
          <div className=" text-center">
            <p className="text-neutral-700 text-base font-normal font-['Poppins'] leading-normal">
              Upload 60 second property story.
              <br />
            </p>
            <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-normal">
              (1 story = 1 story credit)
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-start gap-2 overflow-x-auto mt-10 py-4 ">
            <img src="/storyimg.png" className="w-[250px] h-[200px]" />
            <img src="/storyimg.png" className="w-[250px] h-[200px]" />
            <img src="/storyimg.png" className="w-[250px] h-[200px]" />
            <img src="/storyimg.png" className="w-[250px] h-[200px]" />
            <img src="/storyimg.png" className="w-[250px] h-[200px]" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full   shadow-md p-6 mt-5">
        <h1 className="text-black text-[16.97px] mb-6 font-bold font-['Poppins']">
          Information
        </h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Entery Property Title"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Street Address
            </label>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Type
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                City
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                State/Province
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Starting Price
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Ending Price
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Nearby
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Installements Options Available
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Ready For Posession
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                Built Year
              </label>
              <input
                type="text"
                placeholder="Choose"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full   shadow-md p-6 mt-5">
        <h1 className="text-black text-[16.97px] mb-6 font-bold font-['Poppins']">
          Description
        </h1>
        <div>
          <textarea
            rows={6}
            placeholder="Description"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>
      </div>

      <div className=" text-black bg-white flex-col  flex flex-wrap gap-4 relative shadow my-4 p-2 border">
        <h1 className="text-black text-[16.97px]  font-bold font-['Poppins']">
          Featured
        </h1>
        <hr />
        <div className="w-full grid md:grid-cols-4 grid-cols-2  ms-3 gap-6 ">
          <h1 className="text-zinc-900 md:text-[20.63px] text-[16px] font-semibold font-['Poppins'] leading-[42.95px]">
            Outdoor features
          </h1>
          <h1 className="text-zinc-900 md:text-[20.63px] text-[16px] font-semibold font-['Poppins'] leading-[42.95px]">
            Indoor features
          </h1>
          <h1 className="text-zinc-900 md:text-[20.63px] text-[16px] font-semibold font-['Poppins'] leading-[42.95px]">
            Climate & Energy{' '}
          </h1>
          <h1 className="text-zinc-900 md:text-[20.63px] text-[16px] font-semibold font-['Poppins'] leading-[42.95px]">
            Others
          </h1>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Swimming Pools
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Swimming Pools
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
          <p className="flex items-center gap-2 md:text-lg text-md">
            <FaCheckSquare className="text-main" size={30} /> Ensuite
          </p>
        </div>
      </div>
      <div className="bg-white w-full  min-h-[50vh] shadow-md p-6 mt-5">
        <h1 className="text-black text-[16.97px] mb-6 font-bold font-['Poppins']">
          Contact Information
        </h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Mobile
            </label>
            <input
              type="text"
              placeholder="Mobile"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Land Line
            </label>
            <input
              type="text"
              placeholder="Land Line"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Whatsapp
            </label>
            <input
              type="text"
              placeholder="Whatsapp"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
      </div>
      <button className="bg-main m-auto mt-7 w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
        Upload Story
      </button>
    </>
  );
};

export default AddNewProject;

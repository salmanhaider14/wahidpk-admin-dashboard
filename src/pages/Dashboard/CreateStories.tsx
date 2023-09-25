const CreateStories = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        Create Listing
      </h1>
      <div className="bg-white w-full  min-h-[70vh] shadow-md p-6">
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
        <div className="flex items-center gap-2 flex-wrap mt-12">
          <img src="/storyimg.png" className="w-[250px]" />
          <img src="/storyimg.png" className="w-[250px]" />
          <img src="/storyimg.png" className="w-[250px]" />
          <img src="/storyimg.png" className="w-[250px]" />
          <img src="/storyimg.png" className="w-[250px]" />
        </div>
      </div>
      <div className="bg-white w-full   shadow-md p-6 mt-5">
        <h1 className="text-black text-[16.97px] mb-6 font-bold font-['Poppins']">
          Information
        </h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-3 font-bold block text-black dark:text-white">
              Story Title
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
                Unity Number
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                City
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>{' '}
            <div>
              <label className="mb-3 font-bold block text-black dark:text-white">
                State/Province
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-7">
            <div className="flex items-center gap-4 flex-wrap">
              {' '}
              <div>
                <label className="mb-3 font-bold block text-black dark:text-white">
                  Label
                </label>
                <button className="bg-main w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
                  Rent
                </button>
              </div>
              <div>
                <label className="mb-3 font-bold block text-black dark:text-white">
                  Label
                </label>
                <button className="bg-white w-[200px] border h-56px rounded-lg p-3 flex justify-center items-center font-bold text-black">
                  For Sale
                </button>
              </div>
            </div>

            <div className="grow">
              <label className="mb-3 font-bold block text-main dark:text-white">
                Enter Price
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="grow">
              <label className="mb-3 font-bold block text-black dark:text-white">
                Property URL
              </label>
              <input
                type="text"
                placeholder=" Property URL"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
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

export default CreateStories;

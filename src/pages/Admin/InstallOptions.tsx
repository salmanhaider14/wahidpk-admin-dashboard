const InstallOptions = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Installment Option
      </h1>{' '}
      <h1 className="text-black text-[25.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Enable or Disable Installment Option
      </h1>{' '}
      <div className="flex gap-4 items-center">
        <div>
          <div className="relative z-20 bg-white dark:bg-form-input shadow-md">
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">Enable</option>
              <option value="">Disable</option>
            </select>
          </div>
        </div>
        <button className="bg-[#6272FF] text-white p-3 shadow-md">Apply</button>
      </div>
    </>
  );
};

export default InstallOptions;

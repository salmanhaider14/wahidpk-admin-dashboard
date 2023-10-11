const AddAgency = () => {
  return (
    <>
      <h1 className="text-zinc-600 text-2xl text-black font-semibold font-['Poppins'] leading-[100.55px]">
        Add Agency
      </h1>
      <div className="max-w-[600px] m-auto  flex flex-col items-start gap-6  p-6 bg-white shadow-lg rounded-xl border">
        <div className="flex items-center gap-2">
          {' '}
          <img src="/greencard.png" className="w-10" />
          <h1 className="text-zinc-600 text-[30.70px] font-semibold font-['Poppins'] ">
            Add Agency
          </h1>
        </div>

        <input
          type="text"
          placeholder="Agency Name"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="Phone"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="Agent Package"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <input
            type="text"
            placeholder="Registration Date"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="Agent ID"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <input
            type="text"
            placeholder="Annual Charges in Rs"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <input
          type="text"
          placeholder="Service Areas"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          type="text"
          placeholder="Street Address"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <button className="bg-[#FFBA0A] hover:bg-yellow-400 w-[200px] h-[56px] text-lg m-auto font-bold text-white">
          Add Agency
        </button>
      </div>
    </>
  );
};

export default AddAgency;

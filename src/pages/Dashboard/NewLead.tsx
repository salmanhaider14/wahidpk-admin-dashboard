const NewLead = () => {
  return (
    <>
      <h1 className="text-zinc-600 text-[30.70px] text-center font-semibold font-['Poppins'] leading-[100.55px]">
        Add New Lead popup
      </h1>
      <div className="max-w-[700px] m-auto  flex flex-col items-start gap-6  p-6 bg-white shadow-lg rounded-xl border">
        <div className="flex items-center gap-2">
          {' '}
          <img src="/greencard.png" className="w-10" />
          <h1 className="text-zinc-600 text-[30.70px] font-semibold font-['Poppins'] ">
            Add New Lead
          </h1>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div className="relative z-20 md:w-[300px] w-[100%]  bg-white dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value="">Inquiry Type</option>
            </select>
          </div>
          <div className="relative z-20 md:w-[300px] w-[100%]  bg-white dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value="">Source</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div className="relative z-20 md:w-[300px] w-[100%]  bg-white dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value="">Status</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Budget"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <input
          type="text"
          placeholder="Desired Area"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <input
          type="text"
          placeholder="Household Size"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <textarea
          rows={6}
          placeholder="Notes"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        ></textarea>
      </div>
    </>
  );
};

export default NewLead;

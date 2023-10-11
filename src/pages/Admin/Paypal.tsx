import { Button } from 'flowbite-react';

const Paypal = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] font-bold font-['Poppins']">
        Paypal Settings
      </h1>

      <Button.Group className="mt-8">
        <Button className="bg-main rounded-none">Enable</Button>
        <Button className="bg-[#cacaca] rounded-none">Disable</Button>
      </Button.Group>

      <div className="flex w-full flex-col md:flex-row sm:items-start md:items-center md:gap-[200px] mt-20">
        <h1 className="w-[250px]  text-black text-[20.16px] font-bold font-['Poppins']">
          Client ID
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-neutral-400 text-[18.16px] font-bold font-['Poppins']">
            Enter the PayPal client ID
          </p>
          <input
            type="text"
            className="w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] mt-20">
        <h1 className="w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
          Client Secret Key
        </h1>
        <div className="flex flex-col gap-2 w-full ">
          <p className="text-neutral-400 text-[18.16px] font-bold font-['Poppins']">
            Enter the PayPal client secret key
          </p>
          <input
            type="text"
            className="w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex  w-full flex-col md:flex-row sm:items-start md:items-center  md:gap-[200px] mt-20">
        <h1 className="w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
          Receiving Email
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-neutral-400 text-[18.16px] font-bold font-['Poppins']">
            Enter the PayPal receiving email account
          </p>
          <input
            type="text"
            className="w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
    </>
  );
};

export default Paypal;

import { Button } from 'flowbite-react';
const Stripe = () => {
  return (
    <>
      <h1 className="text-black text-[30.97px] font-bold font-['Poppins']">
        Stripe Settings
      </h1>

      <Button.Group className="mt-8">
        <Button className="bg-main rounded-none">Enable</Button>
        <Button className="bg-[#cacaca] rounded-none">Disable</Button>
      </Button.Group>

      <div className="flex md:w-[80%] w-full flex-col md:flex-row items-center md:gap-[200px] mt-20">
        <div className="flex flex-col gap-1">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Secret Key
          </h1>
          <p className="text-neutral-400 text-[14.38px] font-bold font-['Poppins']">
            Info is taken from
            <br />
            your account at <br />
            https://dashboard.stripe.com/login
          </p>
        </div>

        <div className="flex flex-col gap-2 grow">
          <input
            type="text"
            className="w-full rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-neutral-400 text-[18.16px] font-bold font-['Poppins']">
            Enter the Stripe client secret key
          </p>
        </div>
      </div>
      <div className="flex md:w-[80%] w-full flex-col md:flex-row items-center md:gap-[200px] mt-20">
        <div className="flex flex-col gap-1">
          <h1 className="md:w-[250px] text-black text-[20.16px] font-bold font-['Poppins']">
            Publishable Key
          </h1>
          <p className="text-neutral-400 text-[14.38px] font-bold font-['Poppins']">
            Info is taken from
            <br />
            your account at <br />
            https://dashboard.stripe.com/login
          </p>
        </div>

        <div className="flex flex-col gap-2 grow">
          <input
            type="text"
            className="w-full rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <p className="text-neutral-400 text-[18.16px] font-bold font-['Poppins']">
            Enter the Stripe publishable key
          </p>
        </div>
      </div>
    </>
  );
};

export default Stripe;

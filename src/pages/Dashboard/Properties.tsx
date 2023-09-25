import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Properties = () => {
  const properties = [
    {
      img: '/propertyimg.png',
      title: 'Gorgeous Apartment Building',
      desc: '58 Hullbrook Road, Billesley, B13 0LA',
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
    {
      img: '/propertyimg.png',
      title: 'Gorgeous Apartment Building',
      desc: '58 Hullbrook Road, Billesley, B13 0LA',
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
    {
      img: '/propertyimg.png',
      title: 'Gorgeous Apartment Building',
      desc: '58 Hullbrook Road, Billesley, B13 0LA',
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
    {
      img: '/propertyimg.png',
      title: 'Gorgeous Apartment Building',
      desc: '58 Hullbrook Road, Billesley, B13 0LA',
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        My Properties
      </h1>

      <form className="md:w-[60%]">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-main hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-start items-center gap-6 flex-wrap mt-14">
        {properties.map((property) => (
          <Link to={'/single-property'}>
            <div className="w-[330px] h-[480px] relative cursor-pointer shadow-lg p-2 flex flex-col gap-3 rounded-xl border text-black">
              <img src={property.img} className="w-full h-1/2" />
              <h1 className=" text-zinc-900 text-lg font-semibold font-['Poppins'] pt-3">
                {property.title}
              </h1>

              <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                {property.desc}
              </p>
              <h1 className=" text-[#25C55B] text-lg font-semibold font-['Poppins']">
                ${property.price}
              </h1>
              <div className="flex justify-start items-center gap-3 mt-3">
                <p className="flex justify-center items-center gap-2">
                  <img src="/bed.png" /> Beds:{' '}
                  <span className="font-bold"> {property.beds} </span>
                </p>
                <p className="flex justify-center items-center gap-2">
                  <img src="/bath.png" /> Baths:{' '}
                  <span className="font-bold"> {property.baths} </span>
                </p>
                <p className="flex justify-center items-center gap-2">
                  <img src="/area.png" /> Sqft:{' '}
                  <span className="font-bold"> {property.sqft} </span>
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <FaPlus color="green" /> Compare
                </p>
                <div className="w-10 h-10 bg-zinc-300 rounded-full" />
                <p className="flex items-center gap-2">3 Years Ago</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Properties;

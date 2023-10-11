import PaginationExample from '../../../components/PaginationExample';

const Areas = () => {
  const data = [
    {
      area: 'Lalpur',
      city: 'Lahore',
    },
    {
      area: 'Mall Road',
      city: 'Murree',
    },
    {
      area: 'Tariq Road',
      city: 'Karachi',
    },
  ];
  return (
    <>
      <div className="flex justify-between items-start md:items-center flex-wrap">
        {' '}
        <h1 className="text-zinc-600 md:text-4xl text-2xl text-black font-semibold font-['Poppins'] py-4">
          Area Management
        </h1>
        <input
          type="text"
          placeholder="Search Categories"
          className=" rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 text-[#8E8E93]">
          <h1 className=" text-neutral-400 md:text-3xl text-xl font-semibold font-['Poppins'] leading-normal py-4">
            Add New Area
          </h1>
          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              placeholder="Area Name"
              className="w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
              eg, Mall Road, Lahore
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              placeholder="Select City"
              className="w-[80%] rounded-lg border-[1.5px] bg-white border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <p className="text-neutral-400 w-[70%] text-[15.16px] font-bold font-['Poppins']">
              City where this specific area is located
            </p>
          </div>

          <button className="bg-[#FFBA0A] hover:bg-yellow-400 w-[200px] h-[56px] text-lg  font-bold text-white">
            Add
          </button>
        </div>
        <div className="overflow-x-auto">
          <PaginationExample />
          <div>
            <table className="w-full table-auto mt-4 bg-white ">
              <thead className="rounded-xl">
                <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
                  <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                    <input type="checkbox" className="w-5 h-5" /> Area
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white"></th>
                  <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                    City
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr className="bg-white text-[#8E8E93]] text-left">
                    <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                      <h1 className=" text-[#8E8E93] text-[18.84px] flex items-center gap-4  font-['Poppins']">
                        <input type="checkbox" className="w-5 h-5" /> {d.area}
                      </h1>
                    </td>
                    <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  ">
                      <h1 className=" text-[#8E8E93] text-[18.84px]   font-['Poppins']"></h1>
                    </td>
                    <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  ">
                      <h1 className=" text-[#8E8E93] text-[18.84px]   font-['Poppins']">
                        {d.city}
                      </h1>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationExample />
        </div>
      </div>
    </>
  );
};

export default Areas;

import { FaArrowDown } from 'react-icons/fa';

const AllDevelopers = () => {
  const data = [
    {
      dev_id: '00000001',
      package: 'Agent Lite',
      compName: 'Ali Home Agencies',
      phone: '0300-0000000',
      email: 'ali@alihome.com',
      registration: 'Sep-10-2022',
      city: 'Lahore',
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        All Developers
      </h1>{' '}
      <div className="flex justify-between  items-center flex-wrap gap-3 mt-6">
        <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            <option value="">Developer Type</option>
          </select>
        </div>

        <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            <option value="">Developer ID</option>
          </select>
        </div>
        <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            <option value="">Developer Name</option>
          </select>
        </div>

        <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            <option value="">09/D/2023</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Developer ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                Package
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold  dark:text-white">
                Company Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Phone
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Registration
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Developer City
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="bg-white text-black text-left">
                <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                  <h1 className=" text-[#8E8E93] text-[15.84px] flex items-center gap-4  font-['Poppins']">
                    <input type="checkbox" className="w-5 h-5" /> {d.dev_id}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.package}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.compName}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.phone}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.email}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.registration}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[15.84px]  font-['Poppins']">
                    {d.city}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <FaArrowDown className="text-[15px] text-[#8E8E93]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllDevelopers;

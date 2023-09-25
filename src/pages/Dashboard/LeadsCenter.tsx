import { FaArrowUp, FaEllipsisV } from 'react-icons/fa';
const LeadsCenter = () => {
  const data = [
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
    {
      created: '4:00 pm',
      name: 'Ahsan Ali',
      phone: '0321-1079785',
      source: 'Wahid.pk',
      email: 'umar@saharaestate.com',
      status: 'New Lead',
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h1 className="text-black text-[30.15px] font-semibold font-['Poppins']">
          Lead Center
        </h1>{' '}
        <div className="flex items-center  gap-3 flex-wrap">
          <button className="bg-[#FFBA0A] m-auto  w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
            Leads Notification
          </button>
          <button className="bg-main m-auto  w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
            Add New Lead
          </button>
        </div>
      </div>
      <div className="flex justify-between  items-center flex-wrap gap-3 mt-6">
        <h1 className="text-black text-[25.97px] font-bold font-['Poppins']">
          Filter {'>>>'}{' '}
        </h1>
        <div className="flex items-center gap-3">
          <h1 className=" text-black text-[20.93px] font-normal font-['Poppins']">
            Status
          </h1>

          <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value="">Status</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h1 className=" text-black text-[20.93px] font-normal font-['Poppins']">
            Source
          </h1>

          <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value=""> Source</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h1 className=" text-black text-[20.93px] font-normal font-['Poppins']">
            Date Range
          </h1>

          <div className="relative z-20 md:w-[300px] w-[100%]  bg-[#E2E2E2] dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">Canada</option>
              <option value="">09/05/2023</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <h1 className="text-black text-[25.97px] font-bold font-['Poppins']">
          Search
        </h1>
        <input
          type="text"
          placeholder="Search with Lead ID, Name, Phone or Email"
          className="md:w-[50%] w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto mt-4 ">
          <thead className="rounded-xl">
            <tr className="bg-[#24C45B] text-left dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-bold text-white  dark:text-white xl:pl-11">
                Created
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-white  dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-white  dark:text-white">
                Phone
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-white  dark:text-white">
                Source
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-white  dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-white  dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="">
                <td className="border-b border-[#eee] py-5  dark:border-strokedark pl-6 ">
                  <h1 className=" text-zinc-600 text-[18.84px] font-bold font-['Poppins']">
                    {d.created}
                  </h1>
                </td>
                <td className="border-b border-[#eee] py-5  dark:border-strokedark   ">
                  <h1 className=" text-zinc-600 text-[18.84px] font-bold font-['Poppins']">
                    {d.name}
                  </h1>
                </td>
                <td className="border-b border-[#eee] py-5  dark:border-strokedark   ">
                  <h1 className=" text-zinc-600 text-[18.84px] font-bold font-['Poppins']">
                    {d.phone}
                  </h1>
                </td>
                <td className="border-b border-[#eee] py-5  dark:border-strokedark  ">
                  <h1 className=" text-zinc-600 text-[18.84px] font-bold font-['Poppins']">
                    {d.source}
                  </h1>
                </td>
                <td className="border-b border-[#eee] py-5  dark:border-strokedark  ">
                  <h1 className=" text-zinc-600 text-[18.84px] font-bold font-['Poppins']">
                    {d.email}
                  </h1>
                </td>
                <td className="border-b border-[#eee] py-5  dark:border-strokedark flex items-center gap-3  ">
                  <button className="bg-[#FFBA0A] m-auto  w-[200px] h-56px rounded-lg p-3 flex justify-center items-center font-bold text-white">
                    {d.status}
                  </button>
                  <FaEllipsisV />
                  <FaArrowUp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeadsCenter;

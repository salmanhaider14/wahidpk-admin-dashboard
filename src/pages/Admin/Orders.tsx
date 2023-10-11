import { FaArrowDown } from 'react-icons/fa';

const Orders = () => {
  const data = [
    {
      order_no: '00000001',
      price: '250',
      paymentMode: 'PayMob',
      buyer: 'Shahid Nasir',
      product_name: 'Story Credit',
      status: 'Paid',
      date: '00/00/000',
    },
    {
      order_no: '00000001',
      price: '250',
      paymentMode: 'PayMob',
      buyer: 'Shahid Nasir',
      product_name: 'Story Credit',
      status: 'Paid',
      date: '00/00/000',
    },
    {
      order_no: '00000001',
      price: '250',
      paymentMode: 'PayMob',
      buyer: 'Shahid Nasir',
      product_name: 'Story Credit',
      status: 'Paid',
      date: '00/00/000',
    },
    {
      order_no: '00000001',
      price: '250',
      paymentMode: 'PayMob',
      buyer: 'Shahid Nasir',
      product_name: 'Story Credit',
      status: 'Paid',
      date: '00/00/000',
    },
    {
      order_no: '00000001',
      price: '250',
      paymentMode: 'PayMob',
      buyer: 'Shahid Nasir',
      product_name: 'Story Credit',
      status: 'Paid',
      date: '00/00/000',
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Orders
      </h1>{' '}
      <div className="flex items-center gap-12 sm:flex-wrap md:flex-nowrap mt-20 mb-10">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative z-20 sm:w-[200px] md:w-[300px] w-full rounded-2xl  shadow-lg  bg-white dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded-2xl  border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">Bulk Action</option>
            </select>
          </div>{' '}
          <button className="bg-[#CAFFDC] hover:bg-green-600 p-3 font-bold text-black rounded-lg shadow-lg">
            Apply
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative z-20 sm:w-[200px] md:w-[300px] w-full rounded-2xl  shadow-lg  bg-white dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
            <select className="relative z-20 w-full appearance-none rounded-2xl  border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
              <option value="">All Dates</option>
            </select>
          </div>{' '}
          <button className="bg-[#CAFFDC] hover:bg-green-600 p-3 font-bold text-black rounded-lg shadow-lg">
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Order No
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                Price
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold  dark:text-white">
                Payment Mode
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Buyer
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Product Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="bg-white text-black text-left">
                <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                  <h1 className=" text-[#8E8E93] text-[18.84px] flex items-center gap-4  font-['Poppins']">
                    <input type="checkbox" className="w-5 h-5" /> {d.order_no}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[18.84px]  font-['Poppins']">
                    {d.price}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[18.84px]  font-['Poppins']">
                    {d.paymentMode}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[18.84px]  font-['Poppins']">
                    {d.buyer}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[18.84px]  font-['Poppins']">
                    {d.product_name}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-white font-bold bg-main p-2 w-[80px] rounded-full text-center text-[15.84px]   font-['Poppins']">
                    {d.status}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[18.84px]  font-['Poppins']">
                    {d.date}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <FaArrowDown className="text-[18px] text-[#8E8E93]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;

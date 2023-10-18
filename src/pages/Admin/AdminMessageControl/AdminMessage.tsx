import PaginationExample from '../../../components/PaginationExample';

const AdminMessage = () => {
  const data = [
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
    {
      message:
        'Hello, I am interested in [10 Marla Brand New House With Gas For Sale In Sector C Bahria Town]',
      name: 'Ali',
      phone: '0333-2146191',
      email: 'Ali@ali.com',
      link: 'https://wahid.pk/property/10-marla-brand-new-house-with-gas-for-sale-in-sector-c-bahria-town/',
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
        Admin Messages Control
      </h1>{' '}
      <PaginationExample />
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Message
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold  dark:text-white">
                Phone
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Reference or Property Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="bg-white text-black text-left">
                <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                  <h1 className=" text-[#8E8E93] text-[14px] flex items-center gap-4  font-['Poppins']">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="flex flex-col gap-2"> {d.message} </div>
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.name}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.phone}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.email}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.link}
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{' '}
      <PaginationExample />
    </>
  );
};

export default AdminMessage;

import PaginationExample from '../../components/PaginationExample';

const AllUsers = () => {
  const data = [
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
    {
      username: 'umarsheikh',
      name: 'Ali',
      email: 'Real Estate',
      role: 'Seller',
      posts: 'Very nice blog',
      fa_method: 'Sep-10-2022',
      package: 'Sep-10-2022',
      user_no: '994849',
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
          All Users
        </h1>{' '}
        <button className="w-[130px] bg-black text-white text-lg h-[40px]">
          + Add New
        </button>
      </div>
      <PaginationExample />
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Username
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold  dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                role
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                posts
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                2FA Method
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Package Or Product
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                User No
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="bg-white text-black text-left">
                <td className="border-b border-[#eee] min-w-[220px] text-left py-4 px-4  dark:border-strokedark  xl:pl-11 ">
                  <h1 className=" text-[#8E8E93] text-[14px] flex items-center gap-4  font-['Poppins']">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="flex flex-col gap-2">
                      {' '}
                      {d.username}{' '}
                      <div className="flex items-center gap-2">
                        <p className="text-[#041DFF] font-bold cursor-pointer">
                          Edit
                        </p>
                        <p className="text-[#041DFF] font-bold cursor-pointer">
                          Trash
                        </p>
                        <p className="text-[#041DFF] font-bold cursor-pointer">
                          View
                        </p>
                      </div>{' '}
                      <p className="text-[#041DFF] font-bold cursor-pointer">
                        Send Password Rest
                      </p>
                    </div>
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.name}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.email}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.role}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.posts}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.fa_method}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.package}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.user_no}
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

export default AllUsers;

import PaginationExample from '../../../components/PaginationExample';

const SavedOrDraftBlogs = () => {
  const data = [
    {
      title: 'Your Go-To Marketplace for Property in Pakistan',
      author: 'Ali',
      category: 'Real Estate',
      tags: 'Realestatepakistan, Realestatepakistan,Realestatepakistan',
      comments: 'Very nice blog',
      Date: 'Sep-10-2022',
    },
    {
      title: 'Your Go-To Marketplace for Property in Pakistan',
      author: 'Ali',
      category: 'Real Estate',
      tags: 'Realestatepakistan, Realestatepakistan,Realestatepakistan',
      comments: 'Very nice blog',
      Date: 'Sep-10-2022',
    },
    {
      title: 'Your Go-To Marketplace for Property in Pakistan',
      author: 'Ali',
      category: 'Real Estate',
      tags: 'Realestatepakistan, Realestatepakistan,Realestatepakistan',
      comments: 'Very nice blog',
      Date: 'Sep-10-2022',
    },
    {
      title: 'Your Go-To Marketplace for Property in Pakistan',
      author: 'Ali',
      category: 'Real Estate',
      tags: 'Realestatepakistan, Realestatepakistan,Realestatepakistan',
      comments: 'Very nice blog',
      Date: 'Sep-10-2022',
    },
    {
      title: 'Your Go-To Marketplace for Property in Pakistan',
      author: 'Ali',
      category: 'Real Estate',
      tags: 'Realestatepakistan, Realestatepakistan,Realestatepakistan',
      comments: 'Very nice blog',
      Date: 'Sep-10-2022',
    },
  ];
  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins'] mt-4">
          All Blogs
        </h1>{' '}
        <button className="w-[130px] bg-[#FFBB0B] text-white text-lg h-[40px]">
          + Add New
        </button>
      </div>
      <PaginationExample />
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto mt-4 bg-white ">
          <thead className="rounded-xl">
            <tr className="bg-white text-[#6B6B6B ] text-left text-[18px] dark:bg-meta-4 ">
              <th className="min-w-[220px] py-4 px-4 font-semibold md:flex items-center md:gap-4   dark:text-white xl:pl-11">
                <input type="checkbox" className="w-5 h-5" /> Title
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold  dark:text-white">
                Author
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold  dark:text-white">
                Category
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Tags
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Comments
              </th>
              <th className="min-w-[120px] py-4 px-4 font-semibold   dark:text-white">
                Date
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
                      {d.title}{' '}
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
                    </div>
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[150px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.author}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark   ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.category}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4 dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.tags}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.comments}
                  </h1>
                </td>
                <td className="border-b border-[#eee] min-w-[120px] py-4 px-4  dark:border-strokedark  ">
                  <h1 className=" text-[#8E8E93] text-[14px]  font-['Poppins']">
                    {d.Date}
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

export default SavedOrDraftBlogs;

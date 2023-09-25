const ECommerce = () => {
  const packageDetails = [
    { heading1: 'Your Current Package', heading2: 'Platinum Package' },
    { heading1: 'Total Listings', heading2: '100' },
    { heading1: 'Remaining Listings', heading2: '100' },
    { heading1: 'Supreme Plus Credits', heading2: '100' },
    { heading1: 'Supreme Credits', heading2: '100' },
    { heading1: 'Re-up Credits', heading2: '100' },
    { heading1: 'Story Credits', heading2: '100' },
    { heading1: 'Featured Story Credits', heading2: '100' },
    { heading1: 'Video Credits', heading2: '100' },
    { heading1: 'Photoshoot Credits', heading2: '100' },
    { heading1: 'Package Expiry Date', heading2: '100' },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        Dashboard
      </h1>
      <div className="grid md:grid-cols-3 grid-cols 1 gap-8">
        <div className="md:col-span-2  ">
          <div className="flex justify-between items-center flex-wrap ">
            <div className="w-[300px] h-[100px] bg-white rounded-md p-6 flex justify-start my-4">
              <div className="flex items-center gap-2">
                {' '}
                <img src="/listingico.png" className="w-[70px]" />
                <div className="flex flex-col items-start gap-2">
                  <h1 className=" text-neutral-400 text-[18px.12px] font-semibold font-['Poppins'] ">
                    Your listing
                  </h1>
                  <p className=" ">
                    <span className="text-[#25C55B] text-[18.97px] font-bold font-['Poppins'] ">
                      100
                    </span>

                    <span className="text-neutral-400 ps-1 text-[12.85px] font-semibold font-['Poppins'] ">
                      /50 remaining
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[100px] bg-white rounded-md p-6 flex justify-start my-4">
              <div className="flex items-center gap-4">
                {' '}
                <img src="/pendingico.png" className="w-[70px]" />
                <div className="flex flex-col items-start gap-2">
                  <h1 className=" text-neutral-400 text-[18px.12px] font-semibold font-['Poppins'] ">
                    Pending
                  </h1>
                  <p className=" ">
                    <span className="text-[#25C55B] text-[18.97px] font-bold font-['Poppins'] ">
                      02
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[100px] bg-white rounded-md p-6 flex justify-start my-4">
              <div className="flex items-center gap-4">
                {' '}
                <img src="/ratingico.png" className="w-[70px]" />
                <div className="flex flex-col items-start gap-2">
                  <h1 className=" text-neutral-400 text-[18px.12px] font-semibold font-['Poppins'] ">
                    Favorite
                  </h1>
                  <p className=" ">
                    <span className="text-[#25C55B] text-[18.97px] font-bold font-['Poppins'] ">
                      06
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white min-h-[500px] mt-6 p-6 ">
            <h1 className=" text-black text-lg font-bold font-['Poppins']">
              Package Details
            </h1>
            {packageDetails.map((pkg) => (
              <div className="flex md:flex-row flex-col  justify-between items-start flex-wrap">
                <h1 className="text-black text-[16.85px] font-semibold font-['Poppins'] leading-[55.28px]">
                  {pkg.heading1}
                </h1>
                <h1 className="text-black text-[16.85px] font-semibold font-['Poppins'] leading-[55.28px]">
                  {pkg.heading2}
                </h1>
              </div>
            ))}
          </div>
          <div className="bg-white min-h-[60vh] mt-6 p-6 ">
            {' '}
            <h1 className=" text-black text-lg font-bold font-['Poppins']">
              My Properties
            </h1>
            <div className="flex justify-between items-center flex-wrap mt-3 ">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  From Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="From Date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  To Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="From Date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Status
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"></span>
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    <option value="">USA</option>
                    <option value="">UK</option>
                    <option value="">Canada</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto mt-4">
                <thead className="rounded-xl">
                  <tr className="bg-[#24C45B] text-left dark:bg-meta-4 ">
                    <th className=" py-4 px-4 font-bold text-white  dark:text-white xl:pl-11">
                      Listing
                    </th>
                    <th className=" py-4 px-4 font-bold text-white  dark:text-white">
                      Status
                    </th>
                    <th className=" py-4 px-4 font-bold text-white  dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 flex justify-start items-start gap-2 flex-wrap">
                      <img src="/propertyimg.png" className="w-[150px]" />
                      <div className="flex flex-col items-start justify-start gap-1">
                        <h1 className=" text-black text-base font-semibold font-['Poppins'] leading-normal">
                          Gorgeous Apartment Building
                        </h1>
                        <p className="text-neutral-700 text-xs font-normal font-['Poppins'] ">
                          Posting date: March 22, 2023
                        </p>
                        <p className="text-[#24C45B] text-base font-semibold font-['Poppins'] leading-normal">
                          $7,500
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-[#24C45B]  py-1 px-3 text-sm font-medium text-white">
                        Approved
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex flex-col items-start gap-2 ">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                              fill=""
                            />
                            <path
                              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 flex justify-start items-start gap-2 flex-wrap">
                      <img src="/propertyimg.png" className="w-[150px]" />
                      <div className="flex flex-col items-start justify-start gap-1">
                        <h1 className=" text-black text-base font-semibold font-['Poppins'] leading-normal">
                          Gorgeous Apartment Building
                        </h1>
                        <p className="text-neutral-700 text-xs font-normal font-['Poppins'] ">
                          Posting date: March 22, 2023
                        </p>
                        <p className="text-[#24C45B] text-base font-semibold font-['Poppins'] leading-normal">
                          $7,500
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-[#24C45B]  py-1 px-3 text-sm font-medium text-white">
                        Approved
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex flex-col items-start gap-2 ">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                              fill=""
                            />
                            <path
                              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 flex justify-start items-start gap-2 flex-wrap">
                      <img src="/propertyimg.png" className="w-[150px]" />
                      <div className="flex flex-col items-start justify-start gap-1">
                        <h1 className=" text-black text-base font-semibold font-['Poppins'] leading-normal">
                          Gorgeous Apartment Building
                        </h1>
                        <p className="text-neutral-700 text-xs font-normal font-['Poppins'] ">
                          Posting date: March 22, 2023
                        </p>
                        <p className="text-[#24C45B] text-base font-semibold font-['Poppins'] leading-normal">
                          $7,500
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-[#24C45B]  py-1 px-3 text-sm font-medium text-white">
                        Approved
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex flex-col items-start gap-2 ">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                              fill=""
                            />
                            <path
                              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className=" h-[100px] bg-white rounded-md p-6 flex justify-start my-4">
            <div className="flex items-center gap-8">
              {' '}
              <img src="/reviewico.png" className="w-[70px]" />
              <div className="flex flex-col items-start gap-2">
                <h1 className=" text-neutral-400 text-[18px.12px] font-semibold font-['Poppins'] ">
                  Reviews
                </h1>
                <p className=" ">
                  <span className="text-[#25C55B] text-[18.97px] font-bold font-['Poppins'] ">
                    1.483
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mt-4">
            <h1 className=" text-black text-lg font-bold font-['Poppins']">
              Messages
            </h1>
            <div className="flex flex-col gap-3 my-5">
              <div className="flex items-center gap-2">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                  Themesflat
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-3 my-5">
              <div className="flex items-center gap-2">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                  Themesflat
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-3 my-5">
              <div className="flex items-center gap-2">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                  Themesflat
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
            </div>
          </div>
          <div className="bg-white p-4 mt-4">
            <h1 className=" text-black text-lg font-bold font-['Poppins']">
              Recent Reviews
            </h1>
            <div className="flex flex-col gap-3 my-5 ">
              <div className="flex items-center gap-2 ">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] ">
                  Bessie Cooper
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
              <img src="/greenstars.png" className="w-[60px]" />
            </div>
            <hr />
            <div className="flex flex-col gap-3 my-5 ">
              <div className="flex items-center gap-2 ">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] ">
                  Bessie Cooper
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
              <img src="/greenstars.png" className="w-[60px]" />
            </div>
            <hr />
            <div className="flex flex-col gap-3 my-5 ">
              <div className="flex items-center gap-2 ">
                <img
                  src="/propertyimg.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <h1 className="text-black text-sm font-semibold font-['Poppins'] ">
                  Bessie Cooper
                </h1>
                <p className=" text-main text-xs font-normal font-['Poppins'] leading-[18px]">
                  3 day ago
                </p>
              </div>
              <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                scelerisque vulputate tincidunt. Maecenas lorem sapien
              </p>
              <img src="/greenstars.png" className="w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;

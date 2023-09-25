import React from 'react';
import { FaCalendar, FaDownload } from 'react-icons/fa';

const Admin = () => {
  return (
    <>
      {' '}
      <h1 className="text-black text-[30.97px] font-bold font-['Poppins']">
        Dashboard
      </h1>
      <div className="grid md:grid-cols-2 gap-3 mt-6">
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/trolly.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Total Revenue Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              94,9348 PKR
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/arrowdown.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Total Refunds Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              94,9348 PKR
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/listingico.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              New Listings Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              100
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              New Orders
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              0
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Pending Orders
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              10
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/reviewico.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              New Reviews Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              15
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/listingico.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Leads Allocated Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              5
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Contact Form Inquiries
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              40
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/listingico.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              New Messages Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              70
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              New Users Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              30
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Emails Sent Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              50
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/reviewico.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Email Failed
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              10
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/cartadd.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Total Invoices Generated Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              100
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
        <div className="bg-white min-h-[150px] p-4 flex items-center gap-2 rounded-xl shadow-md">
          <img src="/trolly.png" className="w-20" />
          <div className="flex flex-col gap-3 grow">
            <p className=" text-neutral-400 text-[20.12px] font-semibold font-['Poppins'] ">
              Total Traffic Today
            </p>
            <h1 className=" text-main text-[30.97px] font-bold font-['Poppins']">
              50000
            </h1>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaCalendar size={30} />
            <FaDownload size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

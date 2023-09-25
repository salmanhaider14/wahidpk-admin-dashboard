const Messages = () => {
  const reviews = [
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
    {
      title: 'Bessie Cooper',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis. Integer vestibulum tempus tincidunt',
      time: '3 Days Ago',
    },
  ];
  return (
    <>
      <h1 className="text-black text-[30.97px] mb-6 font-bold font-['Poppins']">
        All Messages
      </h1>
      <div className="bg-white mt-5 p-4">
        {reviews.map((review) => (
          <div className="flex flex-col gap-3 my-5">
            <div className="flex items-center gap-2">
              <img
                src="/propertyimg.png"
                className="w-[30px] h-[30px] rounded-full"
              />
              <h1 className="text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                {review.title}
              </h1>
              <p className="w-[450.34px] text-black text-xs font-bold font-['Poppins'] leading-[18px]">
                {review.time}
              </p>
            </div>
            <p className=" text-black text-sm font-normal font-['Poppins'] leading-[21px]">
              {review.desc}
            </p>
            <img src="/greenstars.png" className="w-[70px]" />
            <hr className="text-gray" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Messages;

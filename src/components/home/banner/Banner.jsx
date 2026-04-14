import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center my-5 md:my-8 lg:my-12">
      <div className="flex flex-col items-center space-y-5 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-green-800 text-white">+ Add a Friend</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-5 md:mt-10 lg:mt-16">
        <div className="border border-zinc-100 shadow-sm  p-4 md:p-8 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out ">
            <h3 className="text-lg font-bold">0</h3>
            <p className="text-sm md:text-lg">Total Friends</p>
        </div>
        <div  className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out ">
            <h3 className="text-lg font-bold">0</h3>
            <p className="text-sm md:text-lg">On Track</p>
        </div>
        <div  className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out ">
            <h3 className="text-lg font-bold">0</h3>
            <p className="text-xs md:text-lg">Need Attention</p>
        </div>
        <div  className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center text-center transition-all hover:scale-105 duration-500 ease-in-out ">
            <h3 className="text-lg font-bold">0</h3>
            <p className="text-xs  md:text-lg">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

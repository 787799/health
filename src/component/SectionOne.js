import Cards, { CardData } from "./Card";

export default function SectionOne() {
  return (
    <div id="services" className="w-full bg-white flex h-screen flex-col justify-center items-center  ">
        <h1 className="font-bold text-[#67D7C1] text-4xl mt-10">Our Services</h1>
        <p className=" text-center  font-semibold text-black  text-xl "> Discover Comprehensive Health Solutions Tailored for You</p>
        <div className="w-[60%] m-20  flex justify-between items-center ">
            {
                CardData.map((e)=>{
                    return(
                        <Cards heading={e.heading} paragraph={e.paragraph}/>
                    )
                })
            }
        
        </div>
        <div  className="w-full bg-[#B6E1E7] h-50 flex justify-center items-center   ">
        <div className="w-[65%] flex justify-between items-center ">
          <div className="flex flex-col items-center justify-center py-14">
            <dt className="mb-2 text-6xl font-bold text-[#67D7C1]">10M</dt>
            <dd className="text-black font-bold dark:text-gray-400">
              Happy Customers
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center text-[#67D7C1]">
            <dt className="mb-2 text-6xl font-bold">04M</dt>
            <dd className="text-black font-bold dark:text-gray-400">
              Monthly Visitors
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center text-[#67D7C1]">
            <dt className="mb-2 text-6xl font-bold">120</dt>
            <dd className="text-black font-bold dark:text-gray-400">
              Countries Worldwide
            </dd>
          </div>

          <div className="flex flex-col items-center justify-center text-[#67D7C1]">
            <dt className="mb-2 text-6xl font-bold">4.9</dt>
            <dd className="text-black font-bold dark:text-gray-400">
              Trust Pilot
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}

import pic1 from "../../src/photo/doct1.jpg";

export default function SectionTwo() {
  return (
    <>
      <div className="w-full bg-[#F4FFFF] h-50 flex justify-center items-center   ">
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

      <div className="  w-full flex  justify-center items-center px-10  bg-white ">
        <div className="w-[75%] flex">
          <div className="w-1/2 flex flex-col justify-center items-start">
            <h4 className="font-bold text-[#67D7C1]  ">WHO ARE WE</h4>
            <h1 className="font-bold text-5xl text-start my-4">
              We Help To Get
              <br />
              Solution
            </h1>
            <p className="text-start  font-semibold text-[#818180]  text-xl my-4">
              We specialize in proviiding tailored solution to address your uniq
              challenges. let us be your partner in navigating complex issues
              and finding effective resolution most beautiful smile
            </p>
            <div />
            <div className="flex inset-x-10 right-10  w-[60%] my-4 justify-between">
              <button className="  text-[#67D7C1] border border-blue-500 font-bold hover:text-white py-2 px-5  border-[#67D7C1] hover:bg-[#67D7C1] rounded">
                Learn About
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center my-5  border-none">
            <img src={pic1} alt="Banner"  className="rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
}

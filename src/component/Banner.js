import pic from "../../src/photo/banner-removebg-preview.png";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <section id="Home" class="relative bg-[url(https://www.tatacapital.com/blog/wp-content/uploads/2023/07/types-of-health-insurance-and-their-advantages.jpg)] bg-cover bg-center bg-no-repeat">
      {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

      {/* <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong class="block font-extrabold text-rose-700">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div> */}
      <div className="  w-full flex h-screen justify-center items-center px-10  bg-gray-50 bg-[url(https://www.tatacapital.com/blog/wp-content/uploads/2023/07/types-of-health-insurance-and-their-advantages.jpg)] bg-cover bg-center bg-no-repeat ">
      <Navbar/>
      <div className="w-[70%] flex">
        <div className="w-1/2 flex flex-col justify-center items-start">
          <h4 className="font-bold text-black  ">Join Us</h4>
          <h1 className="font-bold text-5xl text-start my-4">
            We Back You with a Smile for Ever
          </h1>
          <p className="text-start  font-semibold text-gray-500  text-2xl my-4">
            Medical Recover is most focused in helping you <br /> discover your
            most beautiful smile
          </p>
          <div />
          <div className="flex inset-x-10 right-10  w-[60%] my-4 justify-between">
            <button className=" text-[#67D7C1] border  font-bold hover:text-white py-2 px-5  border-[#67D7C1] hover:bg-[#67D7C1] rounded">
              Take an Appointment
            </button>
            <button className="  text-[#67D7C1] border  font-bold hover:text-white py-2 px-5  border-[#67D7C1] hover:bg-[#67D7C1] rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end pb-5 ml-6">
          <img src={pic} alt="Banner" className="w-full " />
        </div>
      </div>
    </div>
    </section>
    
  );
}

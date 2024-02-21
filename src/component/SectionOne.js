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
      
    </div>
  );
}

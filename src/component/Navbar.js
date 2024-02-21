import logo from "../../src/photo/logo.png";

export default function Navbar(){
    return(
        <nav className="w-full fixed w-full z-20 top-0 left-0 bg-[#fafafa] flex justify-center items-center px-10 py-2">
            <div className=" w-3/4 flex justify-between items-center px-10 py-2">
            <img src={logo}  alt="Logo"  className="cursor-pointer" />
            <div className="flex gap-x-6 font-bold text-[#818180] cursor-pointer text-lg">
                <a href="#Home" >Home</a>
                <a href="#services">Services</a>
                <a href="#Aboutus">About Us</a>
                <a href="#Contact">Contact</a>
            </div>
        {/* <button className="bg-[#67D7C1]  text-white font-bold hover:text-white py-2 px-5  hover:border-transparent rounded">Join Us</button> */}
        <button className="text-[#67D7C1] border  font-bold hover:text-white py-2 px-5  border-[#67D7C1] hover:bg-[#67D7C1] rounded">Join Us</button>
            </div>
            
        </nav>

    )
}
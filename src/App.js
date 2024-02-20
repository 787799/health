import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import Team from './component/Team';
import Footer from './component/Footer';
import Testimonial from './component/Testimonial';
import Choose from './component/Choose';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <Team/>
      <Choose/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
      
      
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Slider } from "./Components/Slider/Slider";
import { BookAppointment } from "./Components/BookAppointment/BookAppointment";
import { About } from "./Components/About/About";
import { Treatment } from "./Components/Treatment/Treatment";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Footer } from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Doctors } from "./Components/Doctors/Doctors";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { LogIn } from "./Components/LogIn/LogIn";
import { SignUp } from "./Components/SignUp/SignUp";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Treatment" element={<Treatment />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>

    // <>
    //   <div className="hero_area">
    //     <Header />
    //     <Slider />
    //   </div>

    //   <BookAppointment />

    //   <About />

    //   <Treatment />
    //   <DoctorClient />
    //   <ContactUs />

    //   <Footer />
    // </>
  );
}

export default App;

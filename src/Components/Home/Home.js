import { BookAppointment } from "../BookAppointment/BookAppointment"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Slider } from "../Slider/Slider"

export const Home = ()=>{
    return<><div className="hero_area">
        <Header/>
         <Slider/>
       </div>
       <BookAppointment/>
       <Footer/>
    </>
}
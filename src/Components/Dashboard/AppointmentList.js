import { useState } from "react"
import { Header } from "../Header/Header"
export const AppointmentList = () =>{

   

    return<>
    <div className="hero_area">
        <Header/>
    </div>
    <div className="container = " style={{fontFamily:"sans-serif"}}>
      <div className="row    my-5 d-flex  justify-content-around align-items-center">
      <input className=" col-4 col-lg-5 border border-secondary rounded text-center p-2" style={{color:""}} type="date" id="birthday"/>
      
        <button className="btn btn-primary  col-3 col-md-3 my-2">Incomplete Appointment</button>
        <button disabled= "true" className="btn btn-success col-3  col-md-3 my-2">Completed Appointment</button>
      </div>
      <div className="row  d-flex  justify-content-around align-items-center ">
         <p style={{fontSize:20}}><b> TOTAL PATIENT : 28 </b> </p>
      </div>
    </div>



    </>
}
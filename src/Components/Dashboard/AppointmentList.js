import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { useReducer } from "react";
import { api } from "../API_URL/APIURL";
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";


export const AppointmentList = () => {
  
  const [appointmentStatus , setAppointmentStatus] = useState(true);

  const inititalState = {
    patientList: null,
  };
  const reducer = (state, action) => {
    if (action.type == "set-patient-list") {
      return { ...state, patientList: action.payload };
    }
  };
  const [data, dispatch] = useReducer(reducer, inititalState);

  useEffect(() => {
    loadPatientList();
  }, []);

  const loadPatientList = async () => {
    try {
      let token = sessionStorage.getItem("token");

      let response = await axios.get(api.patientList, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status) {
        console.log(response.data.data);
        dispatch({ type: "set-patient-list", payload: response.data.data });
      } else {
        window.alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <div className="container = " style={{ fontFamily: "sans-serif" }}>
        <div className="row    my-5 d-flex  justify-content-around align-items-center">
          <input
            className=" col-4 col-lg-5 border border-secondary rounded text-center p-2"
            style={{ color: "" }}
            type="date"
            id="birthday"
          />

          <button onClick={() =>{ setAppointmentStatus(true)} }
           className="btn btn-primary  col-3 col-md-3 my-2">
            Incomplete Appointment
          </button>

          <button onClick={() =>setAppointmentStatus(false)}
            
            className="btn btn-success col-3  col-md-3 my-2"
          >
            Completed Appointment
          </button>
        </div>
        <div className="row  d-flex  justify-content-around align-items-center mb-4">
          <p className=  {appointmentStatus ? "text-danger" : "text-success"}
              style={{fontSize:19}}>
            Total {appointmentStatus ? "Incomplete" :"Completed" } Appointment list of  Patient : {data.patientList?.filter(patient => patient.activeStatus == appointmentStatus).length}
          </p>
        </div>
        <section className="patient-list-section book_section">
          {data.patientList?.filter((patient) => patient.activeStatus == appointmentStatus ).map((patient, index) => (
            <div className="patient-box container-fluid p-5 mb-5">
              <h4>
                MICO <span>HOSPITAL</span>
              </h4>
              <div className="patient-box-row row">
                <label className=" col-lg-4" for="inputPatientName">
                  PatientID : <b> {patient.id}</b>{" "}
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Patient Name : <b> {patient.name}</b>{" "}
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Gender : <b> {patient.sex}</b>{" "}
                </label>
              </div>

              <hr />
              <div className="row  patient-box-row">
                <label className=" col-lg-4" for="inputPatientName">
                  Patient Age : <b> {patient.age}</b>{" "}
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Patient phone number : <b> {patient.phoneNumber}</b>{" "}
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Patient Diagnosis : <b> {patient.diagnosis}</b>{" "}
                </label>
              </div>
              <hr />
              <div className="row patient-box-row ">
                <label className=" col-lg-4" for="inputPatientName">
                  Appointment: <br/> <b>Date : {patient.appointmentdate} <br/>
                  Time : {patient.time}
                  </b>
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Receptionist Id  : <b> {patient.address.id}</b>{" "}
                </label>
                <label className=" col-lg-4" for="inputPatientName">
                  Receptionist Name : <b> {patient.address.name}</b>{" "}
                </label>
              </div>
              <div class="col-md-12 text-center">
                <button type="button" className= {appointmentStatus? "btn btn-success" : "btn btn-danger"}>
                  {appointmentStatus ? "Done" : "Undo"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { api } from "../API_URL/APIURL";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); 

  const save = async () => {
    try{
      
     
        let response =  await axios.post(api.doctorSignUp , {name , phoneNumber , email , password}) ; 
        console.log(response.data)
        if (response.data.status)
        {
            navigate("/LogIn");
        }
        else{
            window.alert(response.data.data.message);
        }
    }
   
  catch(err){
    window.alert("oops ops went wrong ");
  }
  
  };
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <section className="book_section layout_padding" style={{fontFamily:"sans-serif"}} >
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4>
                  SIGN <span>UP</span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-5">
                    <label for="inputPatientName">Full Name </label>
                    <input  onChange={(event) =>{setName(event.target.value)}}
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter full Name"
                    />
                  </div>
                  <div className="form-group offset-lg-1 col-lg-5">
                    <label for="inputSymptoms">Email id </label>
                    <input  onChange={(event) =>{setEmail(event.target.value)}}
                      type="text"
                      className="form-control"
                      id="inputSymptoms"
                      placeholder="Enter Email id "
                    />
                  </div>
                </div>
                <div className="form-row ">
                  <div className="form-group col-lg-5">
                    <label for="inputPhone">Phone Number</label>
                    <input  onChange={(event) =>{setPhoneNumber(event.target.value)}}
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      placeholder="XXXXXXXXXX"
                    />
                  </div>
                  <div className="form-group offset-lg-1 col-lg-5">
                    <label for="inputSymptoms">Password</label>
                    <input  onChange={(event) =>{setPassword(event.target.value)}}
                      type="password"
                      className="form-control"
                      id="inputSymptoms"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" onClick={save} className="btn ">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

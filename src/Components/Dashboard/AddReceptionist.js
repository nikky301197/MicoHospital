import { useState } from "react"
import { Header } from "../Header/Header"
import axios from "axios";
import { api } from "../API_URL/APIURL";

export const AddReceptionist = () => {
  
    const[name , setName] = useState() ;
    const[email , setEmail] = useState() ;
    const[phoneNumber , setPhoneNumber] = useState() ;
    const[password , setPassword] = useState() ;
    const[address , setAddress] = useState() ;
    
    const saveReceptionist =  async(event) =>{
        try{
             event.preventDefault();
            let token = sessionStorage.getItem("token");
    
     let response =  await axios.post(api.addReceptionist,{name, phoneNumber, email , password , raddress:address } ,  {
        headers: { Authorization: `Bearer ${token}` } 
      });
      console.log(response.data);
       if (response.data.status)
       {
          window.alert("New Receptionist Added Successfully")
       }
       else{
        window.alert("Failed to add new receptionist")
        console.log(response.data.data.type)
       }
    }
    catch(err)
    {
        window.alert("oops something went wrong ")
        console.log(err);
    }
     
    }
   
  return <>
  <div className="hero_area">
    <Header/>
  </div>
  <section className="book_section layout_padding" style={{fontFamily:"sans-serif"}} >
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4>
                  ADD <span>RECEPTIONIST</span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-4">
                    <label for="inputPatientName">Full Name </label>
                    <input  onChange={(event) =>{setName(event.target.value)}}
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter full Name"
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label for="inputSymptoms">Email id </label>
                    <input  onChange={(event) =>{setEmail(event.target.value)}}
                      type="text"
                      className="form-control"
                      id="inputSymptoms"
                      placeholder="Enter Email id "
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label for="inputPhone">Phone Number</label>
                    <input  onChange={(event) =>{setPhoneNumber(event.target.value)}}
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      placeholder="XXXXXXXXXX"
                    />
                  </div>
                </div>
                <div className="form-row ">
                <div className="form-group col-lg-4">
                    <label for="inputSymptoms"> Address </label>
                    <textarea  onChange={(event) =>{setAddress(event.target.value)}}
                      type="text"
                      className="form-control"
                      id="inputSymptoms"
                      placeholder="Enter Address "
                    />
                  </div>
                  <div className="form-group  col-lg-4">
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
                  <button type="submit" onClick={saveReceptionist} className="btn ">
                     Add 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  </>

}
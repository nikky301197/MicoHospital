import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { api } from "../API_URL/APIURL";
import { Header } from "../Header/Header";
import axios from "axios";
import { isLoggedIn } from "../Auth/Auth";

export const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signIn = async (event) => {
    try {
      event.preventDefault();

      let response = await axios.post(api.doctorLogIn, { email, password });

      if (response.data.status) {
        let currentuser = response.data.data;
        delete currentuser.password;
        sessionStorage.setItem("current-user", JSON.stringify(currentuser));
        sessionStorage.setItem("token", response.data.msg);
         navigate("/dashboard");
      
      } else {
        window.alert("oops something went wrong ");
      }
    } catch (err) {
      window.alert(err);
    }
  };
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <section className="book_section layout_padding" style={{fontFamily:"sans-serif"}}  >
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={signIn}>
                <h4>
                  LOG <span>IN</span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-4">
                    <label for="inputPatientName">Email Id </label>
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter email id"
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label for="inputPatientName">Password </label>
                    <input
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="btn ">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

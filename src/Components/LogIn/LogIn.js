import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const LogIn = () => {
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4>
                  LOG <span>IN</span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-5 ">
                    <label for="inputPatientName"> Email id  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter email id "
                    />
                  </div>
                  <div className="form-group  offset-lg-1 col-lg-5">
                    <label for="inputDoctorName">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter password"
                    />
                  </div>
                 
                </div>
               
                <div className="btn-box">
                  <button type="submit" className="btn ">
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

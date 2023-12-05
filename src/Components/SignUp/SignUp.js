import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const SignUp = () => {
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
                  SIGN <span>UP</span>
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-5">
                    <label for="inputPatientName">Full Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder="Enter full Name"
                    />
                  </div>
                  <div className="form-group offset-lg-1 col-lg-5">
                    <label for="inputSymptoms">Email id </label>
                    <input
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
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      placeholder="XXXXXXXXXX"
                    />
                  </div>
                  <div className="form-group offset-lg-1 col-lg-5">
                    <label for="inputSymptoms">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputSymptoms"
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

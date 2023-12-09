import { isLoggedIn } from "../Auth/Auth";
import { Header } from "../Header/Header";

export const Dashboard = () => {
    let currentUser = JSON.parse(sessionStorage.getItem("current-user"));
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>

      <section className="book_section layout_padding" style={{fontFamily:"sans-serif"}}  >
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4 >
                  Profile
                </h4>
                <div className="form-row ">
                  <div className="form-group col-lg-4">
                    <label for="inputPatientName" style={{color: "#00C6A9" , fontWeight:"bold"}}>ID </label>
                    <input  
                      type="text"
                      className="form-control"
                      id="id"
                      value =  {currentUser.id}
                    />
                  </div>
                  <div className="form-group  col-lg-4">
                    <label for="inputSymptoms" style={{color: "#00C6A9" , fontWeight:"bold"}}> Name  </label>
                    <input  
                      type="text"
                      className="form-control"
                      id="name"
                      value =  {currentUser.name}
                     
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label for="inputPhone" style={{color: "#00C6A9" , fontWeight:"bold"}}>Phone Number</label>
                    <input  
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      value =  {currentUser.phoneNumber}
                    />
                  </div>
                </div>
                <div className="form-row ">
                 
                  <div className="form-group col-lg-4">
                    <label for="inputSymptoms" style={{color: "#00C6A9" , fontWeight:"bold"}}>Email</label>
                    <input  
                      type="text"
                      className="form-control"
                      id="email"
                      value =  {currentUser.email}
                     
                    />
                  </div>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

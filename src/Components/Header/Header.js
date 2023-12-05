import { Link } from "react-router-dom"

export const Header = ()=>{

    return<>
    <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <Link to="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span className='ml-1'>
                Call : +01 123455678990
              </span>
            </Link>
            <Link to="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span className='ml-1'>
                Email : demo@gmail.com
              </span>
            </Link>
            <Link to="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span className='ml-1'>
                Location
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt=""/>
            </Link>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav" >
                  {/* <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/About"> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Treatment">Treatment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Doctors">Doctors</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Testimonial">Testimonial</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <Link to="/LogIn">
                  <i className="fa fa-user" aria-hidden="true">
                 
                  </i>
                  <span>
                    Login
                  </span>
                 
                </Link>
                <Link to="/SignUp">
                  <i className="fa fa-user" aria-hidden="true">
                  <span>
                    Sign Up
                  </span>
                  </i>
                  
                </Link>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
}
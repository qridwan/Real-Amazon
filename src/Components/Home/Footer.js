import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FacebookIcon />
            </a>

            {/* <!-- Twitter --> */}

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <TwitterIcon />
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <InstagramIcon />
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <LinkedInIcon />{" "}
            </a>

           
          </section>
          {/* <!-- Section: Social media -->

    <!-- Section: Form --> */}
          <section className="">
            <form action="">
              {/* <!--Grid row--> */}
              <div className="row d-flex justify-content-center">
                {/* <!--Grid column--> */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/* <!--Grid column-->

          <!--Grid column--> */}
                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>
                {/* <!--Grid column-->

          <!--Grid column--> */}
                <div className="col-auto">
                  {/* <!-- Submit button --> */}
                  <button type="submit" className="btn btn-outline-light mb-5">
                    Subscribe
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          {/* <!-- Section: Form -->


    {/* <!-- Section: Text -->

    <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row justify-content-center">
              {/* <!--Grid column--/> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Get to Know Us</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="https://www.amazon.jobs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.aboutamazon.com/?utm_source=gateway&utm_medium=footer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      About Amazon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.aboutamazon.com/amazon-fulfillment-center-tours?utm_source=gateway&utm_medium=footer&utm_campaign=fctours"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Amazon Tours
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column-->



        <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Let Us Help You</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Amazon and COVID-19
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Shipping Rates & Policies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/gp/css/returns/homepage.html?ref_=footer_hy_f_4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Returns & Replacements
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a
            className="text-white"
            href="https://twitter.com/thizizrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            📩Mohammad Ridwanul Alam
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

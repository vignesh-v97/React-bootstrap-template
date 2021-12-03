import React from "react";
import FooterIcon from "./components/FooterIcon";

function Footer() {
 return (
  <div>
   <footer className="text-center footer">
    <div className="container">
     <div className="row">
      {/* Footer Location*/}
      <div className="mb-5 col-lg-4 mb-lg-0">
       <h4 className="mb-4 text-uppercase">Location</h4>
       <p className="mb-0 lead">
        2215 John Daniel Drive
        <br />
        Clark, MO 65243
       </p>
      </div>
      {/* Footer Social Icons*/}
      <div className="mb-5 col-lg-4 mb-lg-0">
       <h4 className="mb-4 text-uppercase">Around the Web</h4>
       <FooterIcon cName="fa-facebook-f" />
       <FooterIcon cName="fa-twitter" />
       <FooterIcon cName="fa-linkedin-in" />
       <FooterIcon cName="fa-dribbble" />
      </div>
      {/* Footer About Text*/}
      <div className="col-lg-4">
       <h4 className="mb-4 text-uppercase">About Freelancer</h4>
       <p className="mb-0 lead">
        Freelance is a free to use, MIT licensed Bootstrap theme created by
        <a href="http://startbootstrap.com">Start Bootstrap</a>.
       </p>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
}

export default Footer;

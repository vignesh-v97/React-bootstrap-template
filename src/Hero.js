import React from "react";
import Divider from "./components/Divider";

function Hero() {
 return (
  <div>
   <header className="text-center text-white masthead bg-primary">
    <div className="container d-flex align-items-center flex-column">
     <img
      className="mb-5 masthead-avatar"
      src="assets/img/avataaars.svg"
      alt="..."
     />
     <h1 className="mb-0 masthead-heading text-uppercase">React Page</h1>
     <Divider cName="divider-light" />
     <p className="mb-0 masthead-subheading font-weight-light">
      Graphic Artist - Web Designer - Illustrator
     </p>
    </div>
   </header>
  </div>
 );
}

export default Hero;

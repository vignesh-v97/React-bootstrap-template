import React from "react";
import PlusOnHover from "./PlusOnHover";

function PortfolioCard(props) {
 return (
   <div className="mb-5 col-md-6 col-lg-4">
    <div
     className="mx-auto portfolio-item"
     data-bs-toggle="modal"
     data-bs-target="#portfolioModal1"
    >
     <PlusOnHover/>
     <img
      className="img-fluid"
      src={props.portFolioImg}
      alt="..."
     />
    </div>
   </div>
 );
}

export default PortfolioCard;

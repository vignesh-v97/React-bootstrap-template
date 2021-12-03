import React from "react";

const Divider = (props) => {
 return (
  <div className={`divider-custom ${props.cName}`}>
   <div className="divider-custom-line" />
   <div className="divider-custom-icon">
    <i className="fas fa-star" />
   </div>
   <div className="divider-custom-line" />
  </div>
 );
};

export default Divider;

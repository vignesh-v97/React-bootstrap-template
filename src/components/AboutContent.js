import React from "react";

function AboutContent(props) {
 return (
   <div className={`col-lg-4 ${props.cName}`}>
    <p className="lead">
     {props.content}
    </p>
   </div>
 );
}

export default AboutContent;

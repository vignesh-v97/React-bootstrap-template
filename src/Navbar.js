import React from "react";

const navTitles = [
 {
  title: 'Portfolio',
  url: '#portfolio'
 },
 {
  title: 'About',
  url: '#about'
 },
 {
  title: 'contact',
  url: '#contact'
 }
];

function Navbar() {
 return (
  <div>
   <nav
    className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
    id="mainNav"
   >
    <div className="container">
     <a className="navbar-brand" href="/">
      React Page
     </a>
     <button
      className="text-white rounded navbar-toggler text-uppercase font-weight-bold bg-primary"
      type="button"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      Menu
      <i className="fas fa-bars" />
     </button>
     <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
       {navTitles.map((res, index) => {
        return (
         <li key={index} className="mx-0 nav-item mx-lg-1">
          <a className="px-0 py-3 rounded nav-link px-lg-3" href={res.url}>
           {res.title}
          </a>
         </li>
        );
       })}
      </ul>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default Navbar;

import React from 'react'
import AboutContent from './components/AboutContent'
import Divider from './components/Divider'

function About() {
 return (
  <div>
   <section className="mb-0 text-white page-section bg-primary" id="about">
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="text-center text-white page-section-heading text-uppercase">About</h2>
            {/* Icon Divider*/}
            <Divider cName="divider-light"/>
            {/* About Section Content*/}
            <div className="row">
              <AboutContent cName="ms-auto" content="Freelancer is a free bootstrap theme created by Start Bootstrap. The
     download includes the complete source files including HTML, CSS, and
     JavaScript as well as optional SASS stylesheets for easy customization."/>
              <AboutContent cName="me-auto" content="You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"/>
            </div>
            {/* About Section Button*/}
            <div className="mt-4 text-center">
              <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                <i className="fas fa-download me-2" />
                Free Download!
              </a>
            </div>
          </div>
        </section>
  </div>
 )
}

export default About

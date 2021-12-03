import React from "react";
import Divider from "./components/Divider";
import {useFormik } from 'formik';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phone: '',
        message: ''
    },
    validate: values => {
      const errors = {};

      if(!values.name) {
        errors.name = 'Required';
      }

      if(!values.email) {
        errors.email = 'Required';
      }

      if(!values.phone) {
        errors.phone = 'Required';
      }

      if(!values.message) {
        errors.message = 'Required';
      }

      return errors;
    },
    onSubmit: values => {
      console.log('🟢🟢🟢', values);
    }
  })
 return (
  <div>
   <section className="page-section">
    <div className="container">
     <h2 className="mb-0 text-center page-section-heading text-uppercase text-secondary">
      Contact Me
     </h2>
     <Divider />
     <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
       <form onSubmit={formik.handleSubmit}>
        <div className="mb-3 form-floating">
         <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter your name..."
         />
         <label htmlFor="name">Full name</label>
         {formik.errors.name ? <div className="">{formik.errors.name}</div> : null}
        </div>
        <div className="mb-3 form-floating">
         <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="name@example.com"
         />
         <label htmlFor="email">Email address</label>
         {formik.errors.email ? <div className="">{formik.errors.email}</div> : null}
         <div className="invalid-feedback">
          Email is not valid.
         </div>
        </div>
        <div className="mb-3 form-floating">
         <input
          className="form-control"
          id="phone"
          type="tel"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="(123) 456-7890"
         />
         <label htmlFor="phone">Phone number</label>
         {formik.errors.phone ? <div className="">{formik.errors.phone}</div> : null}
        </div>
        <div className="mb-3 form-floating">
         <textarea
          className="form-control"
          id="message"
          type="text"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Enter your message here..."
          style={{ height: "10rem" }}
          defaultValue={""}
         />
         <label htmlFor="message">Message</label>
         {formik.errors.message ? <div className="">{formik.errors.message}</div> : null}
        </div>
        <div className="d-none">
         <div className="mb-3 text-center text-danger">
          Error sending message!
         </div>
        </div>
        <button
         className="btn btn-primary btn-xl"
         type="submit"
        >
         Send
        </button>
       </form>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}

export default ContactForm;

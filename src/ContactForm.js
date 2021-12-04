import React from "react";
import Divider from "./components/Divider";
import { Formik } from "formik";
import * as Yup from 'yup';

function ContactForm() {
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
       <Formik
        initialValues={{
         name: "",
         email: "",
         phone: "",
         message: "",
        }}
        validate={(values) => {
         const errors = {};

         if (!values.name) {
          errors.name = "Required";
         }

         if (!values.email) {
          errors.email = "Required";
         }

         if (!values.phone) {
          errors.phone = "Required";
         }

         if (!values.message) {
          errors.message = "Required";
         }

         return errors;
        }}
        validationSchema = { Yup.object({
          email: Yup.string().email('Invalid Email Adress').required('Required')
        })}
        onSubmit={(values) => {
         console.log("🟢🟢🟢", values);
        }}
       >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur, getFieldProps }) => (
         <form onSubmit={handleSubmit}>
          <div className="mb-3 form-floating">
           <input
            className="form-control"
            id="name"
            name="name"
            type="text"
           {...getFieldProps('name')}
            placeholder="Enter your name..."
           />
           <label htmlFor="name">Full name</label>
           {touched.name && errors.name  ? (<div className="error">{errors.name}</div>) : null}
          </div>
          <div className="mb-3 form-floating">
           <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            {...getFieldProps('email')}
            placeholder="name@example.com"
           />
           <label htmlFor="email">Email address</label>
           {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
           <div className="invalid-feedback">Email is not valid.</div>
          </div>
          <div className="mb-3 form-floating">
           <input
            className="form-control"
            id="phone"
            type="tel"
            name="phone"
            {...getFieldProps('phone')}
            placeholder="(123) 456-7890"
           />
           <label htmlFor="phone">Phone number</label>
           {errors.phone && touched.phone ? <div className="error">{errors.phone}</div> : null}
          </div>
          <div className="mb-3 form-floating">
           <textarea
            className="form-control"
            id="message"
            type="text"
            name="message"
            {...getFieldProps('message')}
            placeholder="Enter your message here..."
            style={{ height: "10rem" }}
           />
           <label htmlFor="message">Message</label>
           {errors.message && touched.message ? (
            <div className="error">{errors.message}</div>
           ) : null}
          </div>
          <div className="d-none">
           <div className="mb-3 text-center text-danger">
            Error sending message!
           </div>
          </div>
          <button className="btn btn-primary btn-xl" type="submit">
           Send
          </button>
         </form>
        )}
       </Formik>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}

export default ContactForm;

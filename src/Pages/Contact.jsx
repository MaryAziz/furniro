import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Contact/Contact.module.css";
import * as yup from "yup";
import logo from "../../public/Meubel House_Logos-05.png";
import gps from '../../public/gps.png'
import phone from '../../public/phone.png'
import time from '../../public/time.png'

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const userSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    subject: yup.string(),
    message: yup.string().required("Message is required"),
  });

  async function testValidation() {
    try {
      await userSchema.validate(formData, { abortEarly: false });
      console.log("Validation passed");
      return true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          alert(`${error.path}: ${error.message}`);
        });
      }
      return false;
    }
  }

  async function onHandleSubmit(event) {
    event.preventDefault();
    const isValid = await testValidation();
    if (isValid) {
      setFormData({
        firstname: "",
        email: "",
        subject: "",
        message: "",
      });
      alert('Your message has been sent successfully!');
    }
  }

  function onHandleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <div className={styles.banner}>
        <img src={logo} alt="Logo" />
        <h1>Contact</h1>
        <div className={styles.Links}>
          <Link to="/">Home{" > "}</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <h2>Get In Touch With Us</h2>
      <p>
        For more information about our products & services, please feel free
        to drop us an email. Our staff is always here to help you out. Do
        not hesitate!
      </p>
      <div className={styles.main}>
        <div className={styles.contactdata}>
          <div className={styles.data}>
            <img className={styles.logo} src={gps} alt="GPS" />
            <div>
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className={styles.data}>
            <img className={styles.logo}src={phone} alt="Phone" />
            <div className={styles.moredata}>
              <h4>Phone</h4>
              <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className={styles.data}>
            <img className={styles.logo} src={time} alt="Working Time" />
            <div>
              <h4>Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form onSubmit={onHandleSubmit}>
          <div className={styles.formdata}>
            <h5 htmlFor="firstname">Your Name</h5>
            <input
              required
              className={styles.forminputs}
              name="firstname"
              value={formData.firstname}
              onChange={onHandleChange}
              type="text"
            />
          </div>
          <div className={styles.divemail}>
            <h5 htmlFor="email">Email Address</h5>
            <input
              className={styles.forminputs}
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={onHandleChange}
              type="email"
            />
          </div>
          <div className={styles.text}>
            <h5 htmlFor="subject">Subject</h5>
            <input
              className={styles.forminputs}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={onHandleChange}
              placeholder="This is optional"
            />
          </div>
          <div>
            <h5 htmlFor="message">Message</h5>
            <textarea
              className={styles.forminputs}
              name="message"
              id="message"
              value={formData.message}
              onChange={onHandleChange}
              required
            >
              Hi! I’d like to ask about
            </textarea>
          </div>
          <button
            className={styles.submit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

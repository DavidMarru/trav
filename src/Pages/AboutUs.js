import React, { useState } from "react";
import Header from "./Header";
import Footer from "../Pages/Footer";
import "./ABOUTUSPAGECon/AboutUsPage.css";
import Tittle from "../Tittle";
import BACKGRAND from "../img/pexels-pixabay-86703.jpg"; // Updated path for background image

function AboutUsPage() {

    const [isError, setIsError] = useState(false);
    const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    countryRegion: "",
    message: "",
  });

  // State for error messages
  const [isErrors, setErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.firstName) {
      newErrors.firstName = "**First name is required.**";
    }

    // Validate second name
    if (!formData.secondName) {
      newErrors.secondName = "**Second name is required.**";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "**Please enter a valid email address (e.g., example@gmail.com).**";
    }

    // Validate phone number
    const phonePattern = /^\+\d+$/; // Must start with + followed by numbers
    if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "**Please enter a valid phone number (e.g., +1234567890).**";
    }

    // Validate country/region
    if (!formData.countryRegion) {
      newErrors.countryRegion = "**Country/Region is required.**";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "**Message is required.**";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      alert("Form submitted successfully!"); // You can replace this with actual form submission logic
      // Reset the form or handle successful submission
      setFormData({
        firstName: "",
        secondName: "",
        email: "",
        phoneNumber: "",
        countryRegion: "",
        message: "",
      });
      setErrors({});
      setIsError(true);
    }

  };

  return (
    <div className="AboutUsPageBody">
      <div className="ThingsToDo-Background">
        <div className="overLayer"></div>
        <img className="ThingsBackground" src={BACKGRAND} alt="pixabay" />
      </div>

      <div className="wrapper">
        <div className="M5Rem">
          <Header />
        </div>
        <div className="AboutUsPage-Tittle">
          <Tittle TittleName={"AboutUsPage"} />
        </div>
        <div className="Page-gap">
          <div className="ourMission">
            <div className="textContainer">
              <div className="ourMission1">
                <div className="ourMission2">OUR MISSION</div>
                <div className="loremIpsumDolor">
                  Lorem ipsum dolor sit amet consectetur. Et pulvinar at tincidunt pellentesque mattis enim sit.
                  Lobortis auctor in rhoncus vestibulum. Donec imperdiet lectus at sit pretium tellus. Eget purus
                  venenatis lectus tincidunt non. Lorem ipsum dolor sit amet consectetur. Et pulvinar at tincidunt
                  pellentesque mattis enim sit. Lobortis auctor in rhoncus vestibulum. Donec imperdiet lectus at sit
                  pretium tellus. Eget purus venenatis lectus tincidunt non.
                </div>
              </div>
            </div>
            <div className="imgContainer">
              <div className="imgContainerChild" />
            </div>
          </div>
          <div className="ourMission">
            <div className="textContainer">
              <div className="ourMission1">
                <div className="ourMission2">WHO ARE WE & WHY US?</div>
                <div className="loremIpsumDolor">
                  Lorem ipsum dolor sit amet consectetur. Et pulvinar at tincidunt pellentesque mattis enim sit.
                  Lobortis auctor in rhoncus vestibulum. Donec imperdiet lectus at sit pretium tellus. Eget purus
                  venenatis lectus tincidunt non. Lorem ipsum dolor sit amet consectetur. Et pulvinar at tincidunt
                  pellentesque mattis enim sit. Lobortis auctor in rhoncus vestibulum. Donec imperdiet lectus at sit
                  pretium tellus. Eget purus venenatis lectus tincidunt non.
                </div>
              </div>
            </div>
            <div className="imgContainer">
              <div className="imgContainerChild" />
            </div>
          </div>

          <div className="contactConta">
            <div className="questions">
              <h2 className="haveQuestions">HAVE QUESTIONS?</h2>
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
              {/* First name field */}
              <div className="firstname">
                <label className={`firstName ${isError ? '' : 'active'}`} htmlFor="Input"></label>
                <input
                  type="text"
                  id="Input"
                  name="firstName"
                  placeholder={isErrors.firstName ? isErrors.firstName : "Enter your first name"}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Second name field */}
              <div className="secondname">
                <label className={`secondname ${isError ? '' : 'active'}`} htmlFor="Input"></label>
                <input
                  type="text"
                  id="Input"
                  name="secondName"
                  placeholder={isErrors.secondName ? isErrors.secondName : "Enter your second name"}
                  value={formData.secondName}
                  onChange={handleChange}
                />
              </div>

              {/* Email field */}
              <div className="email">
                <label className={`email ${isError ? '' : 'active'}`} htmlFor="Input"></label>
                <input
                  type="email"
                  id="Input"
                  name="email"
                  placeholder={isErrors.email ? isErrors.email : "Enter your email"}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Info subheader */}
              <div className="subHeader">
                <p className="provideUsSome">Provide us some info so we can get back to you.</p>
              </div>

              {/* Phone number field */}
              <div className="phoneNumber">
                <label className={`phoneNumber ${isError ? '' : 'active'}`} htmlFor="Input"></label>
                <input
                  type="tel"
                  id="Input"
                  name="phoneNumber"
                  placeholder={isErrors.phoneNumber ? isErrors.phoneNumber : "Enter your phone number"}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Country/Region field */}
              <div className="countryregion">
                <label className="countryregion" htmlFor="Input"></label>
                <input
                  type="text"
                  id={`Input`}
                  name="countryRegion"
                  placeholder={isErrors.countryRegion ? isErrors.countryRegion : "Enter your country or region"}
                  value={formData.countryRegion}
                  onChange={handleChange}
                />
              </div>

              {/* Message field */}
              <div className="messagebox">
                <label className="yourMessageHere" htmlFor="MInput"></label>
                <textarea
                  id="MInput"
                  name="message"
                  rows="4"
                  placeholder={isErrors.message ? isErrors.message : "Write your message here"}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit button */}
              <div className="fullbutton" onClick={handleSubmit}>
                <button type="submit" className="algeria" >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUsPage;

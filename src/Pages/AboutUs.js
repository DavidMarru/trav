import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ABOUTUSPAGECon/AboutUsPage.css";
import Tittle from "../Tittle";
import BACKGRAND from "../img/pexels-pixabay-86703.jpg";
import WhyUsImg from "../img/AboutUs/customer_service_in_a_office_.jpg";
import MissionImg from "../img/AboutUs/misson.jpg";
import PhoneNav from "./PhoneNav"

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
      newErrors.email =
        "**Please enter a valid email address (e.g., example@gmail.com).**";
    }

    // Validate phone number
    const phonePattern = /^\+\d+$/; // Must start with + followed by numbers
    if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "**Please enter a valid phone number (e.g., +1234567890).**";
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
      <PhoneNav />
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
                  <p>
                  At WORLD NAVIGATION, we’re passionate about making dream
                  destinations accessible. We know some of the world’s most
                  remarkable places aren’t easy to reach, and we’re here to
                  help. Whether it's a once-in-a-lifetime honeymoon, a trip with
                  close friends, or a unique getaway, our mission is to provide
                  seamless, unforgettable travel experiences that make lasting
                  memories.
                  </p>
                </div>
              </div>
            </div>
            <div className="imgContainer">
              <div className="imgContainerChild">
                <img
                  src={[MissionImg]}
                  alt="MissionImg"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.15rem", // Consistent with existing styles
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ourMission">
            <div className="textContainer">
              <div className="ourMission1">
                <div className="ourMission2">WHO ARE WE & WHY US?</div>
                <div className="loremIpsumDolor">
                  WORLD NAVIGATION was built by travelers, for travelers. We
                  understand the excitement—and challenges—of planning the
                  perfect trip. Our team is dedicated to simplifying travel and
                  event planning, from personalized itineraries to memorable
                  gatherings. We’re here to make your travel dreams a reality,
                  wherever they may lead. Let’s navigate the world together.{" "}
                </div>
              </div>
            </div>
            <div className="imgContainer">
              <div className="imgContainerChild">
                <img
                  src={[WhyUsImg]}
                  alt="WhyUsImg"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.15rem", // Consistent with existing styles
                  }}
                />
              </div>
            </div>
          </div>

          <div className="contactConta">
            <div className="questions">
              <h2 className="haveQuestions">HAVE QUESTIONS?</h2>
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
            <div className="subHeader">
                <p className="provideUsSome">
                  Provide us some info so we can get back to you.
                </p>
              </div>

              {/* First name field */}
              <div className="firstname">
                <label
                  className={`firstName ${isError ? "" : "active"}`}
                  htmlFor="Input"
                ></label>
                <input
                  type="text"
                  id="Input"
                  name="firstName"
                  placeholder={
                    isErrors.firstName
                      ? isErrors.firstName
                      : "Enter your first name"
                  }
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Second name field */}
              <div className="secondname">
                <label
                  className={`secondname ${isError ? "" : "active"}`}
                  htmlFor="Input"
                ></label>
                <input
                  type="text"
                  id="Input"
                  name="secondName"
                  placeholder={
                    isErrors.secondName
                      ? isErrors.secondName
                      : "Enter your second name"
                  }
                  value={formData.secondName}
                  onChange={handleChange}
                />
              </div>

              {/* Email field */}
              <div className="email">
                <label
                  className={`email ${isError ? "" : "active"}`}
                  htmlFor="Input"
                ></label>
                <input
                  type="email"
                  id="Input"
                  name="email"
                  placeholder={
                    isErrors.email ? isErrors.email : "Enter your email"
                  }
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Info subheader */}

              {/* Phone number field */}
              <div className="phoneNumber">
                <label
                  className={`phoneNumber ${isError ? "" : "active"}`}
                  htmlFor="Input"
                ></label>
                <input
                  type="tel"
                  id="Input"
                  name="phoneNumber"
                  placeholder={
                    isErrors.phoneNumber
                      ? isErrors.phoneNumber
                      : "Enter your phone number"
                  }
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
                  placeholder={
                    isErrors.countryRegion
                      ? isErrors.countryRegion
                      : "Enter your country or region"
                  }
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
                  placeholder={
                    isErrors.message
                      ? isErrors.message
                      : "Write your message here"
                  }
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit button */}
              <div className="fullbutton" onClick={handleSubmit}>
                <button type="submit" className="algeria">
                  Submit
                </button>
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

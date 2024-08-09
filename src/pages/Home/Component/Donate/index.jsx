import React, { useState } from "react";
import { Container } from "../../../../components/Container";
import DonateBanner from "../../../../assets/images/DonateBanner.png";
import Rectangle from "../../../../assets/images/Rectangle.png";
import "./Donate.css";
import emailjs from "emailjs-com";
import PopupMessage from "../../../../components/PopupMessage";
const Donate = () => {
  const [toName, setToName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (toName && email && !emailError) {
      const templateParams = {
        to_name: toName,
        from_name: "Ek Saath Team",
        message: "Thank you for your donation",
        reply_to: email,
      };
      setShowPopup(true);
      clearFileds();
    }else{
      alert("Please enter valid details");
    }

    // emailjs
    //   .send(
    //     "service_2ee0i4g", // replace with your EmailJS service ID
    //     "template_0onrr7p", // replace with your EmailJS template ID
    //     templateParams,
    //     "sdsO_VDTU6LWnohci" // replace with your EmailJS user ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Email successfully sent!", result.text);
    //       setShowPopup(true);
    //       clearFileds();
    //     },
    //     (error) => {
    //       console.log("Failed to send email.", error.text);
    //       alert("Failed to send email." + error.text);
    //     }
    //   );
  };
  const clearFileds = () => {
    document.querySelectorAll(".donate-input").forEach((input) => {
      input.value = "";
    });
    setEmail("");
  };
  return (
    <section id="donate">
      <Container>
        <div className="mt-[398px] flex-row flex flex-wrap">
          {showPopup && (
            <PopupMessage
              firstName={toName}
              onCloseCallback={() => setShowPopup(false)}
            />
          )}
          <div className="w-[40%] max-lg:w-[100%] pr-[36px]">
            <img
              src={DonateBanner}
              alt="donate"
              className="w-[100%] object-contain"
            />
          </div>
          <div className="w-[60%] max-lg:w-[100%]">
            <div className="p-[36px]">
              <div className="flex justify-end">
                <img
                  src={Rectangle}
                  alt="Rectangle"
                  className="w-[165px] object-contain"
                />
              </div>
              <h2 className="donate-title">Donate </h2>
              <p className="donate-description">
                Support us in the mission of creating an environment free from
                ignorance and exploitation by developing an eco-friendly
                environment through plantation of trees in urban and rural
                areas, by eradicating plastic pollution that harms human,
                aquatic, and wildlife, and to maximize reforestation to protect
                wildlife and bring people closer to nature.
              </p>
              <div style={{ marginTop: 40 }}>
                <input
                  type="text"
                  className="donate-input"
                  placeholder="Full Name"
                  onChange={(e) => setToName(e.target.value)}
                />
                <div>
                  <input
                    type="text"
                    className="donate-input mt-[19px]"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                </div>
                <input
                  type="text"
                  className="donate-input mt-[19px]"
                  placeholder="Mobile Number"
                />
                <div className="flex justify-between mt-[19px]">
                  <button className="donate-button" onClick={sendEmail}>
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Donate;

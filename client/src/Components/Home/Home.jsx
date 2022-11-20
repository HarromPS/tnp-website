import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.css";
import Social from "./Social";
import Navbar from "./Navbar";
import Hero from "./Hero"; // Home
import Achievements from "./Achievements";
import Counts from "./Counts";
import Whyus from "./Why-us";
import Departments from "./Departments";
import Placements from "./Placements/Placements";
import Events from "./Events/Events";
import AboutInfo from "./AboutInfo"; //About
import Director from "./Director";
import NewTeam from "./NewTeam"; //NewTeam
import Team from "./Team";
// import Charts from "./Charts";
// import Alumni from "./Alumni";
import Footer from "./Footer";
import Help from "./Help";

const Homepage = () => {
  useEffect(() => {
    document.title = "Training & Placement, SGGSIE&T Nanded";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Achievements />
      <Counts />
      <Whyus />
      <Departments />
    </>
  );
};

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 class="homepage-headings">About Us</h1>
      <AboutInfo />
      <Director />
      <center>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Zk4T5Bw7Y8TC5bX43BwRH6hP6PB7fG3F/view?usp=sharing"
        >
          <button
            style={{
              width: "200px",
              backgroundColor: "var(--primary-blue)",
              marginTop: "32px",
              marginBottom: "32px",
              border: "none",
              fontFamily: "var(--rlwy)",
              padding: "8px",
              borderRadius: "8px",
              color: "#fff",
            }}
          >
            TPO Flyer
          </button>
        </a>
      </center>
    </>
  );
};

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 class="homepage-headings">Contact Us</h1>
      <NewTeam />
      <Team />
    </>
  );
};

export default function Home() {
  const scrollUpRef = useRef();
  const [isButtonHidden, setIsButtonHidden] = useState(true);

  useEffect(() => {
    document.title = "Training & Placement Cell, SGGSIE&T Nanded";
    window.scrollTo(0, 0);
    window.addEventListener("scroll", buttonDisplay);
  }, []);

  const buttonDisplay = () => {
    if (window.pageYOffset > 500) {
      setIsButtonHidden(false);
    } else {
      setIsButtonHidden(true);
    }
  };

  const scrollToTop = () => {
    scrollUpRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Social />
      <div ref={scrollUpRef}> </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/gethelp" element={<Help />} /> */}
      </Routes>
      <ToTop buttonStatus={isButtonHidden} scrollFunction={scrollToTop} />
      <Footer />
    </>
  );
}

const ToTop = (props) => {
  return (
    <div className="totop">
      <button
        className={props.buttonStatus ? "totophidden" : "totopbtn"}
        onClick={props.scrollFunction}
      >
        ^
      </button>
    </div>
  );
};

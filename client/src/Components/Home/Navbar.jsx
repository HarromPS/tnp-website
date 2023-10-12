import React, { useLayoutEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import TNPLogo from "../../img/TNP LOGO.png";
import SGGSLogo from "../../img/sggs.png";
// import Translate from "./Translate";

// using gsap library to animate the containers, texts, etc
import { gsap } from "gsap";
import { AdminContext } from "../../App";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


const isLoggedIn = true;
const username = "User";

const LoginButton = () => {
  if (isLoggedIn) {
    return (
      <>
        <div className="loginbutton">
          <div style={{ marginRight: "10px" }}>
            <div style={{ fontSize: "9px" }}>Welcome,</div>
            <div style={{ fontSize: "16px" }}>{username}</div>
          </div>
          <div className="loginimg"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link id="navLink" to="/user/login">
          <div className="loginbutton">
            <div>Login</div>
          </div>
        </Link>
      </>
    );
  }
};

export default function Navbar() {
  // Register ScrollTrigger with GSAP
  // gsap.registerPlugin(ScrollTrigger);

  const rootElement = useContext(AdminContext);

  const { root } = rootElement;

  // using layout effect hook to run animations just after DOM renders
  useLayoutEffect(() => {

    // creating gsap context to apply animations
    let ctx = gsap.context(() => {
      // selector ".logo-text"
      gsap.from("#navbar-brand", {
        x: -450,
        duration: 2,
        scale: 1,
        scrollTrigger: {
          // on target element
          trigger: "#navbar-brand ",

          // on what we are scrolling
          scroller: "navbar",

          markers: true,
          start: "top 30%",
          end: "top: 70%"

        }
      });

    }, root);

    return ()=> ctx.revert();
  },[]);

  return (
    <>
      <BSNavbar className="navbar" bg="light" sticky="top" ref={root}>
        <Container>
          <BSNavbar.Brand id="navbar-brand" href="/">
            <img className="logo-img" src={SGGSLogo} alt="" />
            <span className="divider"></span>
            <img className="logo-img logo-mobile" src={TNPLogo} alt="" />
            &nbsp;
            <span className="logo-text">
              SHRI GURU GOBIND SINGHJI INSTITUTE OF<br />
              ENGINEERING & TECHNOLOGY{" "}

            </span>
          </BSNavbar.Brand>
        </Container>
        <Container >
          <Nav className="desktop-navmenu ms-auto">
            <Link className="navLink" to="/">
              Home
            </Link>
            {/* <Nav.Link id="navLink" href="#">Events</Nav.Link> */}
            <Link className="navLink" to="/placements">
              Placements
            </Link>
            <Link className="navLink" to="/events">
              Events
            </Link>
            <Link className="navLink" to="/aboutus">
              About Us
            </Link>
            <Link className="navLink" to="/contactus">
              Contact Us
            </Link>
            {/* <Link className="navLink" to="">
              <Translate />
            </Link> */}

          </Nav>
          <NavDropdown
            title={
              <FontAwesomeIcon className="mobile-nav-icon" icon={faBars} />
            }
            className="mobile-navmenu ms-auto"
            drop="start"
          >
            <NavDropdown.Item>
              <Link id="navLink" to="/">
                Home
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navLink" to="/placements">
                Placements
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navLink" to="/events">
                Events
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navLink" to="/aboutus">
                About Us
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link id="navLink" to="/contactus">
                Contact Us
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </BSNavbar>
    </>
  );
}

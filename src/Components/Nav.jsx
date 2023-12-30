import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../netflix_logo.png";
import profile from "../netflix_avatar.png";

function Nav() {

  const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt="Netflix_logo" className="netflix_logo" />
      <img src={profile} alt="Netflix_avatar" className="profile_avatar" />
    </div>
  );
}

export default Nav;

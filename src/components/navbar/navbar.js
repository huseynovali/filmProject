import React from "react";
import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ setOpen, openBar }) {
  return (
    <div className="header position-sticky top-0" style={{zIndex:"8"}}>
      <div className="navbar">
        <h1>MustSee</h1>
        {openBar ? (
          <AiOutlineClose
            style={{ zIndex: "10" }}
            className="fs-4 text-white d-lg-none me-5 "
            onClick={() => setOpen(!openBar)}
          />
        ) : (
          <AiOutlineMenu
            className="fs-4 text-white d-lg-none me-5 "
            onClick={() => setOpen(!openBar)}
          />
        )}
      </div>
    </div>
  );
}

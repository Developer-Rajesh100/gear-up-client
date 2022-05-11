import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <h2 className="background text-center">
        {" "}
        <strong>&#169; {new Date().getFullYear()}</strong>
      </h2>
    </footer>
  );
};

export default Footer;

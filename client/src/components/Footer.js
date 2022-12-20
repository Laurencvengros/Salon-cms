import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#706E51", size: "2em" }}>
        <footer className="footer">
          <div className="createdBy">
            <h4 className="createdBy">
              Created by:{" "}
              <a href="https://github.com/kelsieszost">Kelsie Szost,</a>
              <a href="https://github.com/laurencvengros">Lauren Cvengros</a>
              andn <a href="https://github.com/mwells012">Michaela Wells</a>
            </h4>
          </div>
          <div>
            <a className="footerIcon" href="https://github.com/kelsieszost">
              <FaGithub />
            </a>
          </div>
        </footer>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Footer;

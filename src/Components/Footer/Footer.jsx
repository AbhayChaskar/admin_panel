import React from 'react';
import { IoIosMail, IoIosCall } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram, FaRegCopyright, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-5 bg-light text-dark py-4 border-top">
      <div className="text-center">

        {/* Contact Info */}
        <div className="mb-3">
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex align-items-center">
              <IoIosMail size={24} className="me-2" />
              <span>abhayrc.521@gmail.com &nbsp;</span>
              <IoIosCall size={22} className="me-2" />
              <span>+91 9146704996</span>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="mb-3">
          <p className="mb-0 d-flex justify-content-center align-items-center flex-wrap">
            <FaRegCopyright size={16} className="me-2" />
            2025. Designed & Developed by&nbsp;
            <a
              href="https://www.linkedin.com/in/abhaychaskar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fw-bold text-decoration-none"
            >
              Abhay Chaskar
            </a>
          </p>
        </div>

        <div>
          <ul className="list-unstyled d-flex justify-content-center gap-4 mb-0">
            <li>
              <a
                href="https://github.com/AbhayChaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <BsGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhaychaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <GrLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Melvis47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
              >
                <FaYoutube size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abhay.rc_05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
              >
                <FaInstagram size={26} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

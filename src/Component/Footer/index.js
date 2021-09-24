import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
   return (
      <div className="grid wide ">
         {/* Logo */}
         <div className="col l-12 m-12 c-12">
            <div className="footer__container">
               <Link to="#" className="footer__item">
                  <img src="\images\tải xuống.png" alt="logo.png"></img>
                  <p className="footer__title">Covid News</p>
               </Link>
               <Link to="/" className="footer__item">
                  <p className="footer__title">Trang chủ</p>
               </Link>
               <Link to="/Gioi-thieu" className="footer__item">
                  <p className="footer__title">Giới thiệu</p>
               </Link>
            </div>
         </div>
      </div>
   );
};
export default Footer;

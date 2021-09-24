import React, { useState } from "react";
import Contact from "../../Component/Contact";
import InfoProject from "../../Component/InfoProject";
import "./AboutMe.css";
const AboutMe = () => {
   return (
      <div className="about">
         <div className="about__bg">
            <img src="\images\2005.2.jpg" className=""></img>
            <div className="about__title">{/* <p>Giới thiệu</p> */}</div>
         </div>
         <div className="grid wide">
            <div className="row">
               <div className="col l-12 m-12 c-12">
                  <Contact></Contact>
               </div>
               <div className="col l-12 m-12 c-12">
                  <InfoProject></InfoProject>
               </div>
            </div>
         </div>
      </div>
   );
};
export default AboutMe;

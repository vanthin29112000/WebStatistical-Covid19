import React from "react";
import "./Contact.css";
const Contact = () => {
   return (
      <div className="about__container">
         <div className="about__inf">
            <div className="about__inf-avatar">
               <div className="avatar">
                  <img src="\images\242529417_2986427424971305_1065796123396848195_n.jpg"></img>
               </div>
            </div>
            <div className="info">
               <p className="name">Phan Văn Thìn</p>
            </div>
            <div className="contact">
               <p className="contact__title">Liên hệ</p>
               <div className="list-contact">
                  <a
                     href="https://www.facebook.com/profile.php?id=100008122305731"
                     className="contact__facebook contact-link"
                  >
                     <i className="fab fa-facebook-square"></i>
                     <p className="info-contact">Phan Văn Thìn</p>
                  </a>

                  <a
                     href="https://github.com/vanthin29112000"
                     className="contact__github contact-link"
                  >
                     <i className="fab fa-github-square"></i>
                     <p className="info-contact">vanthin29112000</p>
                  </a>
                  <a className="contact__gmail contact-link">
                     <i className="fas fa-envelope"></i>
                     <p className="info-contact">vanthin1203@gmail.com</p>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Contact;

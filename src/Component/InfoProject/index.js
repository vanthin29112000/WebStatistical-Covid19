import React from "react";
import "./InfoProject.css";
const InfoProject = () => {
   return (
      <div className="grid wide">
         <div className="row no-gutters box-shadow ">
            <div className="col l-6 m-12 c-12">
               <div className="info-project-bg">
                  <img src="\images\covid19.jpg"></img>
               </div>
            </div>
            <div className="col l-6 m-12 c-12">
               <div className="info-project__container">
                  <div className="info-project">
                     <div className="reason">
                        <p className="reason__title">
                           Tại sao lại lựa chọn dự án này ?
                        </p>
                        <p className="reason__inf">
                           Dự án này được thực hiện vì mục tiêu nâng cao ý thức
                           cộng đồng về căn bệnh Covid-19. Ngoài ra cho mọi
                           người thêm cái nhìn khách quan về sự lây nhiễm một
                           cách chóng mặt của cơn đại dịch này !!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="row no-gutters box-shadow source">
            <div className="col l-6 m-12 c-12">
               <div className="info-project__container">
                  <div className="info-project">
                     <div className="reason">
                        <p className="source__title">Thông tin dự án</p>
                        <div className="source__inf">
                           <div className="language">
                              <div className="language__icon">
                                 <i className="fas fa-globe"></i>
                              </div>
                              <div>
                                 <p className="title">Ngôn ngữ </p>
                                 <p>HTML, js</p>
                              </div>
                           </div>
                           <div className="library">
                              <div className="library__icon">
                                 <i className="fas fa-file-code"></i>
                              </div>
                              <div>
                                 <p className="title">Thư viện</p>
                                 <p>React</p>
                              </div>
                           </div>
                           <div className="API">
                              <div className="API__icon">
                                 <i className="fas fa-database"></i>
                              </div>
                              <div>
                                 <p className="title">API</p>
                                 <p>
                                    Highchart:{" "}
                                    <a href="https://www.highcharts.com">
                                       https://www.highcharts.com
                                    </a>
                                 </p>
                                 <p>
                                    Data:{" "}
                                    <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712">
                                       https://getpostman.com
                                    </a>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col l-6 m-0 c-0">
               <div className="info-project-bg box-shadow">
                  <img src="\images\images.png"></img>
               </div>
            </div>
         </div>
      </div>
   );
};
export default InfoProject;

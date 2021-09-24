import React, { useEffect } from "react";
import "./Page5k.css";
const ThongDiep5K = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="td-5k">
         <div className="wide grid">
            <div className="row">
               <div className="col l-12 m-12 c-12">
                  <div className="td-5k__title">
                     <p className="title">
                        CHUNG SỐNG AN TOÀN VỚI ĐẠI DỊCH COVID - 19{" "}
                     </p>
                     <p className="source__td-5k">(Theo bộ Y Tế)</p>
                  </div>
               </div>
               <div className="col l-12 m-12 c-12">
                  <div className="td-5k__container">
                     <div className="td td-left khautrang">
                        <p className="td__title">
                           <p>K</p>HẨU TRANG
                        </p>
                        <div className="td__info-left">
                           <p>
                              <span className="highline">
                                 Đeo khẩu trang vải
                              </span>{" "}
                              thường xuyên tại nơi công cộng, nơi tập trung đông
                              người
                           </p>
                           <p>
                              <span className="highline">
                                 Đeo khẩu trang y tế
                              </span>{" "}
                              tại các cơ sở y tế, khu cách ly
                           </p>
                        </div>
                     </div>
                     <div className="td td-right khukhuan">
                        <p className="td__title td__title-right">
                           <p>K</p>HỬ KHUẨN
                        </p>
                        <div className="td__info-right">
                           <p>
                              <span className="highline">
                                 Rửa tay thường xuyên
                              </span>{" "}
                              bằng xà phòng hoặc dung dịch sát khuẩn
                           </p>
                           <p>
                              <span className="highline">
                                 Vệ sinh các bề mặt
                              </span>{" "}
                              vật dụng thường xuyên tiếp xúc
                           </p>
                           <p>
                              <span className="highline">
                                 Giữ vệ sinh, lau rửa
                              </span>{" "}
                              và để nhà cửa thông thoáng
                           </p>
                        </div>
                     </div>
                     <div className="td td-left khoangcach">
                        <p className="td__title">
                           <p>K</p>HOẢNG CÁCH
                        </p>
                        <div className="td__info-left">
                           <p>Giữ khoảng cách khi tiếp xúc với người khác</p>
                        </div>
                     </div>
                     <div className="td td-right khongtutap">
                        <div className="td__title td__title-right">
                           <p>K</p>HÔNG TỤ TẬP
                        </div>
                        <p className="td__info-right">
                           Không tụ tập nơi đông người
                        </p>
                     </div>
                     <div className="td khaibaoyte">
                        <p className="td__title">
                           <p>K</p>HAI BÁO Y TẾ
                        </p>
                        <div className="td__info">
                           <p>
                              Thực hiện khai báo y tế trên{" "}
                              <a href="https://play.google.com/store/apps/details?id=com.vnptit.innovation.ncovi&hl=en&gl=US">
                                 App NCOVI
                              </a>
                           </p>
                           <p>
                              Khi có dấu hiệu SỐT, HO, KHÓ THỞ gọi dường dây
                              nóng <a href="#">1900 9095</a> hoặc cơ quan y tế
                              địa phương để được hướng dẫn khám chữa bệnh an
                              toàn
                           </p>
                           <p>
                              Cài đặt ứng dụng Bluezone tại địa chỉ{" "}
                              <a href="https://www.bluezone.gov.vn">
                                 https://www.bluezone.gov.vn
                              </a>{" "}
                              để được khai báo nguy cơ lây nhiễm COVID-19
                           </p>
                        </div>
                     </div>
                     <div className="circle-td-5k">
                        <div className="circle-td-5k__title">
                           <p>Thông điệp</p>
                           <p className="circle-td-5k__info">5K</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default ThongDiep5K;

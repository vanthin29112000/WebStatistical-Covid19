import React from "react";
import "./Statistical.css";
const Statistical = ({ data }) => {
   if (data.length === 0) return null;
   const dataToDay = data[data.length - 2];
   const dataTomorrow = data[data.length - 3];
   const formatter = new Intl.NumberFormat();
   return (
      <div className="statistical">
         <div className="statistical_item case">
            <p className="statistical_item-title">Số ca nhiễm</p>
            <div className="statistical_item-info">
               <p className="amount">{formatter.format(dataToDay.Confirmed)}</p>
               {dataToDay.Confirmed - dataTomorrow.Confirmed !== 0 ? (
                  <p className="change decrease danger">
                     <i className="fas fa-arrow-right "></i>
                     {formatter.format(
                        dataToDay.Confirmed - dataTomorrow.Confirmed
                     )}
                     (
                     {formatter.format(
                        (dataToDay.Confirmed - dataTomorrow.Confirmed) / 100
                     )}
                     %)
                  </p>
               ) : (
                  <p className="change increase default">
                     <i className="fas fa-arrow-right"></i>0%
                  </p>
               )}
            </div>
         </div>

         <div className="statistical_item death">
            <p className="statistical_item-title">Số ca tử vong</p>
            <div className="statistical_item-info">
               <p className="amount">{formatter.format(dataToDay.Deaths)}</p>
               {dataToDay.Deaths - dataTomorrow.Deaths !== 0 ? (
                  <p className="change decrease danger">
                     <i className="fas fa-arrow-right "></i>
                     {formatter.format(dataToDay.Deaths - dataTomorrow.Deaths)}(
                     {formatter.format(
                        (dataToDay.Deaths - dataTomorrow.Deaths) / 100
                     )}
                     %)
                  </p>
               ) : (
                  <p className="change increase default">
                     <i className="fas fa-arrow-right"></i>0%
                  </p>
               )}
            </div>
         </div>

         <div className="statistical_item recovered">
            <p className="statistical_item-title">Số ca hồi phục</p>
            <div className="statistical_item-info">
               <p className="amount">{formatter.format(dataToDay.Active)}</p>
               {dataToDay.Active - dataTomorrow.Active !== 0 ? (
                  <p className="change decrease default">
                     <i className="fas fa-arrow-right "></i>
                     {formatter.format(dataToDay.Deaths - dataTomorrow.Deaths)}(
                     {formatter.format(
                        (dataToDay.Deaths - dataTomorrow.Deaths) / 100
                     )}
                     %)
                  </p>
               ) : (
                  <p className="change increase default">
                     <i className="fas fa-arrow-right"></i>0%
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};
export default Statistical;

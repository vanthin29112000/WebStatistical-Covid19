import moment from "moment";
import React, { useEffect, useState } from "react";
import HighMap from "../../Layout/HighMap";
import Loading from "../../Layout/Loading";
import getReport from "../../Service/Report";
import "./HomePage.css";
const HomePage = () => {
   const [reportCountriesToDay, setReportCountriesToDay] = useState([]);
   const [reportGlobalToday, setReportGlobalToday] = useState([]);
   const [selectionMap, setSelectionMap] = useState("TotalConfirmed");
   const [nameMap, setNameMap] = useState("ca nhiễm bệnh");
   const [colorAxis, setColorAxis] = useState([
      [0, "#95DCF4"],
      [0.5, "#54CBF2"],
      [1, "#00ACE3"],
      [1.5, "#008EBC"],
      [2, "#007092"],
   ]);
   const [isLoading, setIsLoading] = useState(true);
   const formatter = new Intl.NumberFormat();

   useEffect(() => {
      window.scrollTo(0, 0);
      if (reportCountriesToDay.length === 0) {
         setIsLoading(true);
         getReportByCountryToday();
         setIsLoading(false);
      }
   }, [isLoading]);

   const getReportByCountryToday = async () => {
      const report = await getReport.byCountryToDay();
      setReportCountriesToDay(report.data.Countries);
      setReportGlobalToday(report.data.Global);
   };

   const onChangeMap = (e) => {
      const { value } = e.target;

      switch (value) {
         case "death": {
            setSelectionMap("TotalDeaths");
            setNameMap("ca tử vong");
            setColorAxis([
               [0, "#E2A786"],
               [0.5, "#E08D5E"],
               [1.5, "#D86422"],
               [2, "#BB551B"],
               [2.5, "#994414"],
            ]);
            break;
         }
         case "case": {
            setSelectionMap("TotalConfirmed");
            setNameMap("ca nhiễm bệnh");
            setColorAxis([
               [0, "#95DCF4"],
               [0.5, "#54CBF2"],
               [1, "#00ACE3"],
               [1.5, "#008EBC"],
               [2, "#007092"],
            ]);
            break;
         }
         case "recovered": {
            setSelectionMap("TotalRecovered");
            setNameMap("ca chữa khỏi");
            setColorAxis([
               [0, "#A3E5B7"],
               [0.5, "#67D58C"],
               [1.5, "#26BE73"],
               [2, "#0F9B38"],
               [2.5, "#08732D"],
            ]);
            break;
         }
         default: {
         }
      }
   };
   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="grid wide">
         <div className="row">
            <div className="col l-12 m-12 c-12">
               <div className="highmap-world">
                  <div className="highmap-world__title">
                     <p>
                        Bản đồ số {nameMap} trên toàn thế giới{" "}
                        <p>
                           {moment(reportGlobalToday.Date).format("DD/MM/YYYY")}
                        </p>
                     </p>
                  </div>
                  <HighMap
                     countryId="World"
                     height="400"
                     data={reportCountriesToDay}
                     objSelection={selectionMap}
                     nameMap=""
                     nameItem={`Tồng số ${nameMap}`}
                     colorAxis={colorAxis}
                  ></HighMap>
                  <div className="highmap-world__option">
                     <div className="selection-map">
                        <label htmlFor="choseHighMap" className="title">
                           Bản đồ những ca :
                        </label>
                        <select
                           id="choseHighMap"
                           onChange={onChangeMap}
                           value="case"
                        >
                           <option value="case">Nhiễm bệnh</option>
                           <option value="death">Tử vong</option>

                           <option value="recovered">Khỏi bệnh</option>
                        </select>
                     </div>
                     <div className="statistical-world">
                        <div className=" newcomfirm">
                           <p className="title">Tổng số ca bị nhiễm</p>
                           <p className="amount">
                              {formatter.format(
                                 reportGlobalToday.TotalConfirmed
                              )}{" "}
                              (+
                              {formatter.format(reportGlobalToday.NewConfirmed)}
                              )
                           </p>
                        </div>
                        <div className="newdeath">
                           <p className="title">Tổng số ca tử vong</p>
                           <p className="amount">
                              {formatter.format(reportGlobalToday.TotalDeaths)}{" "}
                              (+{formatter.format(reportGlobalToday.NewDeaths)})
                           </p>
                        </div>
                        <div className="newrecovered">
                           <p className="title">Tổng số ca được chữa khỏi</p>
                           <p className="amount">
                              {formatter.format(
                                 reportGlobalToday.TotalRecovered
                              )}{" "}
                              (+
                              {formatter.format(reportGlobalToday.NewRecovered)}
                              )
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default HomePage;

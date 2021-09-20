import React, { useEffect, useState } from "react";
import "../../Layout/Grid-system/GridSystem.css";
import HightCharts from "../../Layout/HighCharts";
import NavBar from "../../Layout/Navbar";
import Statistical from "../../Layout/Statistical";
import getCountries from "../../Service/CountriesAPI";
import getReport from "../../Service/Report";
import "./Webapp.css";
export const WebAPPCovid = () => {
   const [countries, setCountries] = useState([]);
   const [reportAllCountries, setreportAllCountries] = useState([]);
   const [countryId, setCountryId] = useState(["VN"]);

   useEffect(() => {
      onGetCountry();
      onGetReportCountry(countryId);
   }, [countryId]);

   const onGetCountry = async () => {
      const response = await getCountries();
      setCountries(response.data);
   };

   const onGetReportCountry = async (countryId) => {
      const reponse = await getReport.byCountryWithDay(countryId);
      setreportAllCountries(reponse.data);
   };

   return (
      <div className="webapp">
         <header className="navbar">
            <NavBar></NavBar>
         </header>
         <body className="highchart-container">
            <div className="grid wide">
               <div className="row ">
                  <div className="col l-8 m-12 c-12 ">
                     <div className="highchart">
                        <Statistical data={reportAllCountries}></Statistical>
                        <div className="chart">
                           <HightCharts data={reportAllCountries}></HightCharts>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </body>
      </div>
   );
};

import React, { useEffect, useState } from "react";
import Statistical from "../../Layout/Statistical";
import HightCharts from "../../Layout/HighCharts";
import HighMap from "../../Layout/HighMap";
import getCountries from "../../Service/CountriesAPI";
import getReport from "../../Service/Report";
import Loading from "../../Layout/Loading";

const CountryDetail = (props) => {
   const [countries, setCountries] = useState([]);
   const [reportAllCountries, setReportAllCountries] = useState([]);
   const [countryId, setCountryId] = useState(props.match.params.countryID);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
      onGetCountry();
      onGetReportCountry(countryId);
   }, [countryId, isLoading]);

   const onGetCountry = async () => {
      const response = await getCountries();
      setCountries(response.data);
   };

   const onGetReportCountry = async (countryId) => {
      const reponse = await getReport.byCountryWithDay(countryId);
      setReportAllCountries(reponse.data);
      setIsLoading(false);
   };

   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="grid wide">
         <div className="row ">
            <div className="col l-8 m-12 c-12 ">
               <div className="highchart">
                  {reportAllCountries.length !== 0 ? (
                     <>
                        <Statistical data={reportAllCountries}></Statistical>
                        <div className="chart">
                           <HightCharts data={reportAllCountries}></HightCharts>
                        </div>
                     </>
                  ) : (
                     <div className="notify-nondata">
                        <p>Không có dữ liệu từ quốc gia này</p>
                     </div>
                  )}
               </div>
            </div>

            <div className="col l-4 m-12 c-12">
               <div className="highmap">
                  <HighMap countryId={countryId} height="600"></HighMap>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CountryDetail;

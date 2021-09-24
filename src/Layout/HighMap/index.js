import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import "./HighMap.css";
highchartsMap(Highcharts);
const colors = Highcharts.getOptions().colors;

const mapOptions = (
   mapData,
   height,
   dataCountries,
   title,
   nameTitle,
   colorAxis
) => {
   return {
      chart: {
         height: height,
      },
      title: {
         text: title,
      },
      mapNavigation: {
         enabled: true,
      },

      colorAxis: {
         min: 0,
         stops: colorAxis,
      },

      legend: {
         layout: "vertical",
         align: "right",
         verticalAlign: "bottom",
      },

      series: [
         {
            // data: mapData.features.map((item, index) => {
            //    return {
            //       key: item.properties["hc-key"],
            //       value: index,
            //    };
            // }),
            data: dataCountries,
            mapData: mapData,
            joinBy: ["hc-key", "key"],
            name: nameTitle,
            //  states: {
            //     hover: {
            //        color: colors[2],
            //     },
            //  },
            //  dataLabels: {
            //     enabled: showDataLabels,
            //     formatter: function () {
            //        return mapKey === "custom/world" ||
            //           mapKey === "countries/us/us-all"
            //           ? this.point.properties && this.point.properties["hc-a2"]
            //           : this.point.name;
            //     },
            //  },
            //  point: {
            //     events: {
            //        // On click, look for a detailed map
            //        click: function () {
            //           var key = this.key;
            //           $("#mapDropdown option").each(function () {
            //              if (
            //                 this.value ===
            //                 "countries/" + key.substr(0, 2) + "/" + key + "-all.js"
            //              ) {
            //                 $("#mapDropdown").val(this.value).change();
            //              }
            //           });
            //        },
            //     },
            //  },
            //   },
            //   {
            //      type: "mapline",
            //      name: "Separators",
            //      data: Highcharts.geojson(mapGeoJSON, "mapline"),
            nullColor: "gray",
            //      showInLegend: false,
            //      enableMouseTracking: false,
         },
      ],
   };
};

const HighMap = ({
   countryId,
   height,
   data,
   objSelection,
   nameMap,
   nameItem,
   colorAxis,
}) => {
   const [mapData, setMapData] = useState([]);
   const [options, setOptions] = useState({});

   useEffect(() => {
      if (countryId !== "World" && countryId !== "") {
         const ID = countryId.toLowerCase();
         import(
            `@highcharts/map-collection/countries/${ID}/${ID}-all.geo.json`
         ).then((res) => {
            setMapData(res);
            const dataCountries = onGetMapData(res);
            setOptions(
               mapOptions(
                  res,
                  height,
                  dataCountries,
                  nameMap,
                  nameItem,
                  colorAxis
               )
            );
         });
      } else {
         if (countryId === "World") {
            import(`@highcharts/map-collection/custom/world.geo.json`).then(
               (res) => {
                  setMapData(res);
                  const dataCountries = onGetMapData(res, data, objSelection);
                  setOptions(
                     mapOptions(
                        res,
                        height,
                        dataCountries,
                        nameMap,
                        nameItem,
                        colorAxis
                     )
                  );
               }
            );
         }
      }
   }, [countryId, data, nameItem, colorAxis]);

   const onGetMapData = (mapData, data, objSelection) => {
      if (mapData.length === 0) return null;
      if (!data) {
         const totalCaseInCountry = mapData.features.map((item, index) => {
            return {
               key: item.properties["hc-key"],
               value: index,
            };
         });
         return totalCaseInCountry;
      } else {
         const totalCaseInCountry = mapData.features.map((item) => {
            let country = data.find((ele) => ele["CountryCode"] === item.id);
            if (country)
               return {
                  key: item.properties["hc-key"],
                  value: country[objSelection],
               };
            else {
               return {
                  key: item.properties["hc-key"],
                  value: null,
               };
            }
         });
         return totalCaseInCountry;
      }
   };

   return (
      <HighchartsReact
         highcharts={Highcharts}
         options={options}
         constructorType="mapChart"
      ></HighchartsReact>
   );
};

HighMap.defaultProps = {
   countryId: "vn",
   height: "500",
   data: [],
   objSelection: "",
   nameMap: "Bản đồ địa lý",
   nameItem: "Số thứ tự vị trí",
   colorAxis: [
      [0, "#95DCF4"],
      [0.5, "#54CBF2"],
      [1, "#00ACE3"],
      [1.5, "#008EBC"],
      [2, "#007092"],
   ],
};

HighMap.propTypes = {
   countryId: PropTypes.string,
   height: PropTypes.string,
   data: PropTypes.array,
   objSelection: PropTypes.string,
   nameMap: PropTypes.string,
   nameItem: PropTypes.string,
   colorAxis: PropTypes.array,
};
export default HighMap;

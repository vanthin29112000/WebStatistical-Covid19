import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import moment from "moment";

const colors = Highcharts.getOptions().colors;

const generateOptions = (data) => {
   const categories = data.map((item) =>
      moment(item.Date).format("DD/MM/YYYY")
   );
   const coutryName = data[0].Country;
   const startDay = categories[0];
   const toDay = categories[categories.length - 1];

   return {
      chart: {
         type: "spline",
         height: "408",
      },

      legend: {
         symbolWidth: 40,
      },

      title: {
         text: `Biểu đồ Covid-19 ${coutryName}(${startDay} - ${toDay})`,
      },

      subtitle: {
         text: "Source: https://www.postman.com",
      },

      yAxis: {
         title: {
            text: "Số lượng ca",
         },
         accessibility: {
            description: "Số lượng ca",
         },
      },
      xAxis: {
         title: {
            text: `Thời gian từ(${startDay} - ${toDay})`,
         },
         accessibility: {
            description: `Time from (${startDay} - ${toDay})`,
         },
         categories: categories,
      },

      tooltip: {},

      //   plotOptions: {
      //      series: {
      //         point: {
      //            events: {
      //               click: function () {
      //                  window.location.href = this.series.options.website;
      //               },
      //            },
      //         },
      //         cursor: "pointer",
      //      },
      //   },

      series: [
         {
            name: "Số ca nhiễm",
            data: data.map((item) => item.Confirmed),
            color: colors[8],
         },
         {
            name: "Số ca tử vong",
            data: data.map((item) => item.Deaths),
            dashStyle: "ShortDashDot",
            color: colors[1],
         },
         {
            name: "Số ca hồi phục",
            data: data.map((item) => item.Active),
            dashStyle: "ShortDot",
            color: colors[2],
         },
      ],

      responsive: {
         rules: [
            {
               condition: {
                  maxWidth: 550,
               },
               chartOptions: {
                  chart: {
                     spacingLeft: 3,
                     spacingRight: 3,
                  },
                  legend: {
                     itemWidth: 150,
                  },
                  xAxis: {
                     categories: categories,
                     title: "",
                  },
                  yAxis: {
                     visible: false,
                  },
               },
            },
         ],
      },
   };
};

function HightCharts({ data }) {
   const [options, setOptions] = useState({});

   useEffect(() => {
      if (data.length !== 0) setOptions(generateOptions(data));
   }, [data]);

   return (
      <HighchartsReact
         hightcharts={Highcharts}
         options={options}
      ></HighchartsReact>
   );
}

export default HightCharts;

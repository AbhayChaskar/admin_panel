import React, { useEffect } from "react";
import * as echarts from "echarts";

const WebTrafficCharts = () => {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficCharts")).setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },

          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Emails" },
            { value: 484, name: "Video Ads" },
            { value: 300, name: "Affiliate Ads" },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="trafficCharts"
      style={{ minHeight: "400px" }}
      className="echart"
    ></div>
  );
};

export default WebTrafficCharts;

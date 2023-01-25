import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Line, Pie, Bar } from "react-chartjs-2";
// import { CSVLink, CSVDownload } from "react-csv";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Chart from 'react-apexcharts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  // const classes = useStyles();
  const lineChartRef = useRef();
  const location = useLocation();
  // const token = useSelector((state) => state.accessToken.accessToken);
  const [dashboardData, setDashboardData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // const analyticsData = async () => {
  //   const response = await axios
  //     .post(base_url + "v1/manage/get_dash_board", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setDashboardData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   analyticsData();
  // }, []);

  // // 최근 7일
  // const feedWeek = dashboardData.feed_week_count?.map((i) => {
  //   return i.date;
  // });
  // // 일주일간 가입자 등록 수 추이
  // const userCount = dashboardData.feed_week_count?.map((i) => {
  //   return i.count;
  // });
  // // 일주일간 게시물 등록 수 추이
  // const postCount = dashboardData.user_week_count?.map((i) => {
  //   return i.count;
  // });

  // console.log('dashboardData=============================',dashboardData)

  // 라인 차트
  const data = {
    // labels: feedWeek,
    datasets: [
      {
        label: "가입자 수",
        // data: userCount,
        fill: true,
        borderColor: "#267265",
        borderWidth: 1,
        pointBackgroundColor: "#267265",
        pointRadius: 8 / 2,
        pointHoverRadius: 8,
      },
      {
        label: "게시물 수",
        // data: postCount,
        fill: false,
        borderColor: "#f2cb04",
        borderWidth: 1,
        pointBackgroundColor: "#f2cb04",
        pointRadius: 8 / 2,
        pointHoverRadius: 8,
      },
    ],
  };

  //라인 차트
  const options = {
    responsive: true,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 5,
        },
      },
      secondY: {
        display: true,
        position: "right",
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 5,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        color: "#000",
        text: "가입자 수/게시물 수",
        position: "top",
        align: "start",
        font: {
          size: 18,
          weight: 400,
          lineHeight: 1.06,
          letterSpacing: -0.42,
        },
      },
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          display: true,
          color: "#000",
          font: {
            size: 14,
            lineHeight: 2.5,
            letterSpacing: -0.42,
          },
        },
      },
    },
  };

  // // 라인 차트 엑셀 다운로드
  // const exportLineChart = () => {
  //   feedWeek.unshift("");
  //   userCount.unshift("가입자 수");
  //   postCount.unshift("게시물 수");

  //   const new_data = [];

  //   new_data.push(feedWeek);
  //   new_data.push(userCount);
  //   new_data.push(postCount);

  //   setLineChartData(new_data);

  //   setTimeout(() => {
  //     lineChartRef.current.link.click();
  //   }, 100);
  // };

  const day = new Date()
  console.log(day)

  const opt = {
    options: {
      chart: {
        id: 'apexchart',
        zoom: {
          enabled: false
        },
        toolbar: {
          export: {
            csv: {
              filename:'chart_'
            },
            svg: {
              filename:'chart_'
            },
            png: {
              filename:`chart_`
            }
          }
        },
      },
      dataLabels: {
        // enabled: false,
        // style: {
        //   colors: ['#F44336', '#E91E63', '#9C27B0']
        // }
      },
      xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        categories: ['01/23 월', '01/24 화', '01/25 수', '01/26 목', '01/27 금', '01/28 토', '01/29 일', '01/30 월'],
        labels: {
          style: {
            colors: '#A2A3A5',
          },
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#A2A3A5',
          },

        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.5,
          gradientToColors: ['#fff'],
          stops: [0, 90, 100]
        }
      },
      colors: ['#7459D9'],
    },
    series: [{
      name: 'series-1',
      // data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      data: [30, 40, 35, 50, 49, 60, 70, 91]
    }],
  }

  return (
    <div>
      <Chart options={opt.options} series={opt.series} type="area" width='100%' height={320} />
    </div>
  );
};
export default LineChart;

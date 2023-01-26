import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chart from 'react-apexcharts'

const LineChart = () => {
  // const classes = useStyles();
  const lineChartRef = useRef();
  const location = useLocation();
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

  // console.log('dashboardData=============================',dashboardData)

  const toDay = new Date().toLocaleDateString().slice(0,11)

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
              filename:`chart_${toDay}`
            },
            svg: {
              filename:`chart_${toDay}`
            },
            png: {
              filename:`chart_${toDay}`
            }
          }
        },
      },
      title: {
        text: '가입자 수',
        align: 'left'
      },
      subtitle: {
        // text: 'Price Movements',
        // align: 'left'
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

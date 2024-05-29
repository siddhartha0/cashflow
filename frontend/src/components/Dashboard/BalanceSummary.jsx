import { Component } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default class BalanceSummary extends Component {
  constructor() {
    super();
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }

  render() {
    return <Line options={options} data={data} />;
  }
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const max = 10000;
const min = 0;
const data = {
  labels,
  datasets: [
    {
      label: "Bank Balance",
      data: labels.map(() => Math.ceil(Math.random() * (max - min) + min)),
      borderColor: "#f69400",
      backgroundColor: "#f69400",
    },
    {
      label: "Wallet Balance",
      data: labels.map(() => Math.ceil(Math.random() * (max - min) + min)),
      borderColor: "#1D3557",
      backgroundColor: "#1D3557",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Balance summary",
    },
  },
};

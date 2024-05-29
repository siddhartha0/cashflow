import { Component } from "react";
import Navbar from "../Dashboard/Navbar";
import BalanceStats from "../Dashboard/BalanceStats";
import BalanceTrends from "../Dashboard/BalanceTrends";
import BalanceSummary from "../Dashboard/BalanceSummary";

export default class DashBoard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex flex-col gap-5 m-2 mt-4">
        <Navbar />
        <div className="flex flex-col gap-6">
          <div>
            <header className="text-2xl font-semibold uppercase text-cash">
              DashBoard
            </header>
            <span className="text-sm">Good Morning !!</span>
          </div>

          <div className="grid max-w-[100%] grid-cols-3 grid-flow-row gap-6">
            <div>
              <BalanceStats />
            </div>

            <div
              className="shadow-md col-span-2 row-span-3    p-2   rounded-xl capitalize "
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                backdropFilter: "blur(5px)",
                border: " 1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <BalanceSummary />
            </div>

            <div
              className="flex  flex-row shadow-md  bg-opacity-[.7] p-4   rounded-xl capitalize "
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                backdropFilter: "blur(5px)",
                border: " 1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <BalanceTrends />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

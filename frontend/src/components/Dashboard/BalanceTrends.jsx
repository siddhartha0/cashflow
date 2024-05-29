import { Component } from "react";
import { CiBank, CiWallet } from "react-icons/ci";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export default class BalanceTrends extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex flex-col gap-4 w-[100%]">
        <header className="text-cash font-semibold">Balance Trends</header>

        <div className="flex justify-between  w-[100%]">
          <div className="flex flex-col">
            <CiBank className="text-2xl place-self-start text-hold" />

            <article className="text-dark text-opacity-95 mt-3 ">
              Bank Stats:
            </article>

            <span className="flex gap-2 place-items-center font-semibold text-hold text-opacity-55 ">
              <FaArrowTrendDown />
              2.8% down
            </span>
          </div>

          <hr className="bg-grey bg-opacity-[0.5] w-[1px] h-[100%]" />

          <div className="flex flex-col  ">
            <CiWallet className="text-2xl place-self-start text-secondary" />

            <article className="text-dark text-opacity-95 mt-2">
              Wallet Stats:
            </article>

            <span className="flex gap-2 place-items-center  font-semibold text-dark text-opacity-[0.8]">
              <FaArrowTrendUp />
              4% up
            </span>
          </div>
        </div>
      </div>
    );
  }
}

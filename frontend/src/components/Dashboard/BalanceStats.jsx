import { Component } from "react";
import { CiBank, CiWallet } from "react-icons/ci";

export default class BalanceStats extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className="flex  flex-row shadow-md  bg-opacity-[.7] p-2 justify-evenly  rounded-xl capitalize "
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          backdropFilter: "blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="m-2 p-2 flex flex-col gap-2 place-items-end">
          <div
            className="relative  h-24 w-24 rounded-full  z-10  bg-white bg-opacity-55"
            style={{
              background: `conic-gradient(#f69400 ${(100 / 150) * 360}deg,
#004d96 0 
)`,
              opacity: "0.7",
            }}
          >
            <div
              className="h-20 w-20
rounded-full absolute right-2 top-2 z-0 bg-white "
            ></div>
          </div>

          <div className="mt-10 gap-2 flex flex-col place-items-end ">
            <article className="text-dark text-opacity-95 capitalize ">
              Total Amount
            </article>
            <span className="font-semibold text-dark text-opacity-50">
              10000
            </span>
          </div>
        </div>

        <hr className="w-0.5 bg-dark bg-opacity-25 h-52 place-self-center" />

        <div className="m-2 p-2 flex  flex-col gap-4 text-sm  relative">
          <div className="flex flex-col">
            <CiBank className="text-2xl place-self-start text-hold" />

            <article className="text-dark text-opacity-95 mt-3 ">
              Bank Balance:
            </article>

            <span className="font-semibold text-hold text-opacity-55 ">
              6000
            </span>
          </div>

          <hr className="mt-1 w-[100%] text-dark text-opacity-50" />

          <div className="mt-3">
            <div className="flex flex-col  relative ">
              <CiWallet className="text-2xl place-self-start text-secondary" />

              <article className="text-dark text-opacity-95 mt-2">
                Wallet Balance:
              </article>

              <span className="font-semibold text-dark text-opacity-[0.8]">
                4000
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

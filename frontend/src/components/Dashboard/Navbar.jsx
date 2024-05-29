import { Component } from "react";
import { CiLight, CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex place-items-center justify-between ">
        <div className="flex gap-2 bg-white p-3 rounded-sm">
          <input
            type="text"
            placeholder="Search ..."
            className="outline-none text-sm border-none bg-white"
          />
          <CiSearch className="text-xl text-cash" />
        </div>

        <div className="flex cursor-pointer place-items-center gap-4 text-2xl">
          <CiLight />
          <IoNotifications />
          <FaUser className="bg-cash rounded-full p-1 text-primary-light " />
        </div>
      </div>
    );
  }
}

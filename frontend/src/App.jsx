import { Component } from "react";
import { Outlet } from "react-router-dom";
import MainPageLayout from "./components/pages/MainPageLayout";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex w-screen h-[100vh] justify-between gap-4 bg-primary ">
        <div>
          <MainPageLayout />
        </div>
        <div className="flex-1 m-2">
          <Outlet />
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import { Link } from "react-router-dom";
import companylogo from "../../assets/pics/companylogo.png";
import RoutesPath from "../../const/RoutesPath";

export default class MainPageLayout extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
    };
  }

  activeCurrentPath(ID) {
    this.setState({
      id: ID,
    });
  }

  render() {
    return (
      <div className="flex flex-col gap-2 bg-light-grey h-[100vh]  min-w-[180px]">
        <img
          src={companylogo}
          className="h-24 w-24 -mb-6 place-self-center "
          alt=""
        />
        {RoutesPath.map((routes) => (
          <div
            key={routes.id}
            className="flex place-items-center p-5 cursor-pointer gap-4"
            style={
              this.state.id === routes.id
                ? {
                    background: "#EAEEF3",
                    boxShadow: "0px 2px 5px -4px rgba(0, 0, 0, 0.5)",
                  }
                : {
                    opacity: 0.8,
                  }
            }
          >
            <img src={routes.icons} className="h-6 fill-primary  " alt="" />
            <Link
              to={routes.path}
              onClick={this.activeCurrentPath.bind(this, routes.id)}
            >
              {routes.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

import React, { Component } from "react";
import Header from "../Components/Header";
import Visitors from "../Components/Visitors";
import Products from "../Components/Products";
import Sales from "../Components/Sales";
import StoreOverview from "../Components/StoreOverview";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <Header />

          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <Visitors />
                  <Products />
                </div>
                <div class="col-lg-6">
                  <Sales />
                  <StoreOverview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

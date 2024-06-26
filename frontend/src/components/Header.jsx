import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard v3</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

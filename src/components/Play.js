import React, { Component } from "react";
import { useSelector } from "react-redux";
import PlayNav from "./PlayNav";
import "./Play.css";



class Play extends Component {
  render() {
    return (
      <div className =" containerP">
        <PlayNav />
      </div>
    );
  }
}

export default Play;

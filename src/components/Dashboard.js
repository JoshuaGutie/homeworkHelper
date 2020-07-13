import React, { Component } from "react";
import Navigation from "./Navigation";
import "./Dashboard.css";


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
        	
		};
	}

	

	render() {
		return (
			<div className="containerD">
				<Navigation /> 
			</div>
		);
	}
}

export default Dashboard;

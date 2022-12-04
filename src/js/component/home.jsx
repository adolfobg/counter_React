import React from "react";
import props from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div className="watch">
			<div className="icon"><i class="far fa-clock"></i></div>
			<div className="six">{props.six}</div>
			<div className="five">{props.five}</div>
			<div className="four">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="one">{props.one}</div>
		</div>
	);
};



export default Home;

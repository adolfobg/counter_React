import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div className="watch">
			<div className="icon"><i class="far fa-clock"></i></div>
			<div className="six">{props.six % 10}</div>
			<div className="five">{props.five % 10}</div>
			<div className="four">{props.four % 10}</div>
			<div className="three">{props.three % 10}</div>
			<div className="two">{props.two % 10}</div>
			<div className="one">{props.one % 10}</div>
		</div>
	);
};

Home.propTypes = {
	six: PropTypes.number,
	five: PropTypes.number,
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number,
}


export default Home;

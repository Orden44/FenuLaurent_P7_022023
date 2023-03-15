 import React from "react";

const Banner = ({ cover, title }) => {
	return (
	  <div className="homebanner">
		<img
		  src={cover}
		  alt="illustration bannière"
		  className="homebanner__img"
		/>
		<h1 className="homebanner__title">{title}</h1>
	  </div>
	);
  };

export default Banner;
import React from "react";
import star from "../assets/img/star.svg";
import empty from "../assets/img/starempty.svg";

const Rate = ({ rating }) => {
  const array = [1, 2, 3, 4, 5];
  
  return (
    <>
      {array.map((arrayStar, index) =>
        arrayStar <= rating ? (
            <img key={index} src={star} alt="étoile pleine" />
        ) : (
            <img key={index} src={empty} alt="étoile vide" />
        )
      )}
    </>
  );
};

export default Rate;
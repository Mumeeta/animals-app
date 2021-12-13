import React from "react";
import { Link } from "react-router-dom";

const AnimalsCard = (props) => {
  return (
    <div className="animal_card">
      <img Src={props.src} Alt={props.name}></img>
      <p className="animal_tag">{props.name}</p>
      <p>
        <Link to={`/animals/${props.name}`} className="animal_card_link">
          Read more
        </Link>
      </p>
    </div>
  );
};

export default AnimalsCard;

import React from "react";
import { useHistory } from "react-router-dom";

const AnimalsSingle = (match) => {
  let title =
    match.match.params.id.slice(0, 1).toUpperCase() +
    match.match.params.id.slice(1).toLowerCase();
  console.log(title);

  const history = useHistory();
  return (
    <div className="animal_single_wrapper">
      <div className="animal_single">
        <img
          src={"https://source.unsplash.com/800x600/?" + title}
          alt={title}
        ></img>
        <p>{title}</p>
        <button onClick={history.goBack}>X</button>
      </div>
    </div>
  );
};
export default AnimalsSingle;

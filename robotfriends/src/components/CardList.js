import React from "react";
import Cards from "./Cards";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot) => {
    return (
      <Cards
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;

import React from "react";

const CardsReturn = ({ cards }) => {
  if (!Array.isArray(cards)) {
    // Handle the case when tasks is not an array or undefined
    return <div>Sem tarefas</div>;
  }

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.category}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsReturn;

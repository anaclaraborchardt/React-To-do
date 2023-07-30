import React from "react";
import CardsTarefas from "./CardsTarefas";

const CardsReturn = ({ cards }) => {

  return (
     <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg 
     shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {cards.map((card) => (
        <div key={card.id}>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.name}
          </h2>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {card.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardsReturn;

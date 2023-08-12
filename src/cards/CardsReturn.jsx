import React from "react";

const CardsReturn = ({ cards, properties }) => {
  
  return (
    <div>
      {/* para fazer cada card ficar separado do outro, precisa usar a função map para procurar 
      card dentro de cards e replicar a div */}
      {cards.map((card, index) => (
        <div
          key={index}
          className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.name}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {card.category}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {card.properties}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsReturn;


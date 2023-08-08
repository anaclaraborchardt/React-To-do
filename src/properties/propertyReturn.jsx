import React from "react";

const PropertyReturn = ({properties}) => {

    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg 
        shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         {properties.map((property, index) => (
           <div key={index}>
             <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {property.name}
             </h2>
             <p className="font-normal text-gray-700 dark:text-gray-400">
               {property.type}
             </p>
           </div>
         ))}
       </div>
     );
}

export default PropertyReturn;
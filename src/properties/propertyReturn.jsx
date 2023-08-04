import React from "react";

const PropertyReturn = ({properties}) => {

    return (
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg 
        shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         {properties.map((property) => (
           <div key={property.id}>
             <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {property.name}
             </h2>
             <p class="font-normal text-gray-700 dark:text-gray-400">
               {property.type}
             </p>
           </div>
         ))}
       </div>
     );
}

export default PropertyReturn;
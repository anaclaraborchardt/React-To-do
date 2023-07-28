import React, { useEffect, useState } from "react";
import CardsTarefas from "./CardsTarefas";

const CardsReturn = (cards) => {

  return(
    <h3>{cards.name}</h3>
  )
}

export default CardsReturn;
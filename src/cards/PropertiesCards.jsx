import React from "react";
import CardsTarefas from "./CardsTarefas";

const PropertiesCards = (cards, properties) =>{

    const onSaveDataHandler = (entradaDados) => {
        const dadosTarefa = {
        ... entradaDados,
        id: Math.random().toString(),
        }
        cards.onAddExpense(dadosTarefa);
    }
    return(
        <div >
            <CardsTarefas onSaveData = {onSaveDataHandler}></CardsTarefas>
        </div>
    )

}

export default PropertiesCards;
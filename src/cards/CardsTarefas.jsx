import React from "react";
import {useState, useRef} from "react"

const CardsTarefas = (cards) => {

    const nameInputRef = useRef();
    const categoryInputRef = useRef();
    const[nameCardInput, setNameCard] = useState('');
    const[categoryCardInput, setCategoryCard] = useState('');

    const inputNameChangeHandler = (event) => {
        setNameCard(event.target.value);
    }

    const inputCategoryChangeHandler = (event) => {
        setCategoryCard(event.target.value);
    }

    const submitChangeHandler = (event) => {
        event.preventDefault();

        const enteredNameValue = nameInputRef.current.value;
        const enteredCategoryValue = categoryInputRef.current.value;

        console.log(enteredNameValue);
        console.log(enteredCategoryValue);

        const dadosTarefa = {
            name : nameCardInput,
            category : categoryCardInput
        }

        cards.onSaveData(dadosTarefa)

        localStorage.setItem('dadosTarefa', JSON.stringify(dadosTarefa))
        console.log(dadosTarefa);

    }

    return (
     
        <div className="w-full max-w-xs, divForms" >
        <form onSubmit={submitChangeHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Digite aqui a tarefa
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Card's name"
                    value={nameCardInput}
                    ref={nameInputRef}
                    onChange={inputNameChangeHandler}>
                </input>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Escolha uma categoria
                <br></br>
            <select
            value={categoryCardInput}
            ref={categoryInputRef}
            onChange={inputCategoryChangeHandler}>
                <option value="todo">To-do</option>
                <option value="done">Doing</option>
                <option value="done">Done</option>
            </select>
            </label>   

            <button type="submit">Salvar Tarefa</button>
        </form>
        </div>


    )
}

export default CardsTarefas;
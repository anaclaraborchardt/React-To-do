import React from "react";
import {useState, useRef} from "react"

const PropertyAdding = ({onSaveDataProperty, properties}) => {
    
    const nameInputRef = useRef();
    const typeInputRef = useRef();
    const[namePropertyInput, setNameProperty] = useState('');
    const[typePropertyInput, setTypeProperty] = useState('');

    const inputNameChangeHandler = (event) => {
        setNameProperty(event.target.value);
    }

    const inputTypeChangeHandler = (event) => {
        setTypeProperty(event.target.value);
    }

    const submitChangeHandler = (event) => {
        event.preventDefault();

        const enteredNameValue = nameInputRef.current.value;
        const enteredtypeValue = typeInputRef.current.value;

        console.log(enteredNameValue);
        console.log(enteredtypeValue);

        const dadosProperty = {
            name : namePropertyInput,
            type : typePropertyInput
        }

        localStorage.setItem('dadosProperty', JSON.stringify(dadosProperty))
        onSaveDataProperty(dadosProperty);
        console.log(dadosProperty);

    }

    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <form onSubmit={submitChangeHandler}>
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                >Digite o nome da propriedade que quer criar</label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                focus:bg-white focus:border-gray-500"
                value={namePropertyInput}
                ref={nameInputRef}
                onChange={inputNameChangeHandler}>
                </input>

                <label>
                Escolha o tipo da propriedade
                <br></br>
                <select
                value={typePropertyInput}
                ref={typeInputRef}
                onChange={inputTypeChangeHandler}>
                <option value="number">Number</option>
                <option value="text">Text</option>
            </select>
            </label> 
            <br></br>
            <button type="submit">Criar Propriedade</button> 
            </form>

{/* Tem que adicionar o botão de PropertyAdding */}
        </div>
    )

}

export default PropertyAdding;
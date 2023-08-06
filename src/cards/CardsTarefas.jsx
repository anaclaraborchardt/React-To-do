import React, { useState, useRef } from "react";
import CardsReturn from "./CardsReturn";

const CardsTarefas = ({ onSaveData, cards, properties }) => {
  const nameInputRef = useRef();
  const categoryInputRef = useRef();
  const propertyInputRef = useRef();
  const insertInputRef = useRef();

  const [nameCardInput, setNameCard] = useState("");
  const [categoryCardInput, setCategoryCard] = useState("");
  const [propertyCardInput, setPropertyCard] = useState("");
  const [insertCardInput, setInsertCard] = useState("");

  const inputNameChangeHandler = (event) => {
    setNameCard(event.target.value);
  };

  const inputCategoryChangeHandler = (event) => {
    setCategoryCard(event.target.value);
  };

  const inputPropertyChangeHandler = (event) => {
    setPropertyCard(event.target.value);
    setInsertCard("");
  };

  const inputInsertChangeHandler = (event) => {
    setInsertCard(event.target.value);
  };

  const propertySelectChangeHandler = (event) => {
    inputPropertyChangeHandler(event);
    inputInsertChangeHandler(event);
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();

    const enteredNameValue = nameInputRef.current.value;
    const enteredCategoryValue = categoryInputRef.current.value;
    const enteredPropertyValue = propertyInputRef.current.value;

    console.log(enteredNameValue);
    console.log(enteredCategoryValue);

    const dadosTarefa = {
      name: nameCardInput,
      category: categoryCardInput,
      properties: propertyCardInput,
      insert: insertCardInput,
    };

    localStorage.setItem("dadosTarefa", JSON.stringify(dadosTarefa));
    onSaveData(dadosTarefa);
    console.log(dadosTarefa);
  };

  const selectedProperty = properties.find((property) => property.name === propertyCardInput);

  return (
    <div className="w-full max-w-xs, divForms">
      <form onSubmit={submitChangeHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Digite aqui a tarefa
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Card's name"
            value={nameCardInput}
            ref={nameInputRef}
            onChange={inputNameChangeHandler}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Escolha uma categoria
          <br />
          <select value={categoryCardInput} ref={categoryInputRef} onChange={inputCategoryChangeHandler}>
            <option value="todo">To-do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Escolha uma propriedade
          <br />
          <select value={propertyCardInput} ref={propertyInputRef} onChange={propertySelectChangeHandler}>
            {/* nesse trecho, ele vai procurar pelas propriedades cadastradas e vai listar elas aqui */}
            {properties.map((property) => (
              <option key={property.name} value={property.name}>
                {property.name}
              </option>
            ))}
          </select>
        </label>

        {/* Renderiza o input apropriado com base no tipo da propriedade selecionada */}
        {selectedProperty && (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {selectedProperty.type === "text" ? "Digite aqui a propriedade (texto)" : "Digite aqui a propriedade (número)"}
            <br />
            <input
              type={selectedProperty.type}
              placeholder="Digite aqui a propriedade"
              value={insertCardInput}
              ref={insertInputRef}
              onChange={inputInsertChangeHandler}
            />
          </label>
        )}

        <button type="submit">Salvar Tarefa</button>
      </form>
      <CardsReturn cards={cards} />
    </div>
  );
};

export default CardsTarefas;

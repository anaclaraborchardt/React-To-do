import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Input from "./form/Input";
import CardsTarefas from "./cards/CardsTarefas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./form/Formulario";
import PropertyAdding from "./properties/PropertyAdding";

const App = () => {
  const INITIAL_EXPENSES = [];
  const INITIAL_PROPERTIES = [];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [properties, setProperties] = useState(INITIAL_PROPERTIES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [{ ...expense, id: Math.random().toString() }, ...prevExpenses];
    });
  };
  

  const addPropertyHandler = (property) => {
    setProperties((prevProperty) => {
      return [property, ...prevProperty];
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Input />} />
          <Route
            path="cardstarefas"
            element={
              <CardsTarefas
                properties={properties}
                cards={expenses}
                onSaveData={addExpenseHandler}
              />
            }
          />
          <Route path="login" element={<Input />} />
          <Route path="cadastro" element={<Formulario />} />
          <Route
            path="properties"
            element={<PropertyAdding properties={properties} onSaveDataProperty={addPropertyHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
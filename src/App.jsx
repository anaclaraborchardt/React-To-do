import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Input from "./form/Input";
import CardsTarefas from "./cards/CardsTarefas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./form/Formulario";
import PropertyAdding from "./properties/PropertyAdding";

const App = () => {
  const INITIAL_EXPENSES = [{ id: "1", name: "ola", category: "done" }];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
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
            element={<CardsTarefas cards={expenses} onSaveData={addExpenseHandler} />}
          />
          <Route path="login" element={<Input />} />
          <Route path="cadastro" element={<Formulario />} />
          <Route path="properties" element={<PropertyAdding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

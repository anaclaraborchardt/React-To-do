import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Input from './form/Input'
import CardsTarefas from './cards/CardsTarefas'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from './form/Formulario'
import CardsReturn from './cards/CardsReturn'

const App = () => {

  const INITIAL_EXPENSES = [
    {id: '1', name:'ola', category:'done'}
  ];   

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
 
  const addExpenseHandler = expense => {
    setExpenses ((prevExpense) => {
      return [expense, ...prevExpense ]

    })
  };



  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path= "/" element={<Input />}></Route>
        <Route path="cardstarefas" element={<CardsTarefas
        />}></Route>
        <Route
                path="/cardsReturn"
                element={<CardsReturn cards={expenses} onAddExpense={addExpenseHandler} />}
              />
        <Route path="login" element={<Input />}></Route>
        <Route path="cadastro" element={<Formulario />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}


export default App

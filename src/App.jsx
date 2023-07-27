import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './form/Formulario'
import Header from './header/Header'
import Input from './form/Input'

const App = () => {

  return (
    <div>
      <Header></Header>
      <div className='tituloCadastro'>
      <h1>Faça seu Cadastro</h1>
      </div>
      <Input></Input>

    </div>
  )
}

export default App

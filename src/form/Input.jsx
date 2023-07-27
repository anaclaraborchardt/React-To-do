import {useState, useRef} from "react"
import './Formulario.css'

const Input = (props) => {
    const nameInputRef = useRef()
    const [nameEnteredInput, setNameInput] = useState('')
    const [numberEnteredInput, setNumberInput] = useState('')

    const inputChangeHandler = event => {
        setNameInput(event.target.value);
    }

    const inputChangeHandlerNumber = event => {
        setNumberInput(event.target.value);
    }

    const submitChangeHandler = event => {
        event.preventDefault();

        console.log(nameEnteredInput)
        console.log(numberEnteredInput)
        const enteredValue = nameInputRef.current.value
        console.log(enteredValue)
    }

    return(
        <div className="w-full max-w-xs, divForms" >
            <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
                 onSubmit = {submitChangeHandler}>
                 <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Qual o seu nome?</label>
                    <input type="text" onChange={inputChangeHandler}></input>
                </div>
                <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Qual o número do cadastro ?</label>
                    <input type="number" onChange={inputChangeHandlerNumber}></input>
                </div>
                
                <button class="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button">Enviar</button>
                <br></br>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Esqueci minha senha
                </a>
        
            </form>
        </div>
    )
}

export default Input
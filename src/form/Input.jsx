import {useState, useRef} from "react"
import './Formulario.css'

const Input = (cards) => {
    const nameInputRef = useRef()
    const numberInputRef = useRef();
    const [nameEnteredInput, setNameInput] = useState('')
    const [numberEnteredInput, setNumberInput] = useState('')
    const [validnameEnteredInput, setvalidNameInput] = useState(true)
    const [validnumberEnteredInput, setvalidNumberInput] = useState(true)
    const nameInputClasses = validnameEnteredInput ? 'valido' : 'invalido'

    const inputChangeHandler = (event) => {
        setNameInput(event.target.value);
    }

    const inputChangeHandlerNumber = (event) => {
        setNumberInput(event.target.value);
    }

    const submitChangeHandler = (event) => {
        event.preventDefault();

        if(nameEnteredInput.trim() === ''){
            setvalidNameInput(false)
            return;    
        }else if(numberEnteredInput.trim() === ''){
            setvalidNumberInput(false)
            return; 
        }
        setvalidNameInput(true);
        setvalidNumberInput(true);

        const enteredNameValue = nameInputRef.current.value
        const enteredNumberValue = numberInputRef.current.value
        console.log(enteredNameValue)
        console.log(enteredNumberValue)

        const dadosUsuarioCadastrado = {
            nameEnteredInput: nameEnteredInput,
            numberEnteredInput: numberEnteredInput
        }

        localStorage.setItem('dadosUsuarioCadastrado', JSON.stringify(dadosUsuarioCadastrado))
        console.log(dadosUsuarioCadastrado)

        setNameInput('');
        setNumberInput('');

        
    }

    return(
        <div className="w-full max-w-xs, divForms" >
            <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                 onSubmit = {submitChangeHandler}>
                 <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Qual o seu nome?
                    <input type="text" 
                    onChange={inputChangeHandler}
                    ref={nameInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Nome"
                    value={nameEnteredInput}></input>
                    </label>
                    {!validnameEnteredInput && <p>Você deve preencher seu nome</p>}
                </div>
                 <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Qual o número do cadastro ?
                    <input type="number" 
                    onChange={inputChangeHandlerNumber}
                    ref={numberInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Cadastro"
                    value={numberEnteredInput}></input>
                </label>
                {!validnumberEnteredInput && <p>Você deve preencher o número do cadastro</p>}
                </div>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">Enviar</button>
                <br></br>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Esqueci minha senha
                </a>
        
            </form>
        </div>
    )
}

export default Input
import { useEffect } from "react";
import {useState, useRef} from "react"
import './Formulario.css'

const Input = (cards) => {
    const passwordInputRef = useRef();
    const numberInputRef = useRef();
    const [passwordEnteredInput, setPasswordInput] = useState('');
    const [numberEnteredInput, setNumberInput] = useState('');
    const [validpasswordEnteredInput, setvalidPasswordInput] = useState(true);
    const [validnumberEnteredInput, setvalidNumberInput] = useState(false);
    //inicialmente esse input não é acionado, por isso é false
    const [numberTouched, setNumberTouched] = useState(false);


    const inputChangeHandler = (event) => {
        setPasswordInput(event.target.value);
    }

    const inputChangeHandlerNumber = (event) => {
        setNumberInput(event.target.value);
    }

    const numberBlurHandler = event => {
        setNumberTouched(true);

        if(numberEnteredInput.trim() === ''){
            setvalidNumberInput(false)
            return;    
        }
    }

    useEffect(() => {
        if(validnumberEnteredInput){
            console.log("cadastro válido")
        }
    }, [validnumberEnteredInput])

    const submitChangeHandler = (event) => {
        event.preventDefault();

        setNumberTouched(true);

        if(passwordEnteredInput.trim() === ''){
            setvalidPasswordInput(false)
            return;    
        }else if(numberEnteredInput.trim() === ''){
            setvalidNumberInput(false)
            return; 
        }
        setvalidPasswordInput(true);
        setvalidNumberInput(true);

        const enteredPasswordValue = passwordInputRef.current.value
        const enteredNumberValue = numberInputRef.current.value
     

        const dadosUsuarioCadastrado = {
            passwordEnteredInput: passwordEnteredInput,
            numberEnteredInput: numberEnteredInput
        }

        localStorage.setItem('dadosUsuarioCadastrado', JSON.stringify(dadosUsuarioCadastrado))
        console.log(dadosUsuarioCadastrado)

        setPasswordInput('');
        setNumberInput('');

        
    }

    return(
        <div className="w-full max-w-xs, divForms" >
            <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                 onSubmit = {submitChangeHandler}>

                    <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Número do cadastro
                    <input type="number" 
                    onChange={inputChangeHandlerNumber}
                    onBlur={numberBlurHandler}
                    ref={numberInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Cadastro"
                    value={numberEnteredInput}></input>
                    </label>
                    {!validnumberEnteredInput && <p>Você deve preencher seu nome</p>}
                </div>

                    
                 <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="name">Qual sua senha?
                    <input type="text" 
                    onChange={inputChangeHandler}
                    ref={passwordInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Senha"
                    value={passwordEnteredInput}></input>
                    </label>
                    {!validpasswordEnteredInput && <p>Você deve preencher sua senha</p>}
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
import { useState } from "react";
import './Formulario.css';
import useInput from '../hooks/hooks-input';

const Input = (props) => { // Removed unused props parameter

    const preenchido = (valor) => valor.trim() !== '';

    const {
        value: passwordEnteredInput,
        validacao: validpasswordEnteredInput,
        erro: passwordInputError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: inputBlurHandler,
        limpaForm: resetPasswordInput
      } = useInput(preenchido);

      const {
        value: numberEnteredInput,
        validacao: validnumberEnteredInput,
        erro: numberInputError,
        valueChangeHandler: numberChangedHandler,
        inputBlurHandler: numberBlurHandler,
        limpaForm: resetNumberInput
      } = useInput(preenchido);

    let inputValido = false;

    // if (validnumberEnteredInput && validpasswordEnteredInput) {
    //     console.log("cadastro válido")
    //     inputValido = true;
    // }

    const submitChangeHandler = (event) => {
        event.preventDefault();

        if (!validnumberEnteredInput || !validpasswordEnteredInput) {
            return;
        }

        resetNumberInput();
        resetPasswordInput();

        const dadosUsuarioCadastrado = {
            passwordEnteredInput: passwordEnteredInput,
            numberEnteredInput: numberEnteredInput
        }

        localStorage.setItem('dadosUsuarioCadastrado', JSON.stringify(dadosUsuarioCadastrado));
        console.log(dadosUsuarioCadastrado);
    }

    return (
        <div className="w-full max-w-xs, divForms">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitChangeHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Número do cadastro
                        <input type="number"
                            onChange={numberChangedHandler} 
                            onBlur={inputBlurHandler} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Cadastro"
                            value={numberEnteredInput}></input>
                    </label>
                    {!validnumberEnteredInput && <p>Você deve preencher seu cadastro</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Qual sua senha?
                        <input type="text"
                            onChange={passwordChangedHandler} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Senha"
                            value={passwordEnteredInput}></input>
                    </label>
                    {!validpasswordEnteredInput && <p>Você deve preencher sua senha</p>}
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                //  disabled={!inputValido} 
                 type="submit">Enviar</button>
                <br></br>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Esqueci minha senha
                </a>
            </form>
        </div>
    )
}

export default Input;

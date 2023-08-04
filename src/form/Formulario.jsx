import React from "react"
import {useState, useRef} from "react"

const Formulario = () => {

    const emailInputRef = useRef();
    const nomeInputRef = useRef()
    const numeroInputRef = useRef();

    const [emailEnteredInput, setEmail] = useState('');
    const [nomeEnteredInput, setNome] = useState('');
    const [numeroEnteredInput, setNumero] = useState('');

    const nomeChangeHandler = (event) => {
        setNome(event.target.value);
    }

    const numeroChangeHandler = (event) => {
        setNumero(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const submitChangeHandler = (event) => {
        event.preventDefault();

        // const enteredEmailValue = emailInputRef.current.value;
        // const enteredNomeValue = nomeInputRef.current.value;
        // const enteredNumeroValue = numeroInputRef.current.value;

        const dadosUsuarioCadastrado = {
            emailEnteredInput: emailEnteredInput,
            nomeEnteredInput: nomeEnteredInput,
            numeroEnteredInput: numeroEnteredInput
    }
    console.log(dadosUsuarioCadastrado)
    localStorage.setItem('dadosUsuarioCadastrado', JSON.stringify(dadosUsuarioCadastrado))
}
    

    return (
        <div>
            <form onSubmit={submitChangeHandler}>
                <div  className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    >Digite o seu e-mail
                        <input 
                        onChange={emailChangeHandler}
                        ref={emailInputRef}
                        value={emailEnteredInput}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                        focus:bg-white focus:border-gray-500" placeholder="e-mail">
                        </input>
                    </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Digite o seu Nome
                        <input
                        onChange={nomeChangeHandler} 
                        ref={nomeInputRef}
                        value={nomeEnteredInput}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        </input>
                    </label>
                    </div>
        
              
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Digite o número do cadastro
                        <input 
                        onChange={numeroChangeHandler}
                        ref={numeroInputRef}
                        value={numeroEnteredInput}
                        type="number"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        </input>
                    </label>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Cadastrar</button>
            </form>
        </div>
    )

}

export default Formulario
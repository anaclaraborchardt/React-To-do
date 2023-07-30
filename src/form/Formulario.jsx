import React from "react"

const Formulario = () => {

    return (
        <div>
            <form>
                <div  className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    >Digite o seu e-mail
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                        focus:bg-white focus:border-gray-500" placeholder="e-mail">
                        </input>
                    </label>
                    </div>
                </div>
                <div>
                    <label>Digite o seu Nome
                        <input>
                        </input>
                    </label>
                </div>
                <div>
                    <label>Digite o número do seu cadastro
                        <input>
                        </input>
                    </label>
                </div>
            </form>
        </div>
    )

}

export default Formulario
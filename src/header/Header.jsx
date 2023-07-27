import React from "react";

const Header = () => {

    return (
        <ul className="flex justify-between">
            <li className="mr-3">
                <a className="inline-block border border-blue-500 rounded py-2 px-4 
                bg-blue-500 hover:bg-blue-700 text-white" href="#">Cadastro</a>
            </li>
            <li className="mr-3">
                <a className="inline-block border border-white rounded hover:border-gray-200 
                text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Login</a>
            </li>
        </ul>
    )
}

export default Header;
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {

    return (
        <>
        <nav>
            <ul className="flex justify-between">
                <li className="mr-3">
                <Link className="inline-block border border-blue-500 rounded py-2 px-4 
                bg-blue-500 hover:bg-blue-700 text-white"
                to = "/login">Login
                </Link>
                </li>
                <li className="mr-3">
                    <Link className="inline-block border border-white rounded hover:border-gray-200 
                text-blue-500 hover:bg-gray-200 py-2 px-4"
                to="/cadastro">Cadastro
                    </Link>
                </li>
                <li>
                    <Link 
                    className="inline-block border border-white rounded hover:border-gray-200 
                    text-blue-500 hover:bg-gray-200 py-2 px-4"
                    to="/cardstarefas">Tarefas</Link>
                </li>
                <li>
                    <Link 
                    className="inline-block border border-white rounded hover:border-gray-200 
                    text-blue-500 hover:bg-gray-200 py-2 px-4"
                    to="/properties">Propriedades</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Header;
import { useState, useReducer } from 'react';

const hooksInput = {
    valor: '',
    isTouched: false
}

// o reducer é uma função que recebe um estado e uma ação e retorna um novo estado
const inputStateReducer = (state, action) => { 
    
    if (action.type === 'INPUT') {
        return { valor: action.value, isTouched: state.isTouched }
    }
    if (action.type === 'BLUR') {
        return { isTouched: true, valor: state.valor }
    }
    if (action.type === 'RESET') {
        return { isTouched: false, valor: '' }
    }
    return state;
}

const useInput = (validacao) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, hooksInput);
    const valorValido = validacao(inputState.valor);
    const erro = !valorValido && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    // o dispatch envia ações para um reducer. Indica a mudaça de estado
    const inputBlurHandler = () => {
        dispatch({ type: 'BLUR' });
    };

    const limpaForm = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.valor,
        validacao: valorValido,
        erro,
        valueChangeHandler,
        inputBlurHandler,
        limpaForm
    };
};

export default useInput;

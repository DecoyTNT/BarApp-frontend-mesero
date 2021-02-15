import React, { useReducer } from 'react';
import BebidasContext from './BebidasContext';
import BebidasReducer from './BebidasReducer';
import {
    OBTENER_BEBIDAS,
    NUEVA_BEBIDA,
    ACTUALIZAR_BEBIDA,
    SELECCIONAR_BEBIDA
} from '../../types/index';

const BebidasState = ({ children }) => {

    const initialState = {
        bebidas: [],
        bebida: null
    }

    const [state, dispatch] = useReducer(BebidasReducer, initialState);

    const obtenerBebidasDisponibles = bebidas => {
        dispatch({
            type: OBTENER_BEBIDAS,
            payload: bebidas
        });
    }

    const agregarBebida = bebida => {
        dispatch({
            type: NUEVA_BEBIDA,
            payload: bebida
        });
    }

    const modificarBebida = bebida => {
        dispatch({
            type: ACTUALIZAR_BEBIDA,
            payload: bebida
        });
    }

    const seleccionarBebida = bebida => {
        dispatch({
            type: SELECCIONAR_BEBIDA,
            payload: bebida
        });
    }

    return (
        <BebidasContext.Provider
            value={{
                bebidas: state.bebidas,
                bebida: state.bebida,
                obtenerBebidasDisponibles,
                agregarBebida,
                modificarBebida,
                seleccionarBebida
            }}
        >
            {children}
        </BebidasContext.Provider>
    );
}

export default BebidasState;